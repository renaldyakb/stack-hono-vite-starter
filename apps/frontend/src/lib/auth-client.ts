import { createAuthClient } from "better-auth/react";
import type { auth } from "../../../backend/src/lib/auth.ts";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: import.meta.env.BASE_URL ?? "http://localhost:3000",
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const { useSession, signOut } = createAuthClient();

export const handleSignOut = () => {
  signOut({
    fetchOptions: {
      onSuccess: () => {
        alert("Berhasil keluar");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    },
  });
};
