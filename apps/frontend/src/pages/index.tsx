import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/lib/trpc";

import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
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

  const { data, error } = trpc.greetings.hello.useQuery();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-xl">
            {session ? "Welcome" : "Not Authenticated"}
          </CardTitle>
          <p>{error?.message}</p>
          <p>{data?.mesage}</p>
          <CardDescription>
            {session
              ? `Hello, ${session.user.email}`
              : "Please sign in to continue"}
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-2 space-x-2">
          {!isPending && session ? (
            <Button onClick={handleSignOut}>Signout</Button>
          ) : (
            !isPending &&
            !session && (
              <>
                <Button asChild>
                  <Link to="/auth/signup">Signup</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/auth/login">Sign in</Link>
                </Button>
              </>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}
