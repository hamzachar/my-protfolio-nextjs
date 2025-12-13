# 🚀 My Portfolio - Next.js

A modern, high-performance portfolio website built with **Next.js 16**, TypeScript, and Tailwind CSS. Leverages cutting-edge features like Server Components, Server Actions, and streaming SSR for optimal performance and SEO.

> 📖 **[Read the full Next.js 16 improvements guide](./NEXTJS16_IMPROVEMENTS.md)**

## ✨ Features

### Core Features

- 🌐 **Internationalization (i18n)** - English and French support with next-intl
- 🌙 **Dark Mode** - Seamless theme switching with next-themes
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS 4
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first design approach
- 📧 **Contact Form** - Server Actions with progressive enhancement
- 🎯 **TypeScript** - Full type safety throughout
- 🔍 **SEO Optimized** - Dynamic metadata generation with i18n

### Next.js 16 Optimizations

- ⚡ **Server Components** - Zero JavaScript for static content
- 🌊 **Streaming SSR** - Progressive rendering with Suspense boundaries
- 🎬 **Server Actions** - Simplified data mutations without API routes
- 💾 **Smart Caching** - Optimized data fetching strategies
- 🏗️ **Static Generation** - Pre-rendered pages for instant loads
- 🎭 **Component-Based** - Clean separation of server/client components

## 🛠️ Tech Stack

### Core

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime:** React 19

### Key Libraries

- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Email:** [Resend](https://resend.com/) + [@react-email/components](https://react.email/)

### Development Tools

- **Linting:** ESLint with Next.js config
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged
- **Type Checking:** TypeScript 5

## 📂 Project Structure

```
my-portfolio-nextjs/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Internationalized routes
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── common/             # Shared components (Navbar, Footer, etc.)
│   ├── layout/             # Layout components (Header, Navigation)
│   ├── sections/           # Page sections (Hero, About, Skills, etc.)
│   └── ui/                 # Reusable UI components
├── constants/              # Static data and configurations
│   └── data/              # Content data (skills, projects, experience)
├── content/                # i18n translations (en.json, fr.json)
├── i18n/                   # Internationalization setup
├── lib/                    # Utilities and helpers
│   ├── actions/           # Server actions
│   └── hooks/             # Custom React hooks
├── public/                 # Static assets
│   ├── cv/                # Resume files
│   └── images/            # Images (profile, projects, companies)
└── types/                  # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hamzachar/my-protfolio-nextjs.git
   cd my-portfolio-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Email configuration (Resend)
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email
   FROM_EMAIL=onboarding@resend.dev
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🌍 Internationalization

The portfolio supports multiple languages (English and French). Language switching is handled by next-intl with translations stored in `content/`.

To add a new language:

1. Create a new JSON file in `content/` (e.g., `es.json`)
2. Update `i18n/routing.ts` with the new locale
3. Add translations following the existing structure

## 🎨 Customization

### Update Personal Information

Edit files in `constants/data/`:

- `personal.ts` - Personal info and bio
- `skills.ts` - Technical skills
- `experience.ts` - Work experience
- `projects.ts` - Portfolio projects

### Modify Styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Theme colors: Update in `globals.css` CSS variables

### Add New Sections

1. Create component in `components/sections/`
2. Add to the main page in `app/[locale]/page.tsx`
3. Update navigation in `constants/navigations.ts`

## 📧 Contact Form

The contact form uses [Resend](https://resend.com/) for email delivery. Make sure to:

1. Sign up for a Resend account
2. Verify your domain (or use the test domain)
3. Add your API key to `.env.local`
4. Update the sender/receiver emails in `lib/actions/contact.ts`

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hamzachar/my-protfolio-nextjs)

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- Docker

## 📝 Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for Git hooks
- **lint-staged** for pre-commit checks

Code is automatically formatted and linted before each commit.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hamza Charafi**

- GitHub: [@hamzachar](https://github.com/hamzachar)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ and Next.js
