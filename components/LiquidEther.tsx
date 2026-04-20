'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './LiquidEther.module.css'

export default function LiquidEther() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    if (window.innerWidth <= 768) return   // skip WebGL on mobile — too heavy

    const container = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    container.appendChild(renderer.domElement)

    // Shader Uniforms — greyscale fluid, no colour uniforms needed
    const uniforms = {
      uTime:       { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
    }

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2  uResolution;
        uniform vec2  uMouse;
        varying vec2  vUv;

        // ── Simplex 2-D noise ──────────────────────────
        vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x,289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute(permute(i.y + vec3(0.0,i1.y,1.0))
                         + i.x + vec3(0.0,i1.x,1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0),
                                  dot(x12.xy,x12.xy),
                                  dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x2 = 2.0*fract(p*C.www) - 1.0;
          vec3 h  = abs(x2) - 0.5;
          vec3 ox = floor(x2 + 0.5);
          vec3 a0 = x2 - ox;
          m *= 1.79284291400159 - 0.85373472095314*(a0*a0+h*h);
          vec3 g;
          g.x  = a0.x *x0.x  + h.x *x0.y;
          g.yz = a0.yz*x12.xz + h.yz*x12.yw;
          return 130.0*dot(m,g);
        }

        // ── FBM: 4 octaves with rotation to avoid axis bands ──
        float fbm(vec2 p){
          float val = 0.0;
          float amp = 0.52;
          // ~37° rotation matrix baked in
          mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
          for(int i = 0; i < 4; i++){
            val += amp * snoise(p);
            p    = rot * p * 2.02;
            amp *= 0.48;
          }
          return val;
        }

        void main(){
          vec2 st = gl_FragCoord.xy / uResolution.xy;

          // uTime increments ~0.003/frame — use directly, no extra scale-down
          float t = uTime;

          // ── Single domain warp (9 noise calls total vs 36) ──
          vec2 q = vec2(
            fbm(st + vec2(0.00, 0.00) + t * 0.36),
            fbm(st + vec2(5.20, 1.30) + t * 0.30)
          );

          float f = fbm(st + q * 0.85 + t * 0.26);

          // ── Mouse: very subtle nudge only ──────────────
          float mGlow = smoothstep(0.20, 0.0, distance(st, uMouse)) * 0.035;
          f += mGlow;

          // ── Greyscale mapping ───────────────────────────
          float brightness = smoothstep(-0.08, 0.72, f);
          brightness = pow(brightness, 1.85);

          // near-black base → mid-grey blobs (never pure white)
          vec3 color = mix(vec3(0.022), vec3(0.50), brightness);

          // ── Vignette: edges stay black ──────────────────
          float vign = 1.0 - smoothstep(0.34, 1.30,
                            distance(st, vec2(0.5)));
          color *= vign;

          gl_FragColor = vec4(color, 0.92);
        }
      `,
      transparent: true
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Events
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
    }

    const onMouseMove = (e: MouseEvent) => {
      uniforms.uMouse.value.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      )
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)

    // Animation Loop
    let animationId: number
    const animate = () => {
      uniforms.uTime.value += 0.003     // ~0.18 units/sec at 60fps — slow organic drift
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.liquidEther} />
  )
}
