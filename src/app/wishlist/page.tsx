"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Car {
  id: string;
  name: string;
  price: string;
  image: string;
  type: string;
  transmission: string;
  capacity: string;
  fuel: string;
}

export default function Wishlist() {
  const { user } = useUser();
  const [wishlist, setWishlist] = useState<Car[]>([]);

  // Fetch Wishlist from API
  useEffect(() => {
    if (user) {
      fetch(`/api/wishlist?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data.wishlist || []));
    }
  }, [user]);

  // Remove Car from Wishlist
  async function handleRemove(carId: string) {
    await fetch(`/api/wishlist`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id, carId }),
    });

    setWishlist(wishlist.filter((car) => car.id !== carId));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-6">My Wishlist</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {wishlist.map((car) => (
          <Card key={car.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <Image src={car.image} alt={car.name} width={100} height={100} />
                <div>
                  <h3 className="font-medium">{car.name}</h3>
                  <p className="text-sm">Type: {car.type}</p>
                  <p className="text-sm">Price: ₹ {car.price}</p>
                  <Button variant="outline" onClick={() => handleRemove(car.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
