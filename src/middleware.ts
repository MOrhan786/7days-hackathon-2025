import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// ye aik public route h jo kisi bhi user ko access krne ki ijazat deta h
// ye tmam route bany  (,'/','/category', '/carDetail/proId','/rentCar/rentId','/adminCar/adminId')
const isPublicRoute = createRouteMatcher(['/sign-in(.*)' ,'/','/studio (.*)' ])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

