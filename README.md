# egekaya.dev

**Personal portfolio and blog** showcasing software engineering projects, case studies, and technical writing. Built with modern web technologies for optimal performance, accessibility, and SEO.

🌐 **Live Site:** [egekaya.dev](https://egekaya.dev)

---

## ✨ Features

- **High Performance**: 95+ Lighthouse scores (100/100 desktop, 87/100 mobile)
- **Modern Stack**: Next.js 16 App Router, React 19, TypeScript 5
- **Responsive Design**: Mobile-first with Tailwind CSS v4
- **3D Graphics**: Three.js animated background via React Three Fiber
- **Dark Mode**: System-aware theme with smooth transitions
- **Blog & Case Studies**: Technical writing with unified typography
- **Contact Form**: Server-side validation with rate limiting
- **SEO Optimized**: Dynamic OG images, sitemap, robots.txt, JSON-LD schema
- **Analytics**: Vercel Analytics + Speed Insights
- **Security Headers**: HSTS, CSP-ready, XSS protection
- **Easter Egg**: Konami code retro mode 🎮

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library (New York style)
- **Radix UI** - Headless UI primitives
- **Lucide React 0.553.0** - Icon library
- **Framer Motion 12.23.24** - Animation library
- **next-themes 0.4.6** - Dark mode support

### 3D Graphics
- **Three.js 0.181.1** - 3D library
- **@react-three/fiber 9.4.0** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Three.js helpers

### Forms & Validation
- **React Hook Form 7.66.0** - Form state management
- **Zod 4.1.12** - Schema validation
- **@hookform/resolvers 5.2.2** - Resolver for Zod + RHF

### Email
- **Resend 6.4.2** - Transactional email API

### Analytics & Monitoring
- **@vercel/analytics 1.5.0** - Privacy-friendly analytics
- **@vercel/speed-insights 1.2.0** - Real User Monitoring
- **@next/third-parties 16.0.3** - Google Analytics integration

### Utilities
- **clsx 2.1.1** - Conditional classNames
- **tailwind-merge 3.4.0** - Merge Tailwind classes
- **class-variance-authority 0.7.1** - Component variants
- **react-intersection-observer 10.0.0** - Viewport detection

### Development Tools
- **ESLint 9** - Linting
- **Prettier** (via eslint-config-next) - Code formatting
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.4.22** - CSS vendor prefixes

---

## 📂 Project Structure

```
egekaya.dev/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── actions/                 # Server actions
│   │   └── send-email.ts        # Contact form handler
│   ├── blog/                    # Blog posts
│   │   ├── page.tsx
│   │   ├── lecturelens-ai-study-planner/
│   │   ├── aws-s3-cloudfront-integration/
│   │   ├── optimizing-nextjs-performance/
│   │   └── postgresql-query-optimization/
│   └── case-studies/            # Project case studies
│       ├── portfolio-website/
│       ├── discord-bot-automation/
│       ├── lecturelens-platform/
│       ├── parma-internal-platform/
│       └── digitwin-database/
├── components/                   # React components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── three-background.tsx     # 3D animated background
│   ├── konami-wrapper.tsx       # Easter egg handler
│   ├── content-article.tsx      # Blog/case study wrapper
│   ├── post-header.tsx          # Unified post header
│   ├── badges-row.tsx           # Reusable badge list
│   ├── metrics-grid.tsx         # Metric cards wrapper
│   ├── sections/                # Homepage sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── tech-stack.tsx
│   │   ├── contact.tsx
│   │   └── ...
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...
├── hooks/                        # Custom React hooks
│   └── use-konami-code.ts
├── lib/                          # Utilities
│   └── utils.ts                 # Helper functions
├── public/                       # Static assets
│   ├── profile.webp
│   ├── retro-mode.css           # Konami mode styles
│   └── ...
├── components.json               # shadcn/ui config
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── postcss.config.mjs           # PostCSS config
└── package.json
```

---

## 📝 Content Management

### Adding a Blog Post

1. Create a new folder in `app/blog/your-post-slug/`
2. Add `page.tsx` with the following structure:

```tsx
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Your Post Title | Ege Kaya",
  description: "Post description",
  // ...
}

export default function BlogPost() {
  return (
    <main className="section-padding">
      <div className="container-custom max-w-4xl">
        <ContentArticle>
          <PostHeader
            title="Your Post Title"
            badges={["Tag1", "Tag2"]}
            date={{ label: "Month Day, Year", dateTime: "YYYY-MM-DD" }}
            readingTime="X min read"
          />
          <p className="lead">Introduction paragraph</p>
          <h2>Section Heading</h2>
          <p>Content...</p>
        </ContentArticle>
      </div>
    </main>
  )
}
```

### Adding a Case Study

1. Create a new folder in `app/case-studies/your-project-slug/`
2. Add `page.tsx` (similar to blog post but without date, with reading time)

```tsx
<PostHeader
  title="Project Title"
  badges={["Tech1", "Tech2"]}
  readingTime="X min read"  // No date field
  externalLinks={[
    { label: "Live Demo", href: "...", icon: <ExternalLink /> },
  ]}
/>
```

---

## 🎨 Customization

### Theme & Colors
Edit `app/globals.css` to modify CSS variables:
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    /* ... */
  }
}
```

### Typography
Powered by `@tailwindcss/typography` with custom `prose-enhanced` class. Modify in `globals.css`:
```css
.prose-enhanced {
  /* Custom prose overrides */
}
```

### Three.js Background
Customize particle count, colors, and animation in `components/three-background.tsx`.

---

## 🔒 Security Features

- **Security Headers**: HSTS, X-Frame-Options, XSS Protection, CSP-ready
- **Rate Limiting**: Contact form limited to 3 emails/hour per IP
- **Input Validation**: Zod schema validation on client + server
- **No Public API Keys**: All sensitive keys server-side only

---

## ⚡ Performance Optimizations

- **Image Optimization**: WebP format, responsive `next/image`
- **Code Splitting**: Dynamic imports for Three.js, sections
- **Font Optimization**: Next.js font loading with `display: swap`
- **Edge Deployment**: Optimized for Vercel Edge Network
- **Lazy Loading**: Intersection Observer for viewport-based loading
- **Deferred JS**: Heavy libraries load after initial render

---

## 📊 Lighthouse Scores

**Desktop**: 100/100 across all categories  
**Mobile**: 87/100 Performance, 100/100 Accessibility, Best Practices, SEO

Details in [blog post: Next.js Performance Optimization](https://egekaya.dev/blog/optimizing-nextjs-performance)

---

## 📄 License & Copyright

**© 2025 Ege Kaya. All Rights Reserved.**

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission from the copyright holder.

### Third-Party Licenses
All dependencies are used under their respective open-source licenses (MIT, Apache 2.0, etc.). See `package.json` for details.

---

## 🤝 Contact

- **Website**: [egekaya.dev](https://egekaya.dev)
- **Email**: [Contact Form](https://egekaya.dev/#contact)
- **LinkedIn**: [linkedin.com/in/ege-kaya](https://www.linkedin.com/in/ege-kaya/)
- **GitHub**: [@egekaya1](https://github.com/egekaya1)

---

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful accessible components
- **Vercel** for hosting and analytics
- **Radix UI** for headless primitives
- **Tailwind Labs** for the CSS framework
- **Three.js** community for 3D graphics ecosystem

---

**Built with ❤️ in Torino, Italy**
