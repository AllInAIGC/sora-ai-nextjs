import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/faq',
    '/blog',
    '/sora-ai-videos',
    /^\/blog\/*/,
    '/sign-in',
    '/sign-up',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
