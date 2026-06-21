"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [imageType, setImageType] = useState("url");
  const [imageUrl, setImageUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
  const isMatched = password === confirmPassword && confirmPassword.length > 0;

  const isFormValid =
    hasMinLength && hasUppercase && hasNumber && hasSpecialChar && isMatched;

  // Converts file to Base64 to safely pass as an image string to Better Auth
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Dynamic Browser Tab Title Management
  useEffect(() => {
    document.title = "StudyNook – register";
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setError("");

    const finalImage = imageUrl.trim() !== "" ? imageUrl.trim() : undefined;

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: email.trim().toLowerCase(),
        password,
        name: name.trim(),
        image: finalImage,
      });

      if (authError) {
        setError(authError.message || "Failed to create an account.");
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

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setError("");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Failed to initialize Google signup.");
      setGoogleLoading(false);
    }
  };

  const renderRequirement = (text, isDone) => (
    <li
      className={`flex items-center gap-2 text-xs font-semibold transition-colors duration-300 ${isDone ? "text-[#006B4F] dark:text-[#00D19A]" : "text-[#5f5a50]/60 dark:text-[#F6F0E4]/40"}`}>
      <span>{isDone ? "✓" : "•"}</span>
      <span>{text}</span>
    </li>
  );

  return (
    <main className="relative min-h-screen w-full px-4 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8 flex items-center justify-center py-20">
      <section className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Form Side (80% Transparent White / Dark Blue) */}
          <div className="flex min-h-160 items-center justify-center bg-white/80 dark:bg-[#0f234f]/80 px-5 py-8 sm:px-8 lg:px-12">
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
                  Create Account
                </span>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-4xl">
                  Join StudyNook today
                </h1>
              </div>

              {error && (
                <div className="mb-4 rounded-2xl bg-red-500/10 p-4 text-sm font-semibold text-red-600 dark:bg-red-500/15 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition focus:border-[#006B4F] focus:bg-white/90 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:focus:border-[#00D19A]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition focus:border-[#006B4F] focus:bg-white/90 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:focus:border-[#00D19A]"
                  />
                </div>

                {/* Optional Profile Image Selection */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                      Profile Image{" "}
                      <span className="text-[10px] font-normal lowercase tracking-normal text-gray-400">
                        (optional)
                      </span>
                    </label>

                    <div className="flex rounded-xl bg-[#006B4F]/5 p-1 backdrop-blur-md dark:bg-[#F6F0E4]/5">
                      <button
                        type="button"
                        onClick={() => {
                          setImageType("url");
                          setImageUrl("");
                          setFileName("");
                        }}
                        className={`rounded-lg px-3 py-1 text-xs font-bold transition-all duration-300 ${
                          imageType === "url"
                            ? "bg-[#006B4F] text-white shadow-md dark:bg-[#00D19A] dark:text-[#07111f]"
                            : "text-[#5f5a50]/70 hover:text-[#1f1b14] dark:text-[#F6F0E4]/50 dark:hover:text-[#F6F0E4]"
                        }`}>
                        URL
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setImageType("file");
                          setImageUrl("");
                        }}
                        className={`rounded-lg px-3 py-1 text-xs font-bold transition-all duration-300 ${
                          imageType === "file"
                            ? "bg-[#006B4F] text-white shadow-md dark:bg-[#00D19A] dark:text-[#07111f]"
                            : "text-[#5f5a50]/70 hover:text-[#1f1b14] dark:text-[#F6F0E4]/50 dark:hover:text-[#F6F0E4]"
                        }`}>
                        File
                      </button>
                    </div>
                  </div>

                  {imageType === "url" ? (
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Paste image link (e.g., https://example.com/pic.jpg)"
                      className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition focus:border-[#006B4F] focus:bg-white/90 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:focus:border-[#00D19A]"
                    />
                  ) : (
                    <div className="relative flex items-center justify-between rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-3.5 text-sm font-semibold text-[#1f1b14] backdrop-blur-md dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4]">
                      <span className="truncate text-gray-400 max-w-50">
                        {fileName || "No file selected"}
                      </span>
                      <label className="cursor-pointer rounded-xl bg-[#006B4F]/10 px-4 py-1.5 text-xs font-bold text-[#006B4F] transition hover:bg-[#006B4F]/20 dark:bg-[#00D19A]/10 dark:text-[#00D19A] dark:hover:bg-[#00D19A]/20">
                        Choose File
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 pl-5 pr-12 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition focus:border-[#006B4F] focus:bg-white/90 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:focus:border-[#00D19A]"
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

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 pl-5 pr-12 py-3.5 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition focus:border-[#006B4F] focus:bg-white/90 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:focus:border-[#00D19A]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f5a50] hover:text-[#006B4F] dark:text-[#F6F0E4]/60 dark:hover:text-[#00D19A] transition-colors"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }>
                      {showConfirmPassword ? (
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

                {/* Password Live Validation Rule UI */}
                <div className="rounded-xl border border-[#006B4F]/10 bg-white/20 p-4 dark:border-[#F6F0E4]/5 dark:bg-black/10">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#5f5a50] dark:text-[#F6F0E4]/60">
                    Password Requirements:
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {renderRequirement("At least 6 characters", hasMinLength)}
                    {renderRequirement("One uppercase letter", hasUppercase)}
                    {renderRequirement("One number (0-9)", hasNumber)}
                    {renderRequirement("Special character", hasSpecialChar)}
                    <li
                      className={`col-span-2 mt-0.5 pt-1.5 border-t border-[#006B4F]/5 dark:border-[#F6F0E4]/5 flex items-center gap-2 text-xs font-semibold transition-colors duration-300 ${isMatched ? "text-[#006B4F] dark:text-[#00D19A]" : "text-[#5f5a50]/60 dark:text-[#F6F0E4]/40"}`}>
                      <span>{isMatched ? "✓" : "•"}</span>
                      <span>Passwords match</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={loading || googleLoading || !isFormValid}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/10 transition duration-300 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:bg-[#004f3b] dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]">
                  <span className="relative z-10">
                    {loading ? "Creating Account..." : "Create Account"}
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

              <button
                type="button"
                disabled={loading || googleLoading}
                onClick={handleGoogleSignUp}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-black text-[#1f1b14] backdrop-blur-md transition duration-300 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm font-sans text-xs font-bold text-[#1f1b14]">
                  G
                </span>
                {googleLoading ? "Connecting..." : "Continue with Google"}
              </button>

              <p className="mt-6 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-black text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]">
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right Banner Side */}
          <div className="relative hidden min-h-160 overflow-hidden bg-[#006B4F] p-10 text-white dark:bg-[#0b1b3a] lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#00D19A]/20 blur-3xl" />

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
                  Start Your Journey
                </span>
                <h2 className="mt-6 text-5xl font-black leading-tight">
                  Book your perfect study room in minutes.
                </h2>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">Fast</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Signup
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">Easy</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Booking
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black">Clean</p>
                <p className="mt-1 text-xs font-semibold text-white/65">
                  Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
