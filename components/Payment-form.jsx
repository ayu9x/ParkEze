'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, Wallet } from 'lucide-react'

export function PaymentForm({ amount }) {
  const [paymentMethod, setPaymentMethod] = useState('razorpay')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (paymentMethod === 'razorpay') {
      await handleRazorpayPayment()
    } else {
      await handleCreditCardPayment()
    }

    setIsLoading(false)
  }

  const handleRazorpayPayment = async () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "ParkPay",
      description: "Parking Toll Payment",
      handler: function (response) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        })
        router.push('/payment-success')
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#000000"
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  const handleCreditCardPayment = async () => {
    // In a real application, you would send this data to your server
    // and process the payment there. Never handle raw credit card data
    // on the client side in a production environment.
    console.log('Processing credit card payment:', { cardNumber, cardExpiry, cardCVV })
    
    // Simulating a payment process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Payment Successful",
      description: "Your credit card payment has been processed.",
    })
    router.push('/payment-success')
  }

  return (
    <form onSubmit={handlePayment} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="text-lg mb-4">Amount to pay: ₹{amount.toFixed(2)}</p>
      </div>

      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="razorpay" id="razorpay" />
          <Label htmlFor="razorpay" className="flex items-center space-x-2">
            <Wallet className="h-5 w-5" />
            <span>Razorpay</span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="credit-card" id="credit-card" />
          <Label htmlFor="credit-card" className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Credit Card</span>
          </Label>
        </div>
      </RadioGroup>

      {paymentMethod === 'credit-card' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="card-expiry">Expiry Date</Label>
              <Input
                id="card-expiry"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="card-cvv">CVV</Label>
              <Input
                id="card-cvv"
                placeholder="123"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  )
}

