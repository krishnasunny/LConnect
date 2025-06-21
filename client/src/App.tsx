import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthService } from "./lib/auth";

// Pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminLawyers from "@/pages/admin/Lawyers";
import AdminSubscriptions from "@/pages/admin/Subscriptions";
import ClientDashboard from "@/pages/client/Dashboard";
import ClientProfile from "@/pages/client/Profile";
import LawyerDashboard from "@/pages/lawyer/Dashboard";
import LawyerProfile from "@/pages/lawyer/Profile";
import NotFound from "@/pages/not-found";

// Protected Route Component
function ProtectedRoute({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode; 
  allowedRoles: string[] 
}) {
  const user = AuthService.getUser();
  
  if (!AuthService.isAuthenticated() || !user) {
    return <Login />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <NotFound />;
  }
  
  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard">
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/lawyers">
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminLawyers />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/subscriptions">
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminSubscriptions />
        </ProtectedRoute>
      </Route>
      
      {/* Client Routes */}
      <Route path="/client/dashboard">
        <ProtectedRoute allowedRoles={["client"]}>
          <ClientDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/client/profile">
        <ProtectedRoute allowedRoles={["client"]}>
          <ClientProfile />
        </ProtectedRoute>
      </Route>
      
      {/* Lawyer Routes */}
      <Route path="/lawyer/dashboard">
        <ProtectedRoute allowedRoles={["lawyer"]}>
          <LawyerDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/lawyer/profile">
        <ProtectedRoute allowedRoles={["lawyer"]}>
          <LawyerProfile />
        </ProtectedRoute>
      </Route>
      
      {/* Dashboard Redirect */}
      <Route path="/dashboard">
        {(() => {
          const user = AuthService.getUser();
          if (!user) return <Login />;
          
          if (user.role === "admin") {
            return <AdminDashboard />;
          } else if (user.role === "client") {
            return <ClientDashboard />;
          } else if (user.role === "lawyer") {
            return <LawyerDashboard />;
          }
          
          return <NotFound />;
        })()}
      </Route>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
