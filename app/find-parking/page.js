'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Search,
    MapPin,
    Filter,
    Clock,
    Car,
    ChevronDown,
    Star,
    Navigation,
    Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'

const parkingSpots = [
    {
        id: 1,
        name: 'MG Road Parking Complex',
        address: 'MG Road, Bangalore 560001',
        distance: '0.5 km',
        price: 40,
        rating: 4.5,
        available: 24,
        total: 50,
        type: 'Covered',
        features: ['CCTV', 'EV Charging', '24/7']
    },
    {
        id: 2,
        name: 'Brigade Road Multi-Level',
        address: 'Brigade Road, Bangalore 560025',
        distance: '0.8 km',
        price: 60,
        rating: 4.8,
        available: 12,
        total: 100,
        type: 'Multi-Level',
        features: ['CCTV', 'Valet', '24/7', 'Wash']
    },
    {
        id: 3,
        name: 'Koramangala Open Parking',
        address: 'Koramangala 4th Block, Bangalore',
        distance: '1.2 km',
        price: 25,
        rating: 4.0,
        available: 8,
        total: 30,
        type: 'Open',
        features: ['CCTV']
    },
    {
        id: 4,
        name: 'Indiranagar Plaza Parking',
        address: '100 Feet Road, Indiranagar',
        distance: '2.0 km',
        price: 50,
        rating: 4.6,
        available: 35,
        total: 80,
        type: 'Covered',
        features: ['CCTV', 'EV Charging', '24/7', 'Wheelchair']
    },
    {
        id: 5,
        name: 'Forum Mall Basement',
        address: 'Hosur Road, Koramangala',
        distance: '2.5 km',
        price: 70,
        rating: 4.7,
        available: 150,
        total: 500,
        type: 'Basement',
        features: ['CCTV', 'Valet', '24/7', 'EV Charging']
    },
]

export default function FindParkingPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('distance')

    const filteredSpots = parkingSpots
        .filter(spot =>
            spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            spot.address.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'distance') return parseFloat(a.distance) - parseFloat(b.distance)
            if (sortBy === 'price') return a.price - b.price
            if (sortBy === 'rating') return b.rating - a.rating
            return 0
        })

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
                        Find <span className="text-gradient">Parking</span>
                    </h1>
                    <p className="text-muted-foreground">Discover available parking spots near you</p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <Card className="glass border-border/50">
                        <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by location or parking name..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="w-40">
                                            <SelectValue placeholder="Sort by" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="distance">Nearest</SelectItem>
                                            <SelectItem value="price">Cheapest</SelectItem>
                                            <SelectItem value="rating">Top Rated</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline">
                                        <Filter className="w-4 h-4 mr-2" />
                                        Filters
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 order-2 lg:order-1"
                    >
                        <Card className="glass border-border/50 h-[400px] lg:h-full lg:sticky lg:top-24 overflow-hidden">
                            <div className="h-full relative bg-muted/50 flex items-center justify-center">
                                <div className="absolute inset-0 grid-pattern opacity-50" />
                                <div className="text-center relative z-10">
                                    <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Interactive Map</h3>
                                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                        Map integration coming soon. View nearby parking spots visually.
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-4">
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Use My Location
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Parking List */}
                    <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-muted-foreground">
                                {filteredSpots.length} parking spots found
                            </p>
                        </div>

                        {filteredSpots.map((spot, index) => (
                            <motion.div
                                key={spot.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Card className="glass border-border/50 card-hover overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col md:flex-row">
                                            {/* Spot Image Placeholder */}
                                            <div className="md:w-48 h-32 md:h-auto bg-muted/50 relative flex items-center justify-center">
                                                <Car className="w-12 h-12 text-muted-foreground/30" />
                                                <Badge className="absolute top-2 left-2">{spot.type}</Badge>
                                            </div>

                                            {/* Spot Details */}
                                            <div className="flex-1 p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-semibold text-lg">{spot.name}</h3>
                                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" />
                                                            {spot.address}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-yellow-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span className="font-medium">{spot.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {spot.features.map((feature) => (
                                                        <span
                                                            key={feature}
                                                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-4 text-sm">
                                                        <span className="flex items-center gap-1 text-muted-foreground">
                                                            <Navigation className="w-4 h-4" />
                                                            {spot.distance}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Zap className="w-4 h-4 text-green-500" />
                                                            <span className="text-green-500 font-medium">{spot.available}</span>
                                                            <span className="text-muted-foreground">/ {spot.total} spots</span>
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-right">
                                                            <p className="text-2xl font-bold text-gradient">₹{spot.price}</p>
                                                            <p className="text-xs text-muted-foreground">/hour</p>
                                                        </div>
                                                        <Link href="/payment">
                                                            <Button size="sm" className="gradient-primary text-white">
                                                                Book Now
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
