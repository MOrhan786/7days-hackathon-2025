"use client"
import  { useEffect } from 'react'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

function AdminComponent() {
    
      const {isLoaded,  user } = useUser();
   const router = useRouter();
     useEffect(() => {
        if (isLoaded) {
         const role =( user?.publicMetadata as { role?: string })?.role;
    
          if (!user || role !== 'admin') {
           router.push('/')
          }
        }
     }, [isLoaded, user, router]);

      
     
    
  return (
    <div className=" flex-1 p-4 lg:p-8">
      this is admin
    </div>
  )
}

export default AdminComponent;
