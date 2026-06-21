"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Field Validation States (Inline Custom Notifications - No Native Tooltips)
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Dynamic Browser Tab Title Management
  useEffect(() => {
    document.title = "StudyNook – Login";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset Verification Targets
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email field is required";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password field is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setErrors({ email: "", password: "" });
    setLoading(true);

    try {
      const { data, error: authError } = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password,
      });

      if (authError) {
        // Formulated via top-right toast messaging context as strictly regulated
        toast.error(authError.message || "Invalid email or password");
      } else {
        toast.success("Welcome back! Redirecting to dashboard...");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Failed to initialize Google login.");
      setGoogleLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full px-4 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8 flex items-center justify-center py-20">
      <section className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Side Branding - Desktop Banner */}
          <div className="relative hidden min-h-155 overflow-hidden bg-[#006B4F] p-10 text-white dark:bg-[#0b1b3a] lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00D19A]/20 blur-3xl" />

            <div className="relative z-10">
              <Link href="/" className="flex w-fit items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
                  📖
                </div>
                <span className="font-serif text-3xl font-semibold">
                  StudyNook
                </span>
              </Link>

              <div className="mt-20 max-w-md">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                  Smart Study Space
                </span>

                {/* Resized Title Elements maintaining consistent standard alignment rules */}
                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  Manage your study rooms with confidence.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/75">
                  Login to manage bookings, explore available rooms, and keep
                  your study sessions organized in one clean dashboard.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-2xl font-black">24/7</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Access
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-2xl font-black">Easy</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Booking
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-2xl font-black">Safe</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Rooms
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form (80% Transparent White / Dark Blue Pane) */}
          <div className="flex min-h-155 items-center justify-center bg-white/80 dark:bg-[#0f234f]/80 px-5 py-8 sm:px-8 lg:px-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:hidden">
                <Link
                  href="/"
                  className="mx-auto mb-5 flex w-fit items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006B4F] text-2xl shadow-lg dark:bg-[#F6F0E4]">
                    📖
                  </div>
                  <span className="font-serif text-3xl font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
                    StudyNook
                  </span>
                </Link>
              </div>

              <div className="mb-6 text-center lg:text-left">
                <span className="inline-flex rounded-full border border-[#006B4F]/15 bg-[#006B4F]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#006B4F] dark:border-[#F6F0E4]/10 dark:bg-[#F6F0E4]/5 dark:text-[#00D19A]">
                  Login
                </span>

                {/* Resized Form Primary Titles */}
                <h1 className="mt-4 text-2xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-3xl">
                  Login to your account
                </h1>

                <p className="mt-2 text-xs leading-5 text-[#5f5a50] dark:text-[#F6F0E4]/70 sm:text-sm">
                  Access your bookings, saved rooms, and study space dashboard.
                </p>
              </div>

              {/* Form container configuration targeting manual pipeline submission mapping */}
              <form onSubmit={handleLogin} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className={`w-full rounded-2xl border bg-white/65 px-5 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:bg-white/90 focus:ring-4 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500/50"
                        : "border-[#006B4F]/20 focus:border-[#006B4F] focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 pl-1 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <span>⚠️</span> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-extrabold text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Password Input container */}
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className={`w-full rounded-2xl border bg-white/65 pl-5 pr-12 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:bg-white/90 focus:ring-4 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 ${
                        errors.password
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500/50"
                          : "border-[#006B4F]/20 focus:border-[#006B4F] focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f5a50] hover:text-[#006B4F] dark:text-[#F6F0E4]/60 dark:hover:text-[#00D19A] transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }>
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1.5 pl-1 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <span>⚠️</span> {errors.password}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#006B4F]/30 accent-[#006B4F]"
                    />
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || googleLoading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-0.5 hover:bg-[#004f3b] hover:shadow-xl hover:shadow-[#006B4F]/25 dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]">
                  <span className="relative z-10">
                    {loading ? "Logging in..." : "Login"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
                </button>
              </form>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#5f5a50] dark:text-[#F6F0E4]/55">
                  Or
                </span>
                <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
              </div>

              {/* Google Social Login Button */}
              <button
                type="button"
                disabled={loading || googleLoading}
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-3.5 text-sm font-black text-[#1f1b14] shadow-sm backdrop-blur-md transition duration-300 disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white hover:shadow-lg dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm font-sans text-xs">
                  G
                </span>
                {googleLoading ? "Connecting..." : "Continue with Google"}
              </button>

              <p className="mt-6 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-black text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
