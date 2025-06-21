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
  }, [setLocation]); // Remove user from dependencies to prevent re-renders

  if (!user || !AuthService.isAuthenticated()) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={user.role} />
      <main className="flex-1 bg-light-bg">
        {children}
      </main>
    </div>
  );
}
