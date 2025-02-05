"use server"

import { client } from "@/sanity/lib/client"

export interface Cars {
  _id: string;
  _type: string;
  name: string;
  seatingCapacity: number;
  tags: string[];
  type: string;
  brand: string;
  pricePerDay: number;
  transmission: string;
  image: string;
  fuelCapacity: number;
  originalPrice: number;
}
export async function fetchData(){
  const res = await client.fetch(`*[_type == 'car']{
  _id,
  name,
   _type,
    seatingCapacity,
    tags,
    type,
     brand,
    pricePerDay,
   transmission,
   'image': image.asset->url,
    fuelCapacity,
    originalPrice
      
}`)
  return res

}