"use client"

import { sanityUserPost } from '@/services/userApi'

import  { useEffect } from 'react'

function Product() {
    useEffect(() => {
        sanityUserPost()
    }, [])
  return (
  <div>this is products pge</div>
  )
}

export default Product ; 
