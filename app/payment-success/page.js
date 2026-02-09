'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Home, Clock, MapPin, CreditCard, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PaymentSuccessPage() {
    const transactionDetails = {
        id: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        amount: 150,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        location: 'MG Road Parking Zone A',
        duration: '2 hours',
        spotNumber: 'A-24'
    }

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="glass border-border/50 overflow-hidden">
                        {/* Success Header */}
                        <div className="gradient-primary p-8 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 grid-pattern" />
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                                className="relative z-10"
                            >
                                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                                </div>
                                <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>
                                <p className="text-white/80">Your parking spot is confirmed</p>
                            </motion.div>
                        </div>

                        <CardContent className="p-6">
                            {/* Transaction Details */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center py-3 border-b border-border/50">
                                    <span className="text-muted-foreground flex items-center gap-2">
                                        <CreditCard className="w-4 h-4" />
                                        Transaction ID
                                    </span>
                                    <span className="font-mono font-medium">{transactionDetails.id}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-border/50">
                                    <span className="text-muted-foreground flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Location
                                    </span>
                                    <span className="font-medium">{transactionDetails.location}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-border/50">
                                    <span className="text-muted-foreground flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        Duration
                                    </span>
                                    <span className="font-medium">{transactionDetails.duration}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-border/50">
                                    <span className="text-muted-foreground">Spot Number</span>
                                    <span className="font-semibold text-lg text-primary">{transactionDetails.spotNumber}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-muted-foreground">Amount Paid</span>
                                    <span className="text-2xl font-bold text-gradient">₹{transactionDetails.amount}</span>
                                </div>
                            </div>

                            {/* Parking Pass */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-4 rounded-xl bg-muted/50 text-center mb-6"
                            >
                                <p className="text-sm text-muted-foreground mb-2">Show this at the parking entrance</p>
                                <div className="text-4xl font-bold font-mono tracking-wider text-gradient">
                                    {transactionDetails.spotNumber}
                                </div>
                            </motion.div>

                            {/* Actions */}
                            <div className="space-y-3">
                                <Button className="w-full" variant="outline">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Receipt
                                </Button>
                                <Link href="/" className="block">
                                    <Button className="w-full gradient-primary text-white">
                                        <Home className="w-4 h-4 mr-2" />
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
