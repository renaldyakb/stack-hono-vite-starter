import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPasssword] = useState<string>("");

  const handleSignup = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          alert("Berhasil masuk");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <div className="max-w-sm m-auto min-h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email@email.com"
      />
      <Input
        onChange={(e) => setPasssword(e.target.value)}
        value={password}
        placeholder="Password"
        type="password"
      />
      <Button onClick={handleSignup} className="w-full">
        Login
      </Button>
    </div>
  );
}
