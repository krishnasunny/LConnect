import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "wouter";
import { AuthService } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.role) {
      toast({
        title: "Please select your role",
        description: "Choose whether you're a client or lawyer",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { user } = await AuthService.signup(formData);
      toast({
        title: "Account created successfully",
        description: `Welcome, ${user.fullName}!`,
      });
      
      // Redirect based on user role
      if (user.role === "client") {
        setLocation("/client/dashboard");
      } else if (user.role === "lawyer") {
        setLocation("/lawyer/dashboard");
      }
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again",
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
              <CardTitle className="text-2xl font-bold text-gray-800">Sign Up</CardTitle>
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
                <Label className="text-sm font-medium text-gray-700 mb-2">I am a:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="client"
                      checked={formData.role === "client"}
                      onChange={() => handleRoleChange("client")}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">Client</span>
                  </Label>
                  <Label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="lawyer"
                      checked={formData.role === "lawyer"}
                      onChange={() => handleRoleChange("lawyer")}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">Lawyer</span>
                  </Label>
                </div>
              </div>
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent-green hover:bg-green-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "CREATE ACCOUNT"}
              </Button>
              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-accent-green hover:underline">
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
