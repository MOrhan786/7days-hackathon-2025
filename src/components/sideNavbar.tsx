// src\components\sideNavbar.tsx
"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface FilterOption {
  label: string
  count: number
  checked?: boolean
}

export default function FilterSidebar() {
  const [price, setPrice] = React.useState([100])

  const typeOptions: FilterOption[] = [
    { label: "Sport", count: 10, checked: true },
    { label: "SUV", count: 12, checked: true },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ]

  const capacityOptions: FilterOption[] = [
    { label: "2 Person", count: 10, checked: true },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16, checked: true },
  ]

  return (
    <aside className="w-[286px] h-screen border-r border-[#F3F5F7] bg-white p-8">
      {/* Type Section */}
      <div className="mb-12">
        <h3 className="text-xs font-semibold tracking-tight text-[#90A3BF] mb-7">
          T Y P E
        </h3>
        <div className="space-y-8">
          {typeOptions.map((option) => (
            <label
              key={option.label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <Checkbox
                defaultChecked={option.checked}
                className="border-[#90A3BF] data-[state=checked]:border-[#3563E9] data-[state=checked]:bg-[#3563E9]"
              />
              <span className="flex-1 text-xl font-semibold text-[#596780] group-hover:text-[#3563E9]">
                {option.label} <span className="text-[#90A3BF]">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity Section */}
      <div className="mb-12">
        <h3 className="text-xs font-semibold tracking-tight text-[#90A3BF] mb-7">
          C A P A C I T Y
        </h3>
        <div className="space-y-8">
          {capacityOptions.map((option) => (
            <label
              key={option.label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <Checkbox
                defaultChecked={option.checked}
                className="border-[#90A3BF] data-[state=checked]:border-[#3563E9] data-[state=checked]:bg-[#3563E9]"
              />
              <span className="flex-1 text-xl font-semibold text-[#596780] group-hover:text-[#3563E9]">
                {option.label} <span className="text-[#90A3BF]">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-xs font-semibold tracking-tight text-[#90A3BF] mb-7">
          P R I C E
        </h3>
        <div className="space-y-3">
          <Slider
            defaultValue={[100]}
            max={100}
            step={1}
            value={price}
            onValueChange={setPrice}
            className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:border-4 [&_[role=slider]]:border-white [&_[role=slider]]:bg-[#3563E9] [&_[role=slider]]:shadow-none [&_.range]:bg-[#3563E9] [&_.track]:bg-[#90A3BF] [&_.track]:h-3 [&_.range]:h-3"
          />
          <p className="text-xl font-semibold text-[#596780]">
            Max. ${price[0]}.00
          </p>
        </div>
      </div>
    </aside>
  )
}

