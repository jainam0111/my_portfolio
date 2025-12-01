# Troubleshooting Guide

## ✅ Hydration Error - FIXED

The hydration error you saw has been fixed by:

1. **Using `dynamic` import** for LoadingScreen with `ssr: false`
2. **Adding `mounted` state** to prevent rendering until client-side
3. **Initializing state properly** in Identity component

### What was the issue?

Next.js renders components on the server first (SSR), then "hydrates" them on the client. If the server HTML doesn't match the client HTML, you get a hydration error.

The loading screen was causing this because:
- Server rendered: `loading = true`
- Client rendered: `loading = true` (but then immediately changed)
- This mismatch caused the error

### How we fixed it:

```typescript
// Before (caused hydration error)
const [loading, setLoading] = useState(true)

// After (fixed)
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false  // Don't render on server
})

const [mounted, setMounted] = useState(false)
useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null  // Wait for client-side
```

## Common Issues & Solutions

### 1. Port Already in Use

**Error:** `Port 3000 is in use`

**Solution:**
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3002
```

### 2. Module Not Found

**Error:** `Cannot find module '@/components/...'`

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### 3. Build Errors

**Error:** Various TypeScript or build errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### 4. Styling Not Applied

**Issue:** CSS modules not working

**Solution:**
- Make sure file names end with `.module.css`
- Import like: `import styles from './Component.module.css'`
- Use like: `className={styles.className}`

### 5. Hot Reload Not Working

**Issue:** Changes not reflecting

**Solution:**
```bash
# Stop the server (Ctrl+C)
# Clear cache
rm -rf .next

# Restart
npm run dev
```

## Performance Tips

### 1. Optimize Images

Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
```

### 2. Code Splitting

Already done! Next.js automatically splits code by route.

### 3. Lazy Loading

For heavy components:
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

## Deployment Issues

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Build Fails

Check:
- All dependencies are in `package.json`
- No TypeScript errors: `npm run build`
- Environment variables are set

## Still Having Issues?

1. **Check the console** - Browser DevTools (F12)
2. **Check the terminal** - Where `npm run dev` is running
3. **Clear everything**:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Debugging
npm run dev -- --turbo  # Use Turbopack (faster)
npm run build -- --debug  # Debug build issues

# Clean
rm -rf .next         # Clear Next.js cache
rm -rf node_modules  # Clear dependencies
```

## Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Need More Help?

The hydration error is now fixed! Your app should be running smoothly at:
**http://localhost:3001**

If you encounter any other issues, check:
1. Browser console (F12)
2. Terminal output
3. This troubleshooting guide
