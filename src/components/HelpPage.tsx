// src\components\HelpPage.tsx
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import ContactSection from './ContactSection'
// 


export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white mt-[99px]">
      {/* Header */}
      <header className="py-8 px-4">
        <h1 className="text-3xl font-medium text-center mb-6">GET HELP</h1>
        <div className="max-w-xl mx-auto relative">
          <Input 
            placeholder="What can we help you with?"
            className="pl-4 pr-10 py-6 text-base rounded-lg border-gray-400"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
          <section>
  <h2 className="text-2xl font-medium mb-4">WHAT PAYMENT OPTIONS CAN I USE FOR CAR RENTALS?</h2>
  <div className="space-y-4 text-base">
    <p>We aim to make renting a car simple and convenient, offering the following payment options:</p>
    <ul className="list-none space-y-2 pl-4">
      <li>Visa, Mastercard, American Express, Discover</li>
      <li>Debit Cards (Visa Debit, Maestro, MasterCard Debit)</li>
      <li>PayPal & Apple Pay</li>
      <li>Bank Transfers (for long-term rentals)</li>
    </ul>
  </div>

  <div className="my-8">
  <p className="mb-4 font-medium">Create an account to save your payment details for faster bookings and exclusive discounts. If you&apos;re not registered yet, join us today.</p>
  <div className="flex gap-4">
      <Button className="rounded-full">JOIN US</Button>
      <Button className="rounded-full">BOOK A CAR</Button>
    </div>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-medium">FAQs</h3>
    <div className="space-y-6">
      <div>
        <h4 className="font-bold mb-2">Do I need a credit card to rent a car?</h4>
        <p>Most rental services require a credit card for security purposes, but we also accept debit cards with proper identification.</p>
      </div>
      <div>
        <h4 className="font-bold">Can I pay for my rental with multiple payment methods?</h4>
        <p>No, we currently do not support split payments. The full rental amount must be paid using one payment method.</p>
      </div>
      <div>
        <h4 className="font-bold">Are there any additional charges for using a debit card?</h4>
        <p>Some debit card payments may require a higher security deposit, which is refunded upon returning the car.</p>
      </div>
      <div>
      <h4 className="font-bold">Why don&apos;t I see Apple Pay as a payment option?</h4>
      <p>Apple Pay is available for users with a compatible Apple device, an updated OS, and a supported card linked to their Apple Wallet. Ensure you are using Safari to see Apple Pay on our website.</p>
      </div>
    </div>
  </div>
</section>

          </div>

          {/* Right Column */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-2xl font-medium text-center mb-8">CONTACT US</h2>
                <ContactSection />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}