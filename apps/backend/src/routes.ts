import { createTRPCRouter } from "./lib/trpc/trpc";
import { greetings } from "./routes/hello";

export const appRouter = createTRPCRouter({
  greetings: greetings,
});

export type AppRouter = typeof appRouter;
