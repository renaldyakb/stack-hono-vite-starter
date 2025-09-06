import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../lib/trpc/trpc";

export const greetings = createTRPCRouter({
  hello: protectedProcedure.query(() => {
    return { message: "hello from server" };
  }),
});
