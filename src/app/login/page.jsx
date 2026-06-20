"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // Better Auth
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await authClient.signIn.email({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError("");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/Home",
      });
    } catch (err) {
      setError("Failed to initialize Google login.");
      setGoogleLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-1 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#006B4F]/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-28 top-1/4 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D19A]/10 blur-3xl sm:h-130 sm:w-130" />

      <section className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 bg-white/45 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/35 lg:grid-cols-[1.05fr_0.95fr]">
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

                <h2 className="mt-6 text-5xl font-black leading-tight">
                  Manage your study rooms with confidence.
                </h2>

                <p className="mt-5 text-base leading-7 text-white/75">
                  Login to manage bookings, explore available rooms, and keep
                  your study sessions organized in one clean dashboard.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">24/7</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Access
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">Easy</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Booking
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">Safe</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Rooms
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex min-h-155 items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
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

              <div className="mb-8 text-center lg:text-left">
                <span className="inline-flex rounded-full border border-[#006B4F]/15 bg-[#006B4F]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#006B4F] dark:border-[#F6F0E4]/10 dark:bg-[#F6F0E4]/5 dark:text-[#00D19A]">
                  Login
                </span>

                <h1 className="mt-5 text-3xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-4xl">
                  Login to your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/70 sm:text-base">
                  Access your bookings, saved rooms, and study space dashboard.
                </p>
              </div>

              {/* Error Message display block */}
              {error && (
                <div className="mb-5 rounded-2xl bg-red-500/10 p-4 text-sm font-semibold text-red-600 dark:bg-red-500/15 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
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

                  {/* Password Input with Visibility Toggle */}
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 pl-5 pr-12 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
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
                </div>

                <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#006B4F]/30 accent-[#006B4F]"
                  />
                  Remember me
                </label>

                <button
                  type="submit"
                  disabled={loading || googleLoading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-0.5 hover:bg-[#004f3b] hover:shadow-xl hover:shadow-[#006B4F]/25 dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]">
                  <span className="relative z-10">
                    {loading ? "Logging in..." : "Login"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-3">
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
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-black text-[#1f1b14] shadow-sm backdrop-blur-md transition duration-300 disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white hover:shadow-lg dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm font-sans text-xs">
                  G
                </span>
                {googleLoading ? "Connecting..." : "Continue with Google"}
              </button>

              <p className="mt-8 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
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
};

export default LoginPage;
