## Secret of E-Commerce Nobel

Cinematic commerce education platform featuring immersive 3D storytelling, e-commerce automation blueprints, purchase flows, and an operator-focused admin center.

### Tech Stack

- Next.js 14 App Router · TypeScript
- Tailwind CSS with custom aurora theme
- React Three Fiber + Drei for hero 3D animation
- Zustand for client-side course + enrollment management
- Framer Motion & React Hook Form for polished interactions

### Core Experiences

- Marketing homepage with 3D hero canvas, curriculum, bonuses, testimonials, and cohort CTA.
- Checkout funnel capturing enrollment details and writing purchases to the client-side ops feed.
- Thank you confirmation experience surfaced through search params and persisted orders.
- Admin control tower with secure passphrase, pricing controls, and real-time enrollment table.

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site. Tailwind, R3F, and Zustand updates hot-reload automatically.

### Production Build

```bash
npm run build
npm run start
```

### Deployment

The project is ready for Vercel. After building locally, deploy via:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e4bf8338
```
