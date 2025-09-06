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
import { useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: session, isPending } = authClient.useSession();
  const queryClient = useQueryClient();

  const { data, isLoading: isLoadingGreeting } = trpc.greetings.hello.useQuery(
    undefined,
    { enabled: !!session }
  );

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: [["greetings"]] }),
        onError: (ctx) => alert(ctx.error.message),
      },
    });
  };

  const showLoading = isPending || (session && isLoadingGreeting); // <- tambahan
  const showGreeting = session && !isLoadingGreeting;
  const showLoginPrompt = !session && !isPending;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-xl">
            {session ? "Welcome" : "Not Authenticated"}
          </CardTitle>

          {showLoading && <p>Loading…</p>}
          {showGreeting && <p>{data?.message ?? "-"}</p>}
          {showLoginPrompt && <p>You must login to see the resource</p>}

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
