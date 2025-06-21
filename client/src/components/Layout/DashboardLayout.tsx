import { Sidebar } from "./Sidebar";
import { AuthService } from "@/lib/auth";
import { useEffect } from "react";
import { useLocation } from "wouter";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [, setLocation] = useLocation();
  const user = AuthService.getUser();

  useEffect(() => {
    if (!AuthService.isAuthenticated() || !user) {
      setLocation("/login");
      return;
    }
  }, [user, setLocation]);

  if (!user) {
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
