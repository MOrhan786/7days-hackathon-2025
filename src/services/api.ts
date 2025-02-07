"use server";

import { client } from "@/sanity/lib/client";

async function uploadImage(imageUrl: any){
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }
    const blob = await response.blob();
    const asset = await client.assets.upload("image", blob);
    return asset._id; // Return asset ID
  } catch (error)  {
    console.error("Error uploading image:", error);
    return null; // Return null if upload fails
  }
}

export async function importCarData() {
  try {
    console.log("Fetching car data...");

    const response = await fetch(
      "https://sanity-nextjs-application.vercel.app/api/hackathon/template7"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch car data. Status: ${response.status}`);
    }

    const cars = await response.json();
    console.log(`Fetched ${cars.length} cars.`);

    for (const car of cars) {
      console.log(`Processing car: ${car.name}`);

      let imageRef = null;
      if (car.image_url) {
        imageRef = await uploadImage(car.image_url);
      }

      const sanityCar = {
        _id: `car-${car.id}`,
        _type: "car",
        name: car.name,
        brand: car.brand || null,
        type: car.type,
        fuelCapacity: car.fuel_capacity,
        transmission: car.transmission,
        seatingCapacity: car.seating_capacity,
        pricePerDay: car.price_per_day,
        originalPrice: car.original_price || null,
        tags: car.tags || [],
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
      };

      try {
        console.log(`Uploading car to Sanity: ${sanityCar.name}`);
        await client.createOrReplace(sanityCar);
        console.log(`Car uploaded successfully: ${sanityCar.name}`);
      } catch (uploadError) {
        console.error(`Error uploading car with ID ${car.id}:`, uploadError);
      }
    }

    console.log("Car data import completed successfully!");
  } catch (error) {
    console.error("Error importing car data:", error);
  }
}
