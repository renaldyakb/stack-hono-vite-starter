import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="p-4 bg-gray-100">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link to="/users" className="text-blue-600 hover:text-blue-800">
          Users
        </Link>

        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

/* 

    ? Jika ingin pakai parmas tinggal setups params seperti di bawah
    <Link
    to="/users/$userId"
    params={{ userId: "134" }}
    className="text-blue-600 hover:text-blue-800">
    User 123
    </Link> 
*/
