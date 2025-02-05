// src\services\userId.ts
"use server"
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function  clerkGetUser() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user) return null;

  return {
    userId,
    name: `${user.firstName} ${user.lastName}`,
    email: user.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress,
  };
}

export async function sanityUserPost(){
  const user = await  clerkGetUser()
  
  const res = await client.createOrReplace({
    _type: "user",
    _id: `user-${user?.userId}`,
    name: user?.name,
    userID: user?.userId,
    email: user?.email,
    address:"",
  })
  
  return (res.userID)
}






















// "use server"

// import { client } from "@/sanity/lib/client";
// import { auth, currentUser } from "@clerk/nextjs/server"


// export async function clerkGetUser(){
//     const { userId } = await auth();
//     const user = await currentUser();

    
//     const userName = `${user?.firstName} ${user?.lastName}`;
//     const userEmail = user?.externalAccounts[0].emailAddress;
//     const userImage = user?.imageUrl;

//     return {
//       userName,
//       userEmail,
//       userImage,
//       userId
      
//     }
  
//   }

// export async function sanityUserPost(){
  
//  const user = await clerkGetUser()
// const userObject =  {
//   _type:"user",
//   _id:`user-${user.userId}`,
//   email:user.userEmail,
// name:user.userName,
// userId:user.userId,
// image:user.userImage,

// }
//    const res =  client.createOrReplace(userObject)
// }