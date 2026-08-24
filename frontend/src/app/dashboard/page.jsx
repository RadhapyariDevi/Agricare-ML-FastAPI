"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, {user?.name}
        </h1>
      </div>
    </ProtectedRoute>
  );
}