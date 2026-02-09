'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Wallet,
    Plus,
    ArrowUpRight,
    ArrowDownLeft,
    CreditCard,
    QrCode,
    TrendingUp,
    Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const transactions = [
    { id: 1, type: 'debit', description: 'Parking at MG Road', amount: 50, date: '2026-02-09', time: '10:30 AM' },
    { id: 2, type: 'credit', description: 'Wallet Top-up', amount: 500, date: '2026-02-08', time: '3:45 PM' },
    { id: 3, type: 'debit', description: 'Parking at Koramangala', amount: 80, date: '2026-02-07', time: '11:00 AM' },
    { id: 4, type: 'debit', description: 'Parking at Indiranagar', amount: 60, date: '2026-02-06', time: '2:15 PM' },
    { id: 5, type: 'credit', description: 'Cashback Reward', amount: 25, date: '2026-02-05', time: '9:00 AM' },
]

export default function WalletPage() {
    const [balance, setBalance] = useState(1250)
    const [addAmount, setAddAmount] = useState('')

    const handleAddFunds = () => {
        if (addAmount && !isNaN(addAmount)) {
            setBalance(prev => prev + parseFloat(addAmount))
            setAddAmount('')
        }
    }

    const quickAmounts = [100, 200, 500, 1000]

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">My Wallet</h1>
                    <p className="text-muted-foreground">Manage your funds and view transaction history</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Balance Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <Card className="glass border-border/50 overflow-hidden">
                            <div className="gradient-primary p-8 text-white relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <Wallet className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white/70 text-sm">Available Balance</p>
                                            <p className="text-3xl md:text-4xl font-bold">₹{balance.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mt-6">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="secondary" size="lg">
                                                    <Plus className="w-5 h-5 mr-2" />
                                                    Add Money
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="glass">
                                                <DialogHeader>
                                                    <DialogTitle>Add Money to Wallet</DialogTitle>
                                                    <DialogDescription>
                                                        Enter the amount you want to add to your wallet
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="space-y-4 py-4">
                                                    <div>
                                                        <Label htmlFor="amount">Amount</Label>
                                                        <Input
                                                            id="amount"
                                                            type="number"
                                                            placeholder="Enter amount"
                                                            value={addAmount}
                                                            onChange={(e) => setAddAmount(e.target.value)}
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {quickAmounts.map((amt) => (
                                                            <Button
                                                                key={amt}
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => setAddAmount(amt.toString())}
                                                            >
                                                                ₹{amt}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                    <Button onClick={handleAddFunds} className="w-full gradient-primary text-white">
                                                        Add ₹{addAmount || 0}
                                                    </Button>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                        <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                                            <QrCode className="w-5 h-5 mr-2" />
                                            Scan & Pay
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <CardContent className="p-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-4 rounded-xl bg-muted/50">
                                        <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
                                        <p className="text-sm text-muted-foreground">This Month</p>
                                        <p className="font-semibold">₹2,450</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-muted/50">
                                        <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                                        <p className="text-sm text-muted-foreground">Saved Time</p>
                                        <p className="font-semibold">4.5 hrs</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-muted/50">
                                        <CreditCard className="w-6 h-6 mx-auto mb-2 text-accent" />
                                        <p className="text-sm text-muted-foreground">Cashback</p>
                                        <p className="font-semibold">₹125</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="glass border-border/50">
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start">
                                    <CreditCard className="w-5 h-5 mr-3" />
                                    Link Bank Account
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Plus className="w-5 h-5 mr-3" />
                                    Add UPI ID
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <QrCode className="w-5 h-5 mr-3" />
                                    My QR Code
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Transaction History */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                >
                    <Card className="glass border-border/50">
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {transactions.map((tx, index) => (
                                    <motion.div
                                        key={tx.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'credit'
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'bg-red-500/10 text-red-500'
                                                }`}>
                                                {tx.type === 'credit' ? (
                                                    <ArrowDownLeft className="w-5 h-5" />
                                                ) : (
                                                    <ArrowUpRight className="w-5 h-5" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium">{tx.description}</p>
                                                <p className="text-sm text-muted-foreground">{tx.date} • {tx.time}</p>
                                            </div>
                                        </div>
                                        <p className={`font-semibold ${tx.type === 'credit' ? 'text-green-500' : 'text-red-500'
                                            }`}>
                                            {tx.type === 'credit' ? '+' : '-'}₹{tx.amount}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
