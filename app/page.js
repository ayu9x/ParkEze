'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MapPin,
  Wallet,
  Clock,
  Shield,
  Zap,
  Smartphone,
  ArrowRight,
  Car,
  CreditCard,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: MapPin,
    title: 'Smart Location',
    description: 'Find the nearest available parking spots in real-time with our AI-powered search.'
  },
  {
    icon: Wallet,
    title: 'Digital Wallet',
    description: 'Seamless payments with our integrated digital wallet. No cash, no hassle.'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Pre-book your spot and drive straight in. No more circling for parking.'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Bank-grade security for all transactions. Your money is always safe.'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book a spot in seconds. Our lightning-fast system ensures you never wait.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Designed for your phone. Manage everything on the go.'
  }
]

const stats = [
  { value: '10K+', label: 'Parking Spots' },
  { value: '50K+', label: 'Happy Users' },
  { value: '100+', label: 'Cities' },
  { value: '99.9%', label: 'Uptime' }
]

const steps = [
  { icon: MapPin, title: 'Find', description: 'Search for nearby parking spots' },
  { icon: CreditCard, title: 'Book', description: 'Reserve and pay instantly' },
  { icon: Car, title: 'Park', description: 'Drive in and enjoy' }
]

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🚗 The Future of Parking is Here
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Smart Parking
                <span className="block text-gradient">Made Simple</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Find, book, and pay for parking spots instantly. Save time, money, and the planet with ParkEaze&apos;s intelligent parking solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find-parking">
                  <Button size="lg" className="gradient-primary text-white glow w-full sm:w-auto">
                    Find Parking
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border-2 border-dashed border-primary/30 rounded-full"
                  />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border-2 border-dashed border-accent/30 rounded-full"
                  />
                </div>

                {/* Center Card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-3xl p-8 shadow-2xl"
                  >
                    <div className="w-32 h-32 mx-auto gradient-primary rounded-2xl flex items-center justify-center glow mb-4">
                      <Car className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-center font-semibold">Parking Available</p>
                    <p className="text-center text-3xl font-bold text-gradient">24 Spots</p>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-10 right-0 glass rounded-xl p-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 glass rounded-xl p-3"
                >
                  <Zap className="w-6 h-6 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 text-center card-hover">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ParkEaze?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of parking with features designed for modern drivers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-border/50 card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 grid-pattern" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Park Smarter?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Join thousands of drivers who have already made the switch to intelligent parking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/find-parking">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/wallet">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                    <Wallet className="mr-2 w-5 h-5" />
                    Add Funds
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
