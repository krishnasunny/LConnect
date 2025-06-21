import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home as HomeIcon, Lightbulb, Laptop, Facebook, Twitter, Instagram } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [, setLocation] = useLocation();

  const handleLoginClick = () => {
    setLocation("/login");
  };

  const handleSignupClick = () => {
    setLocation("/signup");
  };

  return (
    <div className="min-h-screen bg-light-bg w-full">
      <Header onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wide">
              THE BEST FAMILY LAWYERS.
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-medium">
              WE DO THINGS DIFFERENTLY
            </p>
            <Button
              onClick={() => setLocation("/lawyers")}
              className="bg-primary-dark hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold tracking-wider"
            >
              FIND ONE NOW
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
              alt="Professional lawyer in suit"
              className="rounded-lg shadow-2xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Legal Services</h2>
            <p className="text-xl text-gray-600">Professional legal assistance for all your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none">
              <CardContent className="p-8 text-center">
                <HomeIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Family Law</h3>
                <p className="text-gray-600">Divorce, custody, and family legal matters handled with care</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Law</h3>
                <p className="text-gray-600">Corporate legal services and business consultation</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none">
              <CardContent className="p-8 text-center">
                <Laptop className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Online Consultation</h3>
                <p className="text-gray-600">Virtual legal meetings and document review</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Contact us for a consultation</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Your Phone Number" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={4} placeholder="Tell us about your legal needs" />
                    </div>
                    <Button type="submit" className="w-full bg-primary-dark hover:bg-gray-800 text-white">
                      SUBMIT MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">PHONE & EMAIL</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">Call us: +1-900-456-7890</p>
                      <p className="text-gray-600">info@letspart.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">OFFICE HOURS</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">LOCATION</h4>
                    <p className="text-gray-600">123 Legal Street<br />Suite 456<br />New York, NY 10001</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="border border-gray-600 inline-block px-8 py-4 mb-8">
              <h3 className="text-2xl font-bold tracking-wider">LETS PART</h3>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-8 mb-8 text-sm">
              <a href="#" className="hover:text-accent-green transition-colors">TERM OF USE</a>
              <a href="#" className="hover:text-accent-green transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-accent-green transition-colors">ABOUT US</a>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>POWERED BY <span className="text-white font-semibold">LETSPART</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
