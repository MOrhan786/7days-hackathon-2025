// src\components\pickUp.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function PickUp() {
  return (
    <>
      <section className=" min-w-full mt-[20px] md:flex-col  ">
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-[8px] mt-[20px]">
          {/* Left Card */}
          <div className="bg-[#FFFFFF] rounded-[10px]">
            <Card className="h-[136px]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <div className="max-w-4 min-h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="max-w-2 h-2 rounded-full bg-[#3563E9]" />
                  </div>
                  <span className="text-[#1A202C] font-semibold">Pick-Up</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {/* Locations */}
                  <div className="flex flex-col gap-2 ">
                    <label className="font-bold text-[#1A202C]">Locations</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-york">Karachi</SelectItem>
                        <SelectItem value="london">Lahore</SelectItem>
                        <SelectItem value="paris">Islamabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C]">Date</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C]">Time</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Item */}
          <div className="flex justify-center items-center">
            <Image src="/mid-item.svg" alt="hero" width={60} height={60} />
          </div>

          {/* Right Card */}
          <div className="bg-[#FFFFFF] rounded-[10px]">
            <Card className="h-[136px]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <div className="max-w-4 min-h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="max-w-2 h-2 rounded-full bg-[#3563E9]" />
                  </div>
                  <span className="text-[#1A202C] font-semibold">Drop -Off</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {/* Locations */}
                  <div className="flex flex-col gap-2 ">
                    <label className="font-bold text-[#1A202C]">Locations</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-york">Islamabad</SelectItem>
                        <SelectItem value="london">Karachi</SelectItem>
                        <SelectItem value="paris">Lahore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C]">Date</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C]">Time</label>
                    <Select>
                      <SelectTrigger className="max-w-full text-xs text-[#90A3BF]">
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
export default PickUp;