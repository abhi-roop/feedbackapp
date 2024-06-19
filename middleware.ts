import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Specify public routes that don't require authentication
  publicRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
