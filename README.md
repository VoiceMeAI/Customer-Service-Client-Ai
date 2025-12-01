# CSA Client Frontend

> Customer Support Agent Dashboard - A modern, AI-powered customer support platform built with Next.js

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## Overview

CSA Client Frontend is the agent-facing dashboard for a customer support platform. It enables support agents to manage customer conversations, collaborate with AI assistants, and deliver exceptional customer experiences.

## Features

- 🔐 **Authentication** - Secure staff login with form validation
- 💬 **Conversations Sidebar** - Search, filter, and manage customer chats
- 📨 **Real-time Chat** - Message bubbles, typing indicators, keyboard shortcuts
- 🤖 **AI Suggestions** - Approve, edit, or reject AI-generated responses
- 🏷️ **Conversation Controls** - Tags, status, urgency, and takeover management
- 👤 **Customer Info Panel** - Contact details, history, and agent notes
- 🔔 **Notifications** - Real-time alerts, escalation banners, toast notifications
- 🌙 **Dark Mode** - Full dark/light theme support

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + Custom Components |
| State Management | Zustand |
| Server State | TanStack Query |
| Form Validation | Zod |
| Icons | Lucide React |
| Notifications | Sonner |

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd csa-client-frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages (login)
│   ├── dashboard/         # Agent dashboard
│   └── layout.tsx         # Root layout
├── components/
│   ├── layouts/           # Layout components
│   │   └── (dashboard)/   # Dashboard-specific layouts
│   └── ui/                # Reusable UI components
├── features/              # Feature-specific modules
│   └── (auth)/            # Authentication logic
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── connections/           # API client configuration
└── providers/             # React context providers
```

## Git Workflow & Branching Strategy

We follow a **Git Flow** branching model:

```
main (production)
  │
  └── dev (development/staging)
        │
        ├── feature/conversation-filters
        ├── feature/ai-suggestions
        ├── fix/login-validation
        └── ...
```

### Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production branch - deployed to live environment |
| `dev` | Development/staging branch - integration testing |
| `feature/*` | New features (e.g., `feature/dark-mode`) |
| `fix/*` | Bug fixes (e.g., `fix/login-error`) |
| `hotfix/*` | Urgent production fixes |

### Workflow

1. **Create a feature branch** from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Develop and commit** your changes:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Push your branch** and create a Pull Request:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** to `dev` branch for code review

5. After approval and merge to `dev`, changes are tested in staging

6. When ready for release, `dev` is merged into `main` and deployed

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Code style (formatting, no logic change) |
| `refactor:` | Code refactoring |
| `test:` | Adding/updating tests |
| `chore:` | Maintenance tasks |

Example: `feat: add conversation search functionality`

## Demo Credentials

For development/demo purposes:

| Field | Value |
|-------|-------|
| Email | `agent@csa.com` |
| Password | `password123` |

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page |
| `/login` | Agent login |
| `/dashboard` | Agent dashboard |

## Code Style

- ESLint + Prettier for code formatting
- TypeScript strict mode enabled
- Tailwind CSS for styling (follow existing patterns)
- Run `pnpm lint` before committing

## License

This project is proprietary software.

---

Built with ❤️ by the CSA Team
