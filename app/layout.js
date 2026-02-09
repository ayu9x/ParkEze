import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ParkEaze - Smart Parking Solutions",
  description: "Find, book, and pay for parking spots instantly with ParkEaze. The future of smart parking is here.",
  keywords: ["parking", "smart parking", "digital wallet", "parking app", "book parking"],
  authors: [{ name: "ParkEaze Team" }],
  openGraph: {
    title: "ParkEaze - Smart Parking Solutions",
    description: "Find, book, and pay for parking spots instantly",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen gradient-mesh dark:gradient-dark grid-pattern">
            <NavBar />
            <main className="relative z-10">
              {children}
            </main>
            <footer className="relative z-10 border-t border-border/50 mt-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold text-gradient mb-4">ParkEaze</h3>
                    <p className="text-muted-foreground max-w-md">
                      The future of smart parking. Find, book, and pay for parking spots instantly with our cutting-edge platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                      <li><a href="/help" className="hover:text-primary transition-colors">Help Center</a></li>
                      <li><a href="/find-parking" className="hover:text-primary transition-colors">Find Parking</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>support@parkeaze.com</li>
                      <li>+91 1800-PARK-EZE</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
                  <p>© 2026 ParkEaze. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
