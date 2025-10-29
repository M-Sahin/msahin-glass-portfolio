# Murat Sahin - Glass Portfolio

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS featuring AI-powered message generation and email integration.

## Features

- **Modern Glass UI** — Frosted glass design with smooth animations and gradients
- **AI Message Generator** — Uses Google Gemini API to generate professional contact messages
- **Email Integration** — Sends contact emails via Nodemailer (Gmail SMTP)
- **Responsive Design** — Fully responsive across all devices
- **Dark Theme** — Eye-friendly dark mode by default
- **GitHub Activity** — Real-time GitHub contribution display
- **Project Showcase** — Highlights key projects with links and descriptions

## Tech Stack

- **Frontend**: Next.js 16, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: Google Gemini API
- **Email**: Nodemailer (Gmail)
- **UI Components**: Radix UI, Recharts, Embla Carousel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key

# Gmail SMTP Configuration (for contact emails)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
```

**Note:** For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your regular password.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── generate-message/    # Gemini AI message generation
│   │   └── send-email/          # Email sending via Nodemailer
│   ├── layout.tsx
│   ├── page.tsx                 # Main portfolio page
│   └── globals.css
├── components/
│   ├── contact-modal.tsx        # Contact form with email integration
│   ├── icons.tsx                # Custom SVG icons
│   └── ui/                      # Reusable UI components
└── public/                      # Static assets
```

## Key Features

### Contact Modal
- Visitor name, email, and reason input
- AI-powered message draft generation
- Email sending with confirmation to visitor
- Real-time error handling and success feedback

### Portfolio Sections
- Hero with social links
- About & Experience timeline
- Project showcase
- Skills & Certifications
- GitHub activity feed
- Articles & Insights
- Inspirational quotes

## License

This project is personal and not open for public use.

## Contact

For inquiries, use the contact form on the portfolio or email directly at [murat.sa25@gmail.com](mailto:murat.sa25@gmail.com).
