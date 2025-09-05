import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { auth } from "../auth";
import { db } from "../db";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  // Ambil session dari request
  const session = await auth.api.getSession({
    headers: req.headers as any,
  });

  return {
    db,
    user: session?.user ?? null,
    session: session?.session ?? null,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
