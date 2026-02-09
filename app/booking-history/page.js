'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Clock,
    MapPin,
    Calendar,
    Download,
    Eye,
    ChevronDown,
    Car,
    CheckCircle2,
    XCircle,
    Timer
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const bookings = [
    {
        id: 'BK001',
        location: 'MG Road Parking Complex',
        address: 'MG Road, Bangalore 560001',
        spot: 'A-24',
        date: '2026-02-09',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        duration: '2 hours',
        amount: 80,
        status: 'active',
        vehicle: 'KA-01-AB-1234'
    },
    {
        id: 'BK002',
        location: 'Brigade Road Multi-Level',
        address: 'Brigade Road, Bangalore 560025',
        spot: 'B-15',
        date: '2026-02-08',
        startTime: '2:00 PM',
        endTime: '5:00 PM',
        duration: '3 hours',
        amount: 180,
        status: 'completed',
        vehicle: 'KA-01-AB-1234'
    },
    {
        id: 'BK003',
        location: 'Koramangala Open Parking',
        address: 'Koramangala 4th Block, Bangalore',
        spot: 'C-08',
        date: '2026-02-07',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        duration: '2 hours',
        amount: 50,
        status: 'completed',
        vehicle: 'KA-01-CD-5678'
    },
    {
        id: 'BK004',
        location: 'Indiranagar Plaza Parking',
        address: '100 Feet Road, Indiranagar',
        spot: 'D-42',
        date: '2026-02-05',
        startTime: '4:00 PM',
        endTime: '6:00 PM',
        duration: '2 hours',
        amount: 100,
        status: 'cancelled',
        vehicle: 'KA-01-AB-1234'
    },
]

const getStatusColor = (status) => {
    switch (status) {
        case 'active': return 'bg-green-500/10 text-green-500 border-green-500/20'
        case 'completed': return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20'
        default: return 'bg-muted text-muted-foreground'
    }
}

const getStatusIcon = (status) => {
    switch (status) {
        case 'active': return Timer
        case 'completed': return CheckCircle2
        case 'cancelled': return XCircle
        default: return Clock
    }
}

export default function BookingHistoryPage() {
    const [filter, setFilter] = useState('all')

    const filteredBookings = filter === 'all'
        ? bookings
        : bookings.filter(b => b.status === filter)

    const stats = {
        total: bookings.length,
        active: bookings.filter(b => b.status === 'active').length,
        completed: bookings.filter(b => b.status === 'completed').length,
        totalSpent: bookings.filter(b => b.status !== 'cancelled').reduce((sum, b) => sum + b.amount, 0)
    }

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Booking <span className="text-gradient">History</span>
                    </h1>
                    <p className="text-muted-foreground">View and manage your parking bookings</p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                    <Card className="glass border-border/50">
                        <CardContent className="p-4 text-center">
                            <p className="text-3xl font-bold text-gradient">{stats.total}</p>
                            <p className="text-sm text-muted-foreground">Total Bookings</p>
                        </CardContent>
                    </Card>
                    <Card className="glass border-border/50">
                        <CardContent className="p-4 text-center">
                            <p className="text-3xl font-bold text-green-500">{stats.active}</p>
                            <p className="text-sm text-muted-foreground">Active</p>
                        </CardContent>
                    </Card>
                    <Card className="glass border-border/50">
                        <CardContent className="p-4 text-center">
                            <p className="text-3xl font-bold text-blue-500">{stats.completed}</p>
                            <p className="text-sm text-muted-foreground">Completed</p>
                        </CardContent>
                    </Card>
                    <Card className="glass border-border/50">
                        <CardContent className="p-4 text-center">
                            <p className="text-3xl font-bold text-gradient">₹{stats.totalSpent}</p>
                            <p className="text-sm text-muted-foreground">Total Spent</p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Tabs value={filter} onValueChange={setFilter}>
                        <TabsList className="mb-6">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>

                        <TabsContent value={filter}>
                            <div className="space-y-4">
                                {filteredBookings.length === 0 ? (
                                    <Card className="glass border-border/50">
                                        <CardContent className="p-8 text-center text-muted-foreground">
                                            <Car className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                            <p>No bookings found</p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    filteredBookings.map((booking, index) => {
                                        const StatusIcon = getStatusIcon(booking.status)
                                        return (
                                            <motion.div
                                                key={booking.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.05 * index }}
                                            >
                                                <Card className="glass border-border/50 card-hover">
                                                    <CardContent className="p-0">
                                                        <div className="flex flex-col md:flex-row">
                                                            {/* Status Indicator */}
                                                            <div className={`md:w-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none ${booking.status === 'active' ? 'bg-green-500' :
                                                                    booking.status === 'completed' ? 'bg-blue-500' : 'bg-red-500'
                                                                }`} />

                                                            <div className="flex-1 p-4">
                                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                                    <div className="flex-1">
                                                                        <div className="flex items-center gap-3 mb-2">
                                                                            <h3 className="font-semibold">{booking.location}</h3>
                                                                            <Badge variant="outline" className={getStatusColor(booking.status)}>
                                                                                <StatusIcon className="w-3 h-3 mr-1" />
                                                                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                                            </Badge>
                                                                        </div>
                                                                        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                                                                            <MapPin className="w-3 h-3" />
                                                                            {booking.address}
                                                                        </p>
                                                                        <div className="flex flex-wrap gap-4 text-sm">
                                                                            <span className="flex items-center gap-1">
                                                                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                                                                {booking.date}
                                                                            </span>
                                                                            <span className="flex items-center gap-1">
                                                                                <Clock className="w-4 h-4 text-muted-foreground" />
                                                                                {booking.startTime} - {booking.endTime}
                                                                            </span>
                                                                            <span className="flex items-center gap-1">
                                                                                <Car className="w-4 h-4 text-muted-foreground" />
                                                                                {booking.vehicle}
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-4">
                                                                        <div className="text-center md:text-right">
                                                                            <p className="text-sm text-muted-foreground">Spot</p>
                                                                            <p className="text-xl font-bold text-primary">{booking.spot}</p>
                                                                        </div>
                                                                        <div className="text-center md:text-right">
                                                                            <p className="text-sm text-muted-foreground">Amount</p>
                                                                            <p className="text-xl font-bold">₹{booking.amount}</p>
                                                                        </div>

                                                                        <Dialog>
                                                                            <DialogTrigger asChild>
                                                                                <Button variant="outline" size="icon">
                                                                                    <Eye className="w-4 h-4" />
                                                                                </Button>
                                                                            </DialogTrigger>
                                                                            <DialogContent className="glass">
                                                                                <DialogHeader>
                                                                                    <DialogTitle>Booking Details</DialogTitle>
                                                                                </DialogHeader>
                                                                                <div className="space-y-4 py-4">
                                                                                    <div className="grid grid-cols-2 gap-4">
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Booking ID</p>
                                                                                            <p className="font-mono font-medium">{booking.id}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Spot Number</p>
                                                                                            <p className="font-semibold text-primary">{booking.spot}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Date</p>
                                                                                            <p className="font-medium">{booking.date}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Duration</p>
                                                                                            <p className="font-medium">{booking.duration}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Vehicle</p>
                                                                                            <p className="font-mono">{booking.vehicle}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm text-muted-foreground">Amount Paid</p>
                                                                                            <p className="font-bold text-gradient">₹{booking.amount}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                                                                                        <p className="font-medium">{booking.location}</p>
                                                                                        <p className="text-sm text-muted-foreground">{booking.address}</p>
                                                                                    </div>
                                                                                    <Button className="w-full" variant="outline">
                                                                                        <Download className="w-4 h-4 mr-2" />
                                                                                        Download Receipt
                                                                                    </Button>
                                                                                </div>
                                                                            </DialogContent>
                                                                        </Dialog>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        )
                                    })
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    )
}
