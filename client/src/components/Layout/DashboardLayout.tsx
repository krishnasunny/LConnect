import { Sidebar } from "./Sidebar";
import { AuthService } from "@/lib/auth";
import { useEffect, useMemo } from "react";
import { useLocation } from "wouter";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [, setLocation] = useLocation();
  const user = useMemo(() => AuthService.getUser(), []);

  useEffect(() => {
    if (!AuthService.isAuthenticated() || !user) {
      setLocation("/login");
      return;
    }
  }, [setLocation]);

  if (!user || !AuthService.isAuthenticated()) {
    return (
      <div className="min-h-screen bg-light-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-light-bg">
      <Sidebar userRole={user.role} />
      <main className="flex-1">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
