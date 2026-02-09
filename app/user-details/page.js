'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    User,
    Mail,
    Phone,
    MapPin,
    Car,
    Plus,
    Edit2,
    Trash2,
    Save,
    Camera
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/hooks/use-toast'

const initialVehicles = [
    { id: 1, type: 'Car', number: 'KA-01-AB-1234', model: 'Honda City', color: 'White' },
    { id: 2, type: 'Bike', number: 'KA-01-CD-5678', model: 'Royal Enfield', color: 'Black' },
]

export default function UserDetailsPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [vehicles, setVehicles] = useState(initialVehicles)
    const { toast } = useToast()

    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+91 9876543210',
        address: 'Koramangala, Bangalore, Karnataka 560034'
    })

    const handleSave = () => {
        setIsEditing(false)
        toast({
            title: "Profile Updated",
            description: "Your profile has been saved successfully.",
        })
    }

    const handleDeleteVehicle = (id) => {
        setVehicles(vehicles.filter(v => v.id !== id))
        toast({
            title: "Vehicle Removed",
            description: "The vehicle has been removed from your profile.",
        })
    }

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">My Profile</h1>
                    <p className="text-muted-foreground">Manage your personal information and vehicles</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <Card className="glass border-border/50">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Personal Information</CardTitle>
                                <Button
                                    variant={isEditing ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                >
                                    {isEditing ? (
                                        <>
                                            <Save className="w-4 h-4 mr-2" />
                                            Save
                                        </>
                                    ) : (
                                        <>
                                            <Edit2 className="w-4 h-4 mr-2" />
                                            Edit
                                        </>
                                    )}
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Avatar Section */}
                                    <div className="flex flex-col items-center">
                                        <div className="relative group">
                                            <Avatar className="w-32 h-32 border-4 border-primary/20">
                                                <AvatarImage src="" />
                                                <AvatarFallback className="text-4xl gradient-primary text-white">
                                                    JD
                                                </AvatarFallback>
                                            </Avatar>
                                            <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Camera className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="mt-4 font-semibold text-lg">{formData.name}</p>
                                        <p className="text-muted-foreground text-sm">Member since 2024</p>
                                    </div>

                                    {/* Form Section */}
                                    <div className="flex-1 space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                                                    <User className="w-4 h-4" />
                                                    Full Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                                                    <Mail className="w-4 h-4" />
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                                                    <Phone className="w-4 h-4" />
                                                    Phone
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                                                    <MapPin className="w-4 h-4" />
                                                    Address
                                                </Label>
                                                <Input
                                                    id="address"
                                                    value={formData.address}
                                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="glass border-border/50">
                            <CardHeader>
                                <CardTitle>Statistics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 rounded-xl bg-primary/10">
                                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                                    <p className="text-3xl font-bold text-primary">47</p>
                                </div>
                                <div className="p-4 rounded-xl bg-accent/10">
                                    <p className="text-sm text-muted-foreground">Money Saved</p>
                                    <p className="text-3xl font-bold text-accent">₹1,250</p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted">
                                    <p className="text-sm text-muted-foreground">Time Saved</p>
                                    <p className="text-3xl font-bold">12 hrs</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Vehicles Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                >
                    <Card className="glass border-border/50">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                My Vehicles
                            </CardTitle>
                            <Button size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Vehicle
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                {vehicles.map((vehicle, index) => (
                                    <motion.div
                                        key={vehicle.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                                                        {vehicle.type}
                                                    </span>
                                                </div>
                                                <p className="font-mono text-lg font-semibold">{vehicle.number}</p>
                                                <p className="text-muted-foreground">{vehicle.model} • {vehicle.color}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="icon">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleDeleteVehicle(vehicle.id)}
                                                >
                                                    <Trash2 className="w-4 h-4 text-destructive" />
                                                </Button>
                                            </div>
                                        </div>
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
