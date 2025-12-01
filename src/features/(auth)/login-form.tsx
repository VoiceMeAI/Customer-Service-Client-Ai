"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { loginSchema, type LoginFormData } from "./login-schema";

export function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (field: keyof LoginFormData, value: string | boolean) => {
    const result = loginSchema.shape[field].safeParse(value);
    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [field]: result.error.issues[0].message,
      }));
      return false;
    }
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
    return true;
  };

  const handleChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setServerError(null);
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleBlur = (field: keyof LoginFormData) => {
    validateField(field, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate all fields
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LoginFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Simulate invalid credentials for demo
      if (formData.email !== "agent@csa.com" || formData.password !== "password123") {
        setServerError("Invalid email or password. Please try again.");
        setIsLoading(false);
        return;
      }

      // Success - redirect to dashboard
      window.location.href = "/";
    } catch {
      setServerError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Server Error */}
      {serverError && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400">
          <AlertCircle className="size-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Authentication failed</p>
            <p className="mt-1 text-rose-600/80 dark:text-rose-400/80">
              {serverError}
            </p>
          </div>
        </div>
      )}

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="agent@company.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            disabled={isLoading}
            className={cn(
              "pl-10 h-11",
              errors.email && "border-rose-500 focus-visible:ring-rose-500"
            )}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-rose-500 flex items-center gap-1.5">
            <AlertCircle className="size-3.5" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <button
            type="button"
            className="text-xs text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            disabled={isLoading}
            className={cn(
              "pl-10 pr-10 h-11",
              errors.password && "border-rose-500 focus-visible:ring-rose-500"
            )}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-rose-500 flex items-center gap-1.5">
            <AlertCircle className="size-3.5" />
            {errors.password}
          </p>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="rememberMe"
          checked={formData.rememberMe}
          onCheckedChange={(checked) =>
            handleChange("rememberMe", checked as boolean)
          }
          disabled={isLoading}
        />
        <Label
          htmlFor="rememberMe"
          className="text-sm text-muted-foreground cursor-pointer"
        >
          Keep me signed in for 30 days
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium shadow-lg shadow-emerald-500/25 transition-all duration-200"
      >
        {isLoading ? (
          <>
            <Loader2 className="size-4 mr-2 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign in to Dashboard
            <ArrowRight className="size-4 ml-2" />
          </>
        )}
      </Button>

      {/* Demo Credentials */}
      <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
        <p className="text-xs font-medium text-muted-foreground mb-2">
          Demo Credentials
        </p>
        <div className="space-y-1 text-xs text-muted-foreground font-mono">
          <p>
            Email: <span className="text-foreground">agent@csa.com</span>
          </p>
          <p>
            Password: <span className="text-foreground">password123</span>
          </p>
        </div>
      </div>
    </form>
  );
}

