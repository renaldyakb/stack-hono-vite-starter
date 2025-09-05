import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: UserProfile,
});

function UserProfile() {
  const { userId } = Route.useParams();
  return (
    <div className="p-2">
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}
