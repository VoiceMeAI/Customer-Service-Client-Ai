import { LoginForm } from "@/features/(auth)/login-form";
import { Headphones } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="space-y-8">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
        <div className="size-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
          <Headphones className="size-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">CSA Portal</span>
      </div>

      {/* Header */}
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Welcome back
        </h1>
        <p className="text-muted-foreground">
          Sign in to your agent account to continue
        </p>
      </div>

      {/* Form */}
      <LoginForm />

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground">
        Need help?{" "}
        <a
          href="#"
          className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
        >
          Contact IT Support
        </a>
      </p>
    </div>
  );
}

