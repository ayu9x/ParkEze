import { PaymentForm } from "@/components/Payment-form"

export default function PaymentPage() {
  // In a real application, you would fetch this amount from your backend
  const amountToPay = 100 // Example amount in Rupees

  return (
    <div className="max-w-md mx-auto mt-10">
      <PaymentForm amount={amountToPay} />
    </div>
  )
}

