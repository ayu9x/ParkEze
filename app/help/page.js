'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Search,
    ChevronDown,
    MessageCircle,
    Phone,
    Mail,
    BookOpen,
    CreditCard,
    MapPin,
    User,
    Shield,
    HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
    { icon: MapPin, name: 'Parking', count: 5 },
    { icon: CreditCard, name: 'Payments', count: 4 },
    { icon: User, name: 'Account', count: 3 },
    { icon: Shield, name: 'Security', count: 3 },
]

const faqs = [
    {
        category: 'Parking',
        question: 'How do I find a parking spot?',
        answer: 'Use the "Find Parking" feature in the app. Enter your destination or enable location services, and we\'ll show you all available parking spots nearby with real-time availability.'
    },
    {
        category: 'Parking',
        question: 'Can I book a spot in advance?',
        answer: 'Yes! You can book parking spots up to 7 days in advance. Simply select your desired date and time, choose a spot, and confirm your booking.'
    },
    {
        category: 'Parking',
        question: 'What if I arrive late to my booking?',
        answer: 'We offer a 15-minute grace period. If you\'re running later than that, you can extend your booking through the app (subject to availability).'
    },
    {
        category: 'Payments',
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit/debit cards, UPI, net banking, and payments through our digital wallet. You can also use Razorpay for quick checkout.'
    },
    {
        category: 'Payments',
        question: 'How do I add money to my wallet?',
        answer: 'Go to the Wallet section, tap "Add Money", enter the amount, and choose your preferred payment method. Funds are credited instantly.'
    },
    {
        category: 'Payments',
        question: 'Are there any hidden charges?',
        answer: 'No hidden charges! The price you see is the price you pay. Any applicable taxes and platform fees are clearly shown before you confirm your booking.'
    },
    {
        category: 'Account',
        question: 'How do I update my profile?',
        answer: 'Go to "Profile" from the navigation menu, click "Edit", make your changes, and save. You can update your name, phone, email, and address.'
    },
    {
        category: 'Account',
        question: 'How do I add a vehicle?',
        answer: 'In your Profile section, scroll to "My Vehicles" and tap "Add Vehicle". Enter your vehicle details including registration number, type, and model.'
    },
    {
        category: 'Security',
        question: 'Is my payment information safe?',
        answer: 'Absolutely! We use bank-grade encryption (256-bit SSL) and are PCI DSS compliant. We never store your full card details on our servers.'
    },
    {
        category: 'Security',
        question: 'What if I notice unauthorized activity?',
        answer: 'Contact our support immediately at support@parkeaze.com or call our 24/7 helpline. We\'ll investigate and secure your account right away.'
    },
]

const quickGuides = [
    { icon: BookOpen, title: 'Getting Started', description: 'Learn the basics of using ParkEaze' },
    { icon: CreditCard, title: 'Payment Guide', description: 'How to make payments and refunds' },
    { icon: MapPin, title: 'Booking Guide', description: 'Step-by-step booking tutorial' },
]

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        How can we <span className="text-gradient">help?</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Find answers to common questions or reach out to our support team
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-14 text-lg"
                        />
                    </div>
                </motion.div>

                {/* Quick Guides */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="grid md:grid-cols-3 gap-4">
                        {quickGuides.map((guide, index) => (
                            <motion.div
                                key={guide.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <Card className="glass border-border/50 card-hover cursor-pointer">
                                    <CardContent className="p-6 flex items-center gap-4">
                                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                                            <guide.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{guide.title}</h3>
                                            <p className="text-sm text-muted-foreground">{guide.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Categories Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="glass border-border/50 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-lg">Categories</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button
                                    variant={selectedCategory === 'All' ? 'default' : 'ghost'}
                                    className="w-full justify-start"
                                    onClick={() => setSelectedCategory('All')}
                                >
                                    <HelpCircle className="w-4 h-4 mr-2" />
                                    All Questions
                                </Button>
                                {faqCategories.map((cat) => (
                                    <Button
                                        key={cat.name}
                                        variant={selectedCategory === cat.name ? 'default' : 'ghost'}
                                        className="w-full justify-between"
                                        onClick={() => setSelectedCategory(cat.name)}
                                    >
                                        <span className="flex items-center">
                                            <cat.icon className="w-4 h-4 mr-2" />
                                            {cat.name}
                                        </span>
                                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                                            {cat.count}
                                        </span>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <Card className="glass border-border/50">
                            <CardHeader>
                                <CardTitle>Frequently Asked Questions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {filteredFaqs.length === 0 ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p>No questions found matching your search.</p>
                                    </div>
                                ) : (
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {filteredFaqs.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`item-${index}`}
                                                className="border rounded-xl px-4 bg-muted/30"
                                            >
                                                <AccordionTrigger className="hover:no-underline">
                                                    <span className="text-left">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Card className="glass border-border/50">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
                                <p className="text-muted-foreground">Our support team is available 24/7</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-6 rounded-xl bg-muted/30">
                                    <MessageCircle className="w-10 h-10 mx-auto mb-4 text-primary" />
                                    <h3 className="font-semibold mb-2">Live Chat</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Chat with our support team</p>
                                    <Button variant="outline" size="sm">Start Chat</Button>
                                </div>
                                <div className="text-center p-6 rounded-xl bg-muted/30">
                                    <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
                                    <h3 className="font-semibold mb-2">Phone Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">+91 1800-PARK-EZE</p>
                                    <Button variant="outline" size="sm">Call Now</Button>
                                </div>
                                <div className="text-center p-6 rounded-xl bg-muted/30">
                                    <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
                                    <h3 className="font-semibold mb-2">Email Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">support@parkeaze.com</p>
                                    <Button variant="outline" size="sm">Send Email</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
