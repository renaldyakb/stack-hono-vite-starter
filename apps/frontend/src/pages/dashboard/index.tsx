import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard Home</h2>
      <p className="text-gray-700 mb-4">
        This is the dashboard page without Navigation component.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-medium">Analytics</h3>
          <p className="text-sm text-gray-600">View your stats</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-medium">Reports</h3>
          <p className="text-sm text-gray-600">Generate reports</p>
        </div>
        <div className="bg-purple-100 p-4 rounded">
          <h3 className="font-medium">Settings</h3>
          <p className="text-sm text-gray-600">Configure your account</p>
        </div>
      </div>
    </div>
  );
}
