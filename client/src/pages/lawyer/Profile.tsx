import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AuthService } from "@/lib/auth";
import { useState } from "react";

export default function LawyerProfile() {
  const user = AuthService.getUser();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: "",
    specialization: "",
    experience: "",
    bio: "",
    hourlyRate: "",
    availability: "",
    youtubeVideoUrl: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update
    console.log("Profile update:", formData);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your professional profile and availability</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
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
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select value={formData.specialization} onValueChange={(value) => handleSelectChange("specialization", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="business">Business Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="real-estate">Real Estate Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="immigration">Immigration Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 years"
                  />
                </div>
                <div>
                  <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 150"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary-dark hover:bg-gray-800 text-white">
                  Update Profile
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Professional Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bio">About You</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell clients about your background, expertise, and approach to legal practice..."
                    rows={6}
                  />
                </div>
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    placeholder="Describe your availability (e.g., Monday-Friday 9AM-5PM, Weekend emergencies available)"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="youtubeVideoUrl">Professional Introduction Video (YouTube)</Label>
                  <Input
                    id="youtubeVideoUrl"
                    name="youtubeVideoUrl"
                    value={formData.youtubeVideoUrl}
                    onChange={handleInputChange}
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Paste your YouTube video URL to showcase your professional introduction
                  </p>
                  {formData.youtubeVideoUrl && (
                    <div className="mt-3 border border-gray-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Video Preview:</p>
                      <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                        <p className="text-gray-500 text-sm">
                          YouTube video: {formData.youtubeVideoUrl.length > 50 
                            ? formData.youtubeVideoUrl.substring(0, 50) + "..." 
                            : formData.youtubeVideoUrl}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
