// src\components\carStats.tsx
'use client'


import Image from 'next/image'



export default function CarStats() {
  return (
    <div className="bg-white p-4 lg:p-5 rounded-lg shadow-lg">
              <h2 className="font-semibold text-lg lg:text-xl mb-4 text-center">
                Top 5 Car Rental
              </h2>

              {/* Circular Chart */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
                <Image
                  src="/Chart (1).svg"
                  alt="Chart"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center font-bold text-sm lg:text-lg text-center">
                  72,030 <br />
                  <span className="text-gray-500 text-xs lg:text-sm">
                    Rental Car
                  </span>
                </div>
              </div>

              {/* Car List */}
              <ul className="space-y-2">
                {[
                  { label: "Sport Car", value: "17,439", color: "#0D3559" },
                  { label: "SUV", value: "9,478", color: "#175D9C" },
                  { label: "Coupe", value: "18,197", color: "#2185DE" },
                  { label: "Hatchback", value: "12,510", color: "#63A9E8" },
                  { label: "MPV", value: "14,406", color: "#A6CEF2" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md shadow-sm"
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div
                        className="w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-gray-600 text-sm lg:text-md">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm lg:text-md">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
  )
}

