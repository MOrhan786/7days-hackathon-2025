// src\components\reviews.tsx
'use client'

import { Star } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Review {
  id: number
  image: string
  name: string
  position: string
  company: string
  date: string
  rating: number
  comment: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    image: "/t-img.png",
    name: "Alex Stanton",
    position: "CEO",
    company: "Bukalapak",
    date: "21 July 2022",
    rating: 4,
    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "/placeholder.svg?height=56&width=56"
    
     
  },
  {
    id: 2,
    image: "/review-img.svg",
    name: "Skylar Dias",
    position: "CEO",
    company: "Amazon",
    date: "20 July 2022",
    rating: 4,
    comment: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "/placeholder.svg?height=56&width=56"
  }
  
]

export default function Reviews() {
  return (
    <Card className="w-full max-w-5xl p-6 bg-white mt-[-20px] rounded-[10px]">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
        <span className="px-5 py-1 text-sm font-bold text-white bg-blue-600 rounded">
          13
        </span>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={56}
                  height={56}
                  className="rounded-full "
                />
                <div>
               
                  <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-400">
                    {review.position} at {review.company}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-2">{review.date}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-[#FBAD39] stroke-[#FBAD39]"
                          : "stroke-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 ml-[72px] text-left">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <button className="flex items-center justify-center gap-2 mx-auto mt-8 text-gray-400 hover:text-gray-600 transition-colors">
        <span className="text-base font-semibold">Show All</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M4 6L8 10L12 6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Card>
  )
}

