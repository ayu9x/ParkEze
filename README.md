# 🚗 ParkEaze - Smart Parking Solutions

<div align="center">

![ParkEaze](https://img.shields.io/badge/ParkEaze-Smart%20Parking-7c3aed?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xOSAxNVY3YTUgNSAwIDAgMC01LTVIOGMtMiAwLTMuNSAxLjUtMy41IDNoMTljLTEuNSAwLTMgMS01IDN2N2MwIDIgMS41IDMuNSAzLjUgMy41SDIwYy41IDAgMS0uNSAxLTFzLS41LTEtMS0xaC0xeiIvPjwvc3ZnPg==)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)

**Find, book, and pay for parking spots instantly with our cutting-edge platform.**

[Live Demo](#) · [Report Bug](https://github.com/ayu9x/ParkEze/issues) · [Request Feature](https://github.com/ayu9x/ParkEze/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🗺️ **Smart Parking Finder** | Find nearby parking spots with real-time availability, ratings, and pricing |
| 💰 **Digital Wallet** | Seamless payments with integrated wallet, transaction history, and quick top-up |
| 📱 **Mobile-First Design** | Fully responsive futuristic UI that works beautifully on any device |
| 🌙 **Dark/Light Mode** | Eye-friendly themes with automatic system preference detection |
| 👤 **User Profiles** | Manage personal info, multiple vehicles, and view parking statistics |
| 📋 **Booking History** | Track all bookings with filtering, status indicators, and receipt downloads |
| 💳 **Multiple Payment Options** | Razorpay integration, credit cards, UPI, and wallet payments |
| ❓ **Help Center** | Searchable FAQ, category filtering, and 24/7 support options |

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (48+ components)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Payments:** Razorpay Integration

---

## 📁 Project Structure

```
ParkEze/
├── app/
│   ├── page.js              # Landing page with hero, features, stats
│   ├── layout.js            # Root layout with theme provider
│   ├── globals.css          # Custom theme with glassmorphism
│   ├── wallet/              # Digital wallet page
│   ├── user-details/        # User profile management
│   ├── about/               # Company information
│   ├── help/                # FAQ and support center
│   ├── payment/             # Payment checkout
│   ├── payment-success/     # Payment confirmation
│   ├── find-parking/        # Parking spot finder
│   └── booking-history/     # Booking management
├── components/
│   ├── Navbar.jsx           # Animated navigation bar
│   ├── ThemeToggle.jsx      # Dark/light mode switch
│   ├── ThemeProvider.jsx    # Theme context provider
│   ├── Payment-form.jsx     # Payment form component
│   └── ui/                  # 48 shadcn/ui components
├── hooks/
│   ├── use-toast.js         # Toast notification hook
│   └── use-mobile.jsx       # Mobile detection hook
└── lib/
    └── utils.js             # Utility functions
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayu9x/ParkEze.git
   cd ParkEze
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional, for payments)
   ```bash
   cp .env.example .env.local
   ```
   Add your Razorpay keys:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design System

### Color Palette

| Color | Usage | HSL |
|-------|-------|-----|
| **Primary** | Buttons, links, accents | `262 83% 58%` (Purple) |
| **Accent** | Highlights, secondary actions | `174 72% 56%` (Cyan) |
| **Destructive** | Errors, warnings | `0 84% 60%` (Red) |

### Key Design Features

- **Glassmorphism** - Frosted glass effect with backdrop blur
- **Gradient Mesh** - Animated multi-color background gradients
- **Micro-animations** - Smooth hover states and transitions
- **Responsive Grid** - Mobile-first responsive layouts

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, features, stats, CTA |
| `/find-parking` | Parking Finder | Search, filter, book parking spots |
| `/wallet` | Wallet | Balance, add funds, transactions |
| `/user-details` | Profile | Personal info, vehicles, stats |
| `/booking-history` | Bookings | View and manage all bookings |
| `/payment` | Checkout | Payment form with Razorpay |
| `/payment-success` | Success | Confirmation with receipt |
| `/about` | About | Company, team, mission |
| `/help` | Help Center | FAQ, guides, support |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Team

Built with ❤️ by the ParkEaze Team

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

</div>
