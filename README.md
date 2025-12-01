# Jainam Bhavsar - Portfolio (React/Next.js)

This is your portfolio converted to React using Next.js.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features

- ✅ Loading screen with count-up animation
- ✅ Responsive navigation
- ✅ Hero section with your name
- ✅ Typing animation in Identity section
- ✅ Featured work grid
- ✅ About section with animated shape
- ✅ Contact CTA
- ✅ Footer with GitHub link
- ✅ Liquid Ether background (placeholder - ready for Three.js implementation)
- ✅ Smooth animations and transitions
- ✅ Mobile responsive

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- CSS Modules
- Three.js (for Liquid Ether - to be implemented)
- Framer Motion (optional for advanced animations)

## Next Steps

To add the full Liquid Ether Three.js fluid simulation:
1. The component structure is ready in `components/LiquidEther.tsx`
2. Install Three.js: `npm install three @types/three`
3. Implement the fluid simulation using the React component pattern

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── LoadingScreen.tsx
│   ├── LiquidEther.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Identity.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── package.json
```
