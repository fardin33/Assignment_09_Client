// "use client";

// import Link from "next/link";

// const LoginPage = () => {
//   return (
//     <main className="relative min-h-screen overflow-hidden  px-4 py-1 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8">
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#006B4F]/20 blur-3xl sm:h-96 sm:w-96" />
//       <div className="pointer-events-none absolute -right-28 top-1/4 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl sm:h-96 sm:w-96" />
//       <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D19A]/10 blur-3xl sm:h-130 sm:w-130" />

//       <section className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center justify-center">
//         <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 bg-white/45 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/35 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Left Branding Section */}
//           <div className="relative hidden min-h-155 overflow-hidden bg-[#006B4F] p-10 text-white dark:bg-[#0b1b3a] lg:flex lg:flex-col lg:justify-between">
//             <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//             <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00D19A]/20 blur-3xl" />

//             <div className="relative z-10">
//               <Link href="/" className="flex w-fit items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
//                   📖
//                 </div>

//                 <span className="font-serif text-3xl font-semibold">
//                   StudyNook
//                 </span>
//               </Link>

//               <div className="mt-20 max-w-md">
//                 <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
//                   Smart Study Space
//                 </span>

//                 <h2 className="mt-6 text-5xl font-black leading-tight">
//                   Manage your study rooms with confidence.
//                 </h2>

//                 <p className="mt-5 text-base leading-7 text-white/75">
//                   Login to manage bookings, explore available rooms, and keep
//                   your study sessions organized in one clean dashboard.
//                 </p>
//               </div>
//             </div>

//             <div className="relative z-10 grid grid-cols-3 gap-4">
//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">24/7</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Access
//                 </p>
//               </div>

//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">Easy</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Booking
//                 </p>
//               </div>

//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">Safe</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Rooms
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Login Section */}
//           <div className="flex min-h-155 items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
//             <div className="w-full max-w-md">
//               {/* Mobile Logo */}
//               <div className="mb-8 text-center lg:hidden">
//                 <Link
//                   href="/"
//                   className="mx-auto mb-5 flex w-fit items-center gap-2"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006B4F] text-2xl shadow-lg dark:bg-[#F6F0E4]">
//                     📖
//                   </div>

//                   <span className="font-serif text-3xl font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
//                     StudyNook
//                   </span>
//                 </Link>
//               </div>

//               <div className="mb-8 text-center lg:text-left">
//                 <span className="inline-flex rounded-full border border-[#006B4F]/15 bg-[#006B4F]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#006B4F] dark:border-[#F6F0E4]/10 dark:bg-[#F6F0E4]/5 dark:text-[#00D19A]">
//                   Welcome Back
//                 </span>

//                 <h1 className="mt-5 text-3xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-4xl">
//                   Login to your account
//                 </h1>

//                 <p className="mt-3 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/70 sm:text-base">
//                   Access your bookings, saved rooms, and study space dashboard.
//                 </p>
//               </div>

//               <form className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
//                   >
//                     Email address
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     autoComplete="email"
//                     className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-4">
//                     <label
//                       htmlFor="password"
//                       className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
//                     >
//                       Password
//                     </label>

//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-extrabold text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

//                   <input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between gap-4">
//                   <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-[#006B4F]/30 accent-[#006B4F]"
//                     />
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="button"
//                   className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#004f3b] hover:shadow-xl hover:shadow-[#006B4F]/25 dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]"
//                 >
//                   <span className="relative z-10">Login</span>
//                   <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
//                 </button>
//               </form>

//               <div className="my-7 flex items-center gap-3">
//                 <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
//                 <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#5f5a50] dark:text-[#F6F0E4]/55">
//                   Or
//                 </span>
//                 <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
//               </div>

//               <button
//   type="button"
//   className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-black text-[#1f1b14] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white hover:shadow-lg dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70"
// >
//   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
//     <svg
//       className="h-4 w-4"
//       viewBox="0 0 48 48"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         fill="#FFC107"
//         d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
//       />
//       <path
//         fill="#FF3D00"
//         d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
//       />
//       <path
//         fill="#4CAF50"
//         d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
//       />
//       <path
//         fill="#1976D2"
//         d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
//       />
//       </svg>
//      </span>

//       Continue with Google
//      </button>

//               <p className="mt-8 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-black text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
//                 >
//                   Create account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;


// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const router = useRouter();

//   const handleLogin = () => {
//     const demoUser = {
//       displayName: "Demo User",
//       email: "demo@gmail.com",
//       photoURL: "/default-user.png",
//     };

//     localStorage.setItem("studyNookUser", JSON.stringify(demoUser));
//     localStorage.setItem("user", JSON.stringify(demoUser));
//     localStorage.setItem("token", "demo-token");

//     router.push("/");
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden  px-4 py-1 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8">
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#006B4F]/20 blur-3xl sm:h-96 sm:w-96" />
//       <div className="pointer-events-none absolute -right-28 top-1/4 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl sm:h-96 sm:w-96" />
//       <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D19A]/10 blur-3xl sm:h-130 sm:w-130" />

//       <section className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center justify-center">
//         <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 bg-white/45 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/35 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Left Branding Section */}
//           <div className="relative hidden min-h-155 overflow-hidden bg-[#006B4F] p-10 text-white dark:bg-[#0b1b3a] lg:flex lg:flex-col lg:justify-between">
//             <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//             <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00D19A]/20 blur-3xl" />

//             <div className="relative z-10">
//               <Link href="/" className="flex w-fit items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
//                   📖
//                 </div>

//                 <span className="font-serif text-3xl font-semibold">
//                   StudyNook
//                 </span>
//               </Link>

//               <div className="mt-20 max-w-md">
//                 <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
//                   Smart Study Space
//                 </span>

//                 <h2 className="mt-6 text-5xl font-black leading-tight">
//                   Manage your study rooms with confidence.
//                 </h2>

//                 <p className="mt-5 text-base leading-7 text-white/75">
//                   Login to manage bookings, explore available rooms, and keep
//                   your study sessions organized in one clean dashboard.
//                 </p>
//               </div>
//             </div>

//             <div className="relative z-10 grid grid-cols-3 gap-4">
//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">24/7</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Access
//                 </p>
//               </div>

//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">Easy</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Booking
//                 </p>
//               </div>

//               <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                 <p className="text-3xl font-black">Safe</p>
//                 <p className="mt-1 text-xs font-semibold text-white/65">
//                   Rooms
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Login Section */}
//           <div className="flex min-h-155 items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
//             <div className="w-full max-w-md">
//               {/* Mobile Logo */}
//               <div className="mb-8 text-center lg:hidden">
//                 <Link
//                   href="/"
//                   className="mx-auto mb-5 flex w-fit items-center gap-2"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006B4F] text-2xl shadow-lg dark:bg-[#F6F0E4]">
//                     📖
//                   </div>

//                   <span className="font-serif text-3xl font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
//                     StudyNook
//                   </span>
//                 </Link>
//               </div>

//               <div className="mb-8 text-center lg:text-left">
//                 <span className="inline-flex rounded-full border border-[#006B4F]/15 bg-[#006B4F]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#006B4F] dark:border-[#F6F0E4]/10 dark:bg-[#F6F0E4]/5 dark:text-[#00D19A]">
//                   Welcome Back
//                 </span>

//                 <h1 className="mt-5 text-3xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-4xl">
//                   Login to your account
//                 </h1>

//                 <p className="mt-3 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/70 sm:text-base">
//                   Access your bookings, saved rooms, and study space dashboard.
//                 </p>
//               </div>

//               <form className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
//                   >
//                     Email address
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     autoComplete="email"
//                     className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-4">
//                     <label
//                       htmlFor="password"
//                       className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
//                     >
//                       Password
//                     </label>

//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-extrabold text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

//                   <input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between gap-4">
//                   <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-[#006B4F]/30 accent-[#006B4F]"
//                     />
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleLogin}
//                   className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#004f3b] hover:shadow-xl hover:shadow-[#006B4F]/25 dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]"
//                 >
//                   <span className="relative z-10">Login</span>
//                   <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
//                 </button>
//               </form>

//               <div className="my-7 flex items-center gap-3">
//                 <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
//                 <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#5f5a50] dark:text-[#F6F0E4]/55">
//                   Or
//                 </span>
//                 <div className="h-px flex-1 bg-[#006B4F]/15 dark:bg-[#F6F0E4]/15" />
//               </div>

//               <button
//                 type="button"
//                 className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-black text-[#1f1b14] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white hover:shadow-lg dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70"
//               >
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 48 48"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fill="#FFC107"
//                       d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
//                     />
//                     <path
//                       fill="#FF3D00"
//                       d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
//                     />
//                     <path
//                       fill="#4CAF50"
//                       d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
//                     />
//                     <path
//                       fill="#1976D2"
//                       d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
//                     />
//                   </svg>
//                 </span>

//                 Continue with Google
//               </button>

//               <p className="mt-8 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-black text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
//                 >
//                   Create account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;




"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const AUTH_CHANGE_EVENT = "auth-change";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    const demoUser = {
      displayName: "Demo User",
      email: "demo@gmail.com",
      photoURL: "/default-user.png",
    };

    localStorage.setItem("studyNookUser", JSON.stringify(demoUser));
    localStorage.setItem("user", JSON.stringify(demoUser));
    localStorage.setItem("token", "demo-token");

    // Navbar ke instantly notify korbe
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));

    router.push("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-1 text-[#1f1b14] dark:bg-[#07111f] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#006B4F]/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-28 top-1/4 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D19A]/10 blur-3xl sm:h-130 sm:w-130" />

      <section className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#006B4F]/15 bg-white/45 shadow-2xl backdrop-blur-2xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/35 lg:grid-cols-[1.05fr_0.95fr]">
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

          <div className="flex min-h-155 items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:hidden">
                <Link
                  href="/"
                  className="mx-auto mb-5 flex w-fit items-center gap-2"
                >
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
                  Welcome Back
                </span>

                <h1 className="mt-5 text-3xl font-black tracking-tight text-[#1f1b14] dark:text-[#F6F0E4] sm:text-4xl">
                  Login to your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/70 sm:text-base">
                  Access your bookings, saved rooms, and study space dashboard.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f5a50] dark:text-[#F6F0E4]/70"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-extrabold text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-semibold text-[#1f1b14] outline-none backdrop-blur-md transition placeholder:text-[#5f5a50]/50 focus:border-[#006B4F] focus:bg-white/90 focus:ring-4 focus:ring-[#006B4F]/10 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/40 dark:focus:border-[#00D19A] dark:focus:ring-[#00D19A]/10"
                  />
                </div>

                <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#006B4F]/30 accent-[#006B4F]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#004f3b] hover:shadow-xl hover:shadow-[#006B4F]/25 dark:bg-[#00D19A] dark:text-[#07111f] dark:hover:bg-[#F6F0E4]"
                >
                  <span className="relative z-10">Login</span>
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

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#006B4F]/20 bg-white/65 px-5 py-4 text-sm font-black text-[#1f1b14] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#006B4F]/40 hover:bg-white hover:shadow-lg dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/45 dark:text-[#F6F0E4] dark:hover:bg-[#07111f]/70"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                  G
                </span>
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-black text-[#006B4F] transition hover:text-black hover:underline dark:text-[#00D19A] dark:hover:text-[#F6F0E4]"
                >
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