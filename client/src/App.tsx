// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { AuthService } from "./lib/auth";

// // Pages
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Signup from "@/pages/Signup";
// import AdminDashboard from "@/pages/admin/Dashboard";
// import AdminLawyers from "@/pages/admin/Lawyers";
// import AdminSubscriptions from "@/pages/admin/Subscriptions";
// import ClientDashboard from "@/pages/client/Dashboard";
// import ClientProfile from "@/pages/client/Profile";
// import LawyerDashboard from "@/pages/lawyer/Dashboard";
// import LawyerProfile from "@/pages/lawyer/Profile";
// import NotFound from "@/pages/not-found";

// // Protected Route Component
// function ProtectedRoute({ 
//   children, 
//   allowedRoles 
// }: { 
//   children: React.ReactNode; 
//   allowedRoles: string[] 
// }) {
//   const user = AuthService.getUser();
  
//   if (!AuthService.isAuthenticated() || !user) {
//     return <Login />;
//   }
  
//   if (!allowedRoles.includes(user.role)) {
//     return <NotFound />;
//   }
  
//   return <>{children}</>;
// }

// function Router() {
//   return (
//     <Switch>
//       {/* Public Routes */}
//       <Route path="/" component={Home} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
      
//       {/* Admin Routes */}
//       <Route path="/admin/dashboard">
//         <ProtectedRoute allowedRoles={["admin"]}>
//           <AdminDashboard />
//         </ProtectedRoute>
//       </Route>
//       <Route path="/admin/lawyers">
//         <ProtectedRoute allowedRoles={["admin"]}>
//           <AdminLawyers />
//         </ProtectedRoute>
//       </Route>
//       <Route path="/admin/subscriptions">
//         <ProtectedRoute allowedRoles={["admin"]}>
//           <AdminSubscriptions />
//         </ProtectedRoute>
//       </Route>
      
//       {/* Client Routes */}
//       <Route path="/client/dashboard">
//         <ProtectedRoute allowedRoles={["client"]}>
//           <ClientDashboard />
//         </ProtectedRoute>
//       </Route>
//       <Route path="/client/profile">
//         <ProtectedRoute allowedRoles={["client"]}>
//           <ClientProfile />
//         </ProtectedRoute>
//       </Route>
      
//       {/* Lawyer Routes */}
//       <Route path="/lawyer/dashboard">
//         <ProtectedRoute allowedRoles={["lawyer"]}>
//           <LawyerDashboard />
//         </ProtectedRoute>
//       </Route>
//       <Route path="/lawyer/profile">
//         <ProtectedRoute allowedRoles={["lawyer"]}>
//           <LawyerProfile />
//         </ProtectedRoute>
//       </Route>
      
//       {/* Dashboard Redirect */}
//       <Route path="/dashboard">
//         {(() => {
//           const user = AuthService.getUser();
//           if (!user) return <Login />;
          
//           if (user.role === "admin") {
//             return <AdminDashboard />;
//           } else if (user.role === "client") {
//             return <ClientDashboard />;
//           } else if (user.role === "lawyer") {
//             return <LawyerDashboard />;
//           }
          
//           return <NotFound />;
//         })()}
//       </Route>
      
//       {/* Fallback to 404 */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <div className="min-h-screen bg-background">
//           <Toaster />
//           <Router />
//         </div>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;



// import { Switch, Route, useLocation } from "wouter";
// import { useEffect } from "react";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { AuthService } from "./lib/auth";

// // Pages
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Signup from "@/pages/Signup";
// import AdminDashboard from "@/pages/admin/Dashboard";
// import AdminLawyers from "@/pages/admin/Lawyers";
// import AdminSubscriptions from "@/pages/admin/Subscriptions";
// import ClientDashboard from "@/pages/client/Dashboard";
// import ClientProfile from "@/pages/client/Profile";
// import LawyerDashboard from "@/pages/lawyer/Dashboard";
// import LawyerProfile from "@/pages/lawyer/Profile";
// import NotFound from "@/pages/not-found";

// // Route Change Notifier Component
// function RouteChangeNotifier() {
//   const [location] = useLocation();
  
//   useEffect(() => {
//     // Notify parent window of route change
//     if (window.parent !== window) {
//       window.parent.postMessage({
//         type: 'ROUTE_CHANGE',
//         path: location
//       }, '*');
//     }
//   }, [location]);
  
//   return null;
// }

// // Auth Change Notifier Component
// function AuthChangeNotifier() {
//   useEffect(() => {
//     // Listen for auth changes and notify parent
//     const handleAuthChange = () => {
//       const user = AuthService.getUser();
//       if (window.parent !== window) {
//         if (user) {
//           window.parent.postMessage({
//             type: 'AUTH_SUCCESS',
//             path: `/${user.role}/dashboard`,
//             user: user
//           }, '*');
//         } else {
//           window.parent.postMessage({
//             type: 'AUTH_LOGOUT',
//             path: '/login'
//           }, '*');
//         }
//       }
//     };

//     // You can call this when auth state changes
//     // For now, we'll just set up the listener
//     window.addEventListener('authChange', handleAuthChange);
    
//     return () => {
//       window.removeEventListener('authChange', handleAuthChange);
//     };
//   }, []);
  
//   return null;
// }

// // Protected Route Component
// function ProtectedRoute({ 
//   children, 
//   allowedRoles 
// }: { 
//   children: React.ReactNode; 
//   allowedRoles: string[] 
// }) {
//   const user = AuthService.getUser();
  
//   if (!AuthService.isAuthenticated() || !user) {
//     return <Login />;
//   }
  
//   if (!allowedRoles.includes(user.role)) {
//     return <NotFound />;
//   }
  
//   return <>{children}</>;
// }

// function Router() {
//   return (
//     <>
//       <RouteChangeNotifier />
//       <AuthChangeNotifier />
//       <Switch>
//         {/* Public Routes */}
//         <Route path="/" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
        
//         {/* Admin Routes */}
//         <Route path="/admin/dashboard">
//           <ProtectedRoute allowedRoles={["admin"]}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         </Route>
//         <Route path="/admin/lawyers">
//           <ProtectedRoute allowedRoles={["admin"]}>
//             <AdminLawyers />
//           </ProtectedRoute>
//         </Route>
//         <Route path="/admin/subscriptions">
//           <ProtectedRoute allowedRoles={["admin"]}>
//             <AdminSubscriptions />
//           </ProtectedRoute>
//         </Route>
        
//         {/* Client Routes */}
//         <Route path="/client/dashboard">
//           <ProtectedRoute allowedRoles={["client"]}>
//             <ClientDashboard />
//           </ProtectedRoute>
//         </Route>
//         <Route path="/client/profile">
//           <ProtectedRoute allowedRoles={["client"]}>
//             <ClientProfile />
//           </ProtectedRoute>
//         </Route>
        
//         {/* Lawyer Routes */}
//         <Route path="/lawyer/dashboard">
//           <ProtectedRoute allowedRoles={["lawyer"]}>
//             <LawyerDashboard />
//           </ProtectedRoute>
//         </Route>
//         <Route path="/lawyer/profile">
//           <ProtectedRoute allowedRoles={["lawyer"]}>
//             <LawyerProfile />
//           </ProtectedRoute>
//         </Route>
        
//         {/* Dashboard Redirect */}
//         <Route path="/dashboard">
//           {(() => {
//             const user = AuthService.getUser();
//             if (!user) return <Login />;
            
//             if (user.role === "admin") {
//               return <AdminDashboard />;
//             } else if (user.role === "client") {
//               return <ClientDashboard />;
//             } else if (user.role === "lawyer") {
//               return <LawyerDashboard />;
//             }
            
//             return <NotFound />;
//           })()}
//         </Route>
        
//         {/* Fallback to 404 */}
//         <Route component={NotFound} />
//       </Switch>
//     </>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <div className="min-h-screen bg-background">
//           <Toaster />
//           <Router />
//         </div>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;


import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
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
import LawyersPage from "./lawyers/page";
import LawyerProfilePage from "./lawyers/details";

// Route Change Notifier Component
function RouteChangeNotifier() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Notify parent window of route change
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'ROUTE_CHANGE',
        path: location
      }, '*');
    }
  }, [location]);
  
  return null;
}

// Auth Change Notifier Component
function AuthChangeNotifier() {
  useEffect(() => {
    // Listen for auth changes and notify parent
    const handleAuthChange = () => {
      const user = AuthService.getUser();
      if (window.parent !== window) {
        if (user) {
          window.parent.postMessage({
            type: 'AUTH_SUCCESS',
            path: `/${user.role}/dashboard`,
            user: user
          }, '*');
        } else {
          window.parent.postMessage({
            type: 'AUTH_LOGOUT',
            path: '/login'
          }, '*');
        }
      }
    };

    // You can call this when auth state changes
    // For now, we'll just set up the listener
    window.addEventListener('authChange', handleAuthChange);
    
    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);
  
  return null;
}

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

// Navigation Message Handler Component
function NavigationHandler() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleMessage = (event:any) => {
      // Accept messages from parent window
      if (event.source !== window.parent) return;
      
      console.log('Received message from parent:', event.data);
      
      if (event.data.type === 'NAVIGATE_TO') {
        const targetPath = event.data.path;
        console.log('Navigating to:', targetPath);
        setLocation(targetPath);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Notify parent that iframe is ready
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'IFRAME_READY'
      }, '*');
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [setLocation]);

  return null;
}

function Router() {
  return (
    <>
      <NavigationHandler />
      <RouteChangeNotifier />
      <AuthChangeNotifier />
      <Switch>
        {/* Public Routes */}
        <Route path="/" component={LawyersPage} />
        <Route path="/lawyers/:id" component={LawyerProfilePage} />
        
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
    </>
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