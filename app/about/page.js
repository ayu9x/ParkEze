'use client'

import { motion } from 'framer-motion'
import {
    Target,
    Users,
    Leaf,
    Award,
    Linkedin,
    Twitter,
    Github,
    Zap,
    Shield,
    Globe
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const team = [
    { name: 'Arjun Sharma', role: 'Founder & CEO', avatar: 'AS' },
    { name: 'Priya Patel', role: 'CTO', avatar: 'PP' },
    { name: 'Rahul Gupta', role: 'Head of Design', avatar: 'RG' },
    { name: 'Sneha Kumar', role: 'Lead Developer', avatar: 'SK' },
]

const values = [
    { icon: Target, title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology' },
    { icon: Users, title: 'Community', description: 'Building solutions that serve everyone' },
    { icon: Leaf, title: 'Sustainability', description: 'Reducing carbon footprint one spot at a time' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the best experience' },
]

const technologies = [
    { icon: Zap, name: 'AI-Powered', description: 'Smart algorithms for optimal parking' },
    { icon: Shield, name: 'Secure', description: 'Bank-grade security protocols' },
    { icon: Globe, name: 'Cloud Native', description: 'Scalable infrastructure' },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">ParkEaze</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We&apos;re on a mission to revolutionize urban parking and make cities smarter, greener, and more accessible for everyone.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-20"
                >
                    <Card className="glass border-border/50 overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-muted-foreground mb-6">
                                    ParkEaze was born from a simple observation: finding parking shouldn&apos;t be stressful.
                                    Every day, millions of drivers waste time and fuel circling for spots, contributing to
                                    traffic congestion and pollution.
                                </p>
                                <p className="text-muted-foreground">
                                    We built ParkEaze to change that. Using AI-powered technology and real-time data,
                                    we&apos;re creating a future where parking is seamless, efficient, and sustainable.
                                </p>
                            </div>
                            <div className="gradient-primary p-8 md:p-12 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <p className="text-6xl font-bold mb-2">2024</p>
                                    <p className="text-white/80">Founded in Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="glass border-border/50 card-hover h-full text-center">
                                    <CardContent className="p-6">
                                        <div className="w-14 h-14 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4">
                                            <value.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Powered by Technology</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-border/50 bg-muted/30 text-center"
                            >
                                <tech.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                                <h3 className="font-semibold mb-2">{tech.name}</h3>
                                <p className="text-muted-foreground text-sm">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="glass border-border/50 card-hover text-center">
                                    <CardContent className="p-6">
                                        <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                                            {member.avatar}
                                        </div>
                                        <h3 className="font-semibold">{member.name}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                                        <div className="flex justify-center gap-3">
                                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 md:p-12 rounded-3xl gradient-primary text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
                    <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Whether you&apos;re interested in partnering with us or just want to say hello.
                    </p>
                    <a
                        href="mailto:hello@parkeaze.com"
                        className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
