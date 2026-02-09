'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PaymentForm } from '@/components/Payment-form'
import { Shield, Lock, CreditCard } from 'lucide-react'

export default function PaymentPage() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Secure <span className="text-gradient">Payment</span>
                    </h1>
                    <p className="text-muted-foreground">Complete your parking payment securely</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Payment Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <Card className="glass border-border/50">
                            <CardContent className="p-8">
                                <PaymentForm amount={150} />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Security Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card className="glass border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Secure Checkout
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Lock className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-medium">256-bit SSL Encryption</p>
                                        <p className="text-sm text-muted-foreground">Your data is encrypted and secure</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-medium">PCI DSS Compliant</p>
                                        <p className="text-sm text-muted-foreground">We follow industry security standards</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-medium">Money-Back Guarantee</p>
                                        <p className="text-sm text-muted-foreground">Full refund if you cancel in time</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass border-border/50">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Parking Fee</span>
                                        <span>₹120.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Service Fee</span>
                                        <span>₹15.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">GST (18%)</span>
                                        <span>₹15.00</span>
                                    </div>
                                    <div className="border-t border-border pt-3 mt-3">
                                        <div className="flex justify-between font-semibold text-lg">
                                            <span>Total</span>
                                            <span className="text-gradient">₹150.00</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
