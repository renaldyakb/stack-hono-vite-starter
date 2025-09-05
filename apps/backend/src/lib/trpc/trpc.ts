import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./trpc_context";

const t = initTRPC.context<Context>().create();

export const createTRPCRouter = t.router;
export const createTRPCMiddleware = t.middleware;

// Public procedure - dapat diakses tanpa auth
export const publicProcedure = t.procedure;

// Protected procedure - membutuhkan authentication
const isAuthenticated = createTRPCMiddleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = publicProcedure.use(isAuthenticated);
