import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// Define a proper type for wishlist items
interface Car {
  id: string;
  name: string;
  image: string;
  price: number;
  fuel: string;
  transmission: string;
  capacity: number;
}

// ✅ Fetch User Wishlist
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const userRef = doc(db, "wishlists", userId);
    const userData = await getDoc(userRef);
    const wishlist: Car[] = userData.exists() ? userData.data().wishlist : [];

    return NextResponse.json({ wishlist });
  } catch (err) {
    console.error("Error fetching wishlist:", err); // ✅ Logs the error
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
  }
}

// ✅ Add to Wishlist
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, car }: { userId: string; car: Car } = body;

    if (!userId || !car) {
      return NextResponse.json({ error: "User ID and Car Data are required" }, { status: 400 });
    }

    const userRef = doc(db, "wishlists", userId);
    const userData = await getDoc(userRef);
    const wishlist: Car[] = userData.exists() ? userData.data().wishlist : [];

    // Check if car is already in wishlist
    if (wishlist.some((item) => item.id === car.id)) {
      return NextResponse.json({ message: "Car already in wishlist" }, { status: 200 });
    }

    wishlist.push(car);
    await setDoc(userRef, { wishlist });

    return NextResponse.json({ message: "Car added to wishlist" }, { status: 201 });
  } catch (err) {
    console.error("Error adding to wishlist:", err); // ✅ Logs the error
    return NextResponse.json({ error: "Failed to add to wishlist" }, { status: 500 });
  }
}

// ✅ Remove from Wishlist
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { userId, carId }: { userId: string; carId: string } = body;

    if (!userId || !carId) {
      return NextResponse.json({ error: "User ID and Car ID are required" }, { status: 400 });
    }

    const userRef = doc(db, "wishlists", userId);
    const userData = await getDoc(userRef);
    const wishlist: Car[] = userData.exists() ? userData.data().wishlist : [];

    // Remove the car from the wishlist
    const updatedWishlist = wishlist.filter((item) => item.id !== carId);
    await setDoc(userRef, { wishlist: updatedWishlist });

    return NextResponse.json({ message: "Car removed from wishlist" }, { status: 200 });
  } catch (err) {
    console.error("Error removing from wishlist:", err); // ✅ Logs the error
    return NextResponse.json({ error: "Failed to remove from wishlist" }, { status: 500 });
  }
}
