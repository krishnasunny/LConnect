import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export function Header({ onLoginClick, onSignupClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuthenticated = AuthService.isAuthenticated();

  const handleLogout = () => {
    AuthService.logout();
    window.location.href = "/";
  };

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="text-xl font-bold tracking-wider">
            <Link href="/" className="hover:text-accent-green transition-colors">
              LETSPART
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent-green transition-colors font-medium">
              HOME
            </Link>
            <Link href="/about" className="hover:text-accent-green transition-colors font-medium">
              ABOUT
            </Link>
            <Link href="/lawyers" className="hover:text-accent-green transition-colors font-medium">
              LAWYERS
            </Link>
            <Link href="/testimonials" className="hover:text-accent-green transition-colors font-medium">
              TESTIMONIALS
            </Link>
            <Link href="/contact" className="hover:text-accent-green transition-colors font-medium">
              CONTACT
            </Link>
            
            {!isAuthenticated ? (
              <div className="flex items-center space-x-4 ml-4">
                <Button
                  variant="ghost"
                  onClick={onLoginClick}
                  className="text-white hover:text-accent-green"
                >
                  LOGIN
                </Button>
                <Button
                  onClick={onSignupClick}
                  className="bg-accent-green hover:bg-green-700 text-white"
                >
                  SIGNUP
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-4">
                <Link href="/dashboard" className="hover:text-accent-green transition-colors font-medium">
                  DASHBOARD
                </Link>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="text-white hover:text-accent-green"
                >
                  LOGOUT
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-accent-green transition-colors font-medium">
                HOME
              </Link>
              <Link href="/about" className="hover:text-accent-green transition-colors font-medium">
                ABOUT
              </Link>
              <Link href="/lawyers" className="hover:text-accent-green transition-colors font-medium">
                LAWYERS
              </Link>
              <Link href="/testimonials" className="hover:text-accent-green transition-colors font-medium">
                TESTIMONIALS
              </Link>
              <Link href="/contact" className="hover:text-accent-green transition-colors font-medium">
                CONTACT
              </Link>
              
              {!isAuthenticated ? (
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant="ghost"
                    onClick={onLoginClick}
                    className="text-left text-white hover:text-accent-green justify-start"
                  >
                    LOGIN
                  </Button>
                  <Button
                    onClick={onSignupClick}
                    className="bg-accent-green hover:bg-green-700 text-white justify-start"
                  >
                    SIGNUP
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link href="/dashboard" className="hover:text-accent-green transition-colors font-medium">
                    DASHBOARD
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="text-left text-white hover:text-accent-green justify-start"
                  >
                    LOGOUT
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
