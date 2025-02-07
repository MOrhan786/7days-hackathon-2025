"use server";

import { client } from "@/sanity/lib/client";

// Define Car Interface based on your schema
export interface ICar {
  [x: string]: any;
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  image: string;
  heartImage: string;
}

//----------------------------------------------- Fetch Cars from Sanity
export async function sanityFetch(query: string) {
  try {
    const query = `*[_type == "car"]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "image": image.asset->url,
      "heartImage": heartImage.asset->url
    }`;

    const res: ICar[] = await client.fetch(query);
    return res;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

//----------------------------------------------- Upload Image to Sanity
async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    const asset = await client.assets.upload("image", blob);
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}

//----------------------------------------------- Create Car in Sanity
export async function productCreateSanity(updatedProduct: ICar) {
  try {
    const imageAsset = await uploadImageToSanity(updatedProduct.image);
    const heartImageAsset = await uploadImageToSanity(updatedProduct.heartImage);

    const res = await client.create({
      _type: "car",
      name: updatedProduct.name,
      brand: updatedProduct.brand,
      type: updatedProduct.type,
      fuelCapacity: updatedProduct.fuelCapacity,
      transmission: updatedProduct.transmission,
      seatingCapacity: updatedProduct.seatingCapacity,
      pricePerDay: updatedProduct.pricePerDay,
      originalPrice: updatedProduct.originalPrice,
      tags: updatedProduct.tags,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
      heartImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: heartImageAsset._id,
        },
      },
    });

    console.log("✅ Car created successfully:", res._id);
    return res;
  } catch (error) {
    console.error("😡 Car creation failed:", error);
    throw error;
  }
}

//----------------------------------------------- Update Car in Sanity
export async function productPostSanity(updatedProduct: ICar) {
  try {
    const imageAsset = await uploadImageToSanity(updatedProduct.image);
  

    const res = await client
      .patch(updatedProduct._id)
      .set({
        name: updatedProduct.name,
        brand: updatedProduct.brand,
        type: updatedProduct.type,
        fuelCapacity: updatedProduct.fuelCapacity,
        transmission: updatedProduct.transmission,
        seatingCapacity: updatedProduct.seatingCapacity,
        pricePerDay: updatedProduct.pricePerDay,
        originalPrice: updatedProduct.originalPrice,
        tags: updatedProduct.tags,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id,
          },
        },
       
      })
      .commit();

    console.log("✅ Car updated successfully:", res._id);
    return res;
  } catch (error) {
    console.error("😡 Car update failed:", error);
    throw error;
  }
}

//----------------------------------------------- Delete Car from Sanity
export async function productDeleteSanity(carId: string) {
  try {
    const res = await client.delete(carId);
    console.log("✅ Car deleted successfully:", res);
    return res;
  } catch (error) {
    console.error("😡 Car deletion failed:", error);
    throw error;
  }
}
