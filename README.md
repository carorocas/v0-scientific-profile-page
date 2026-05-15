# Scientific Profile Landing Page

Academic landing page for Carlos Alberto Orozco Castano, focused on cancer biology, bioinformatics, tumor microenvironment research, publications, projects, collaborations, and contact information.

**Live site:** [https://v0-twertgwstwstw.vercel.app/#contact](https://v0-twertgwstwstw.vercel.app/#contact)

## Overview

This project was initially generated with [v0](https://v0.app) and is maintained as a Next.js application. The production deployment is hosted on Vercel, which is the recommended platform for this codebase because it supports Next.js defaults without extra static-export configuration.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- Vercel Analytics
- pnpm

## Local Development

Requirements:

- Node.js 22 or newer
- pnpm 10 or newer

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build the production app:

```bash
pnpm build
```

Start a production build locally:

```bash
pnpm start
```

## Deployment

The primary deployment target is Vercel:

[https://v0-twertgwstwstw.vercel.app/#contact](https://v0-twertgwstwstw.vercel.app/#contact)

Recommended flow:

1. Keep `main` as the stable branch.
2. Push reviewed changes to `main`.
3. Let Vercel build and deploy the Next.js application automatically.

## GitHub Pages

GitHub Pages is not the recommended deployment target for this repository in its current form. The application is a Next.js/v0 project and is already deployed successfully on Vercel. GitHub Pages can host static exports, but that would require maintaining a separate static-export setup with repository-specific asset paths.

For a professional GitHub presence, this repository should point visitors to the Vercel deployment instead of using GitHub Pages as the public site.

## Repository Metadata

Suggested GitHub repository description:

```text
Academic scientific profile landing page built with Next.js, v0, Tailwind CSS, and Vercel.
```

Suggested repository website URL:

```text
https://v0-twertgwstwstw.vercel.app/#contact
```

## Project Structure

```text
app/          Next.js App Router entry points and global styles
components/   Landing page sections and reusable UI components
hooks/        Shared React hooks
lib/          Utility functions
public/       Static assets and icons
styles/       Additional global styles
```

## Notes

- The branch `main` is the stable default branch.
- The GitHub Actions workflow validates that the Next.js app builds successfully.
- Vercel should remain the canonical deployment unless the project is intentionally converted to a static export later.
