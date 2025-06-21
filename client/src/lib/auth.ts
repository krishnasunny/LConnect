import { apiRequest } from "./queryClient";

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export class AuthService {
  private static TOKEN_KEY = "letspart_token";
  private static USER_KEY = "letspart_user";

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static getUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  static setAuth(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static clearAuth(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static isAuthenticated(): boolean {
    return !!this.getToken();
  }

  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await apiRequest("POST", "/api/auth/login", {
      email,
      password,
    });
    const data = await response.json();
    this.setAuth(data.token, data.user);
    return data;
  }

  static async signup(userData: {
    email: string;
    password: string;
    fullName: string;
    role: string;
  }): Promise<AuthResponse> {
    const response = await apiRequest("POST", "/api/auth/signup", userData);
    const data = await response.json();
    this.setAuth(data.token, data.user);
    return data;
  }

  static async logout(): Promise<void> {
    this.clearAuth();
  }

  static getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}
