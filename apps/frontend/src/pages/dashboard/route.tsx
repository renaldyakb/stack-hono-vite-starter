import { authClient } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    const { data: session } = await authClient.getSession();
    if (!session?.user) {
      throw redirect({
        to: "/auth/signup",
      });
    }
  },
  component: () => (
    <div className="dashboard-layout min-h-screen bg-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Dashboard Layout
        </h1>
        <p className="text-gray-600 mb-6">
          This layout doesn't include the Navigation component
        </p>
        <Outlet />
      </div>
    </div>
  ),
});
