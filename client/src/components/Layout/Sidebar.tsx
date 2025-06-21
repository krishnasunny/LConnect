import { Link, useLocation } from "wouter";
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings, 
  Home, 
  Calendar, 
  MessageSquare, 
  FileText, 
  User,
  TrendingUp,
  CalendarDays,
  DollarSign,
  Star,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";

interface SidebarProps {
  userRole: string;
}

const adminNavItems = [
  { icon: BarChart3, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Lawyers", href: "/admin/lawyers" },
  { icon: CreditCard, label: "Subscriptions", href: "/admin/subscriptions" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const clientNavItems = [
  { icon: Home, label: "Dashboard", href: "/client/dashboard" },
  { icon: Calendar, label: "Consultations", href: "/client/consultations" },
  { icon: MessageSquare, label: "Messages", href: "/client/messages" },
  { icon: FileText, label: "Documents", href: "/client/documents" },
  { icon: User, label: "Profile", href: "/client/profile" },
];

const lawyerNavItems = [
  { icon: TrendingUp, label: "Dashboard", href: "/lawyer/dashboard" },
  { icon: CalendarDays, label: "Calendar", href: "/lawyer/calendar" },
  { icon: Users, label: "Clients", href: "/lawyer/clients" },
  { icon: DollarSign, label: "Earnings", href: "/lawyer/earnings" },
  { icon: User, label: "Profile", href: "/lawyer/profile" },
];

export function Sidebar({ userRole }: SidebarProps) {
  const [location] = useLocation();

  const getNavItems = () => {
    switch (userRole) {
      case "admin":
        return adminNavItems;
      case "client":
        return clientNavItems;
      case "lawyer":
        return lawyerNavItems;
      default:
        return [];
    }
  };

  const getPortalTitle = () => {
    switch (userRole) {
      case "admin":
        return "Admin Panel";
      case "client":
        return "Client Portal";
      case "lawyer":
        return "Lawyer Portal";
      default:
        return "Portal";
    }
  };

  const navItems = getNavItems();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      // Force logout even if API call fails
      AuthService.clearAuth();
      window.location.href = "/";
    }
  };

  return (
    <aside className="w-64 bg-primary-dark text-white min-h-screen flex flex-col">
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-8">{getPortalTitle()}</h2>
        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center py-2 px-3 rounded transition-colors ${
                    isActive
                      ? "bg-accent-green text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Logout Button */}
      <div className="p-6 border-t border-gray-700">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-gray-700 hover:text-white"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
