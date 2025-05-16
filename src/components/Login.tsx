import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, X } from "lucide-react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsSubmitting(true);
    const success = await login(email, password);
    setIsSubmitting(false);
    if (success) navigate("/");
  };

  return (
    <>
      <Navbar />

      {/* Modal Backdrop with Blur */}
      <div className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        {/* Modal Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F4E3B2] md:bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl mx-4 md:mx-0">
          {/* Close Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground z-10"
          >
            <X size={24} />
          </button>

          {/* Left Illustration */}
          <div className="hidden md:flex items-center justify-center bg-[#fae9c2]">
            <img
              src="/src/components/images/login.svg"
              alt="Login Illustration"
              className="w-4/5 h-auto object-contain"
            />
          </div>

          {/* Form */}
          <div className="px-8 py-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-rose-900">Welcome back</h1>
              <p className="text-muted-foreground mt-2">
                Sign in to your LENT-IT account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-rose-700 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-rose-900 hover:bg-rose-800 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-rose-700 hover:underline">
                  Create an account
                </Link>
              </p>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setEmail("user@example.com");
                  setPassword("password");
                }}
              >
                Fill Demo Credentials
              </Button>
              <p className="text-xs text-foreground/50">
                For testing: user@example.com / password
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
