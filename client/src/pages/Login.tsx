import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "wouter";
import { AuthService } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { user } = await AuthService.login(email, password);
      toast({
        title: "Login successful",
        description: `Welcome back, ${user.fullName}!`,
      });
      
      // Redirect based on user role
      if (user.role === "admin") {
        setLocation("/admin/dashboard");
      } else if (user.role === "client") {
        setLocation("/client/dashboard");
      } else if (user.role === "lawyer") {
        setLocation("/lawyer/dashboard");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="pb-6">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <X className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-dark hover:bg-gray-800 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "LOGIN"}
              </Button>
              <div className="text-center">
                <Link href="#" className="text-accent-green hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-accent-green hover:underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
