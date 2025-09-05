import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../lib/trpc/trpc";

export const greetings = createTRPCRouter({
  hello: protectedProcedure.query(({ ctx }) => {
    return { mesage: "hello from server" };
  }),
});
