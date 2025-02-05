import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="space-y-8">
      {/* Customer Support */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Phone className="h-12 w-12 text-blue-600" />
        </div>
        <p className="font-medium text-lg">Customer Support</p>
        <p className="text-sm mt-2">
          Call us for reservations, rental extensions, or any queries.
        </p>
        <p className="text-sm font-semibold mt-2">+1 800 555 1234</p>
        <p className="text-xs text-gray-500">Available 24/7</p>
      </div>

      {/* Live Chat */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MessageSquare className="h-12 w-12 text-green-500" />
        </div>
        <p className="font-medium text-lg">Live Chat</p>
        <p className="text-sm">Chat with our representatives for quick support.</p>
        <p className="text-xs text-gray-500">Available 24/7</p>
      </div>

      {/* Email Support */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Mail className="h-12 w-12 text-red-500" />
        </div>
        <p className="font-medium text-lg">Email Us</p>
        <p className="text-sm">For general inquiries and support, email us.</p>
        <p className="text-sm font-semibold mt-2">support@rentalcars.com</p>
        <p className="text-xs text-gray-500">Response time: Within 24 hours</p>
      </div>

      {/* Rental Locations */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MapPin className="h-12 w-12 text-yellow-500" />
        </div>
        <p className="font-medium text-lg">Find a Rental Location</p>
        <p className="text-sm">Search for rental locations near you.</p>
        <p className="text-sm font-semibold mt-2">Visit our nearest branch</p>
        <p className="text-xs text-gray-500">Available in 50+ cities</p>
      </div>
    </div>
  );
}
