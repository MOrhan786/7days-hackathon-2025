import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';

function RentalSummary() {
  return (
   <>
    <Card className="w-full max-w-[492px] mx-auto lg:w-[492px]">
           <CardContent className="p-4 sm:p-6">
             {/* Header */}
             <div className="space-y-2">
               <h2 className="text-lg sm:text-xl font-bold tracking-tight">Rental Summary</h2>
               <p className="text-xs sm:text-sm text-muted-foreground">
                 Prices may change depending on the length of the rental and the price of your rental car.
               </p>
             </div>
   
             {/* Car Preview */}
             <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
               <div className="relative h-[108px] w-full sm:w-[132px] overflow-hidden rounded-lg bg-[#3563E9]">
                 <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-0">
                   {[...Array(32)].map((_, i) => (
                     <div key={i} className="bg-white/6 " />
                   ))}
                 </div>
                 <Image
                   src="/Car2.png"
                   alt="Car preview"
                   width={116}
                   height={36}
                   className="absolute left-1/2 sm:left-4 top-1/2 h-9 w-[116px] -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 transform"
                 />
               </div>
               <div className="space-y-2 text-center sm:text-left">
                 <h3 className="text-2xl sm:text-3xl font-bold">Nissan GT - R</h3>
                 <div className="flex items-center gap-2 justify-center sm:justify-start">
                   <div className="flex">
                     {[...Array(4)].map((_, i) => (
                       <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-[#FBAD39] text-[#FBAD39]" />
                     ))}
                     <Star className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
                   </div>
                   <span className="text-xs sm:text-sm text-muted-foreground">440+ Reviewer</span>
                 </div>
               </div>
             </div>
   
             <div className="my-6 sm:my-8 border-t border-border" />
   
             {/* Price Breakdown */}
             <div className="space-y-4">
               <div className="flex justify-between text-sm sm:text-base">
                 <span className="text-muted-foreground">Subtotal</span>
                 <span className="font-semibold">$80.00</span>
               </div>
               <div className="flex justify-between text-sm sm:text-base">
                 <span className="text-muted-foreground">Tax</span>
                 <span className="font-semibold">$0</span>
               </div>
             </div>
   
             {/* Promo Code */}
             <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:justify-between rounded-lg bg-muted p-3 sm:p-4">
               <Input 
                 type="text"
                 placeholder="Enter promo code"
                 className="h-9 w-full sm:w-auto bg-transparent border-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
               />
               <Button 
                 variant="ghost" 
                 className="w-full sm:w-auto text-sm font-semibold hover:bg-transparent hover:text-primary"
               >
                 Apply now
               </Button>
             </div>
   
             {/* Total Price */}
             <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-0">
               <div className="space-y-1 text-center sm:text-left">
                 <h4 className="text-lg sm:text-xl font-bold">Total Rental Price</h4>
                 <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px] sm:max-w-none">
                   Overall price and includes rental discount
                 </p>
               </div>
               <span className="text-2xl sm:text-3xl font-bold">$80.00</span>
             </div>
           </CardContent>
         </Card>

   </>
  )
}

export default RentalSummary;
