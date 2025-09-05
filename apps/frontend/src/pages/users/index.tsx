import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: Users,
});

function Users() {
  return (
    <div className="p-2">
      <h2>Users List</h2>
      <p>This is the users list page!</p>
    </div>
  );
}
