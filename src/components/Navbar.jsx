// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// const SunIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     className="h-5 w-5"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64"
//     />
//     <circle cx="12" cy="12" r="4" />
//   </svg>
// );

// const MoonIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     className="h-5 w-5"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
//     />
//   </svg>
// );

// const Navbar = ({ user, handleLogout }) => {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       const isDark = savedTheme === "dark";

//       document.documentElement.classList.toggle("dark", isDark);

//       return isDark;
//     }

//     return false;
//   });

//   const handleThemeToggle = () => {
//     setDarkMode((prev) => {
//       const updatedMode = !prev;

//       document.documentElement.classList.toggle("dark", updatedMode);

//       localStorage.setItem("theme", updatedMode ? "dark" : "light");

//       return updatedMode;
//     });
//   };

//   const getLinkClass = (href) => {
//     const isActive =
//       href === "/" ? pathname === "/" : pathname.startsWith(href);

//     return `text-base font-bold transition ${
//       isActive
//         ? "text-[#006B4F] dark:text-[#00D19A]"
//         : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//     }`;
//   };

//   return (
//     <>
//       {/* FIXED NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 z-999 bg-transparent pt-4">
//         <nav className="relative w-11/12 mx-auto h-16 px-4 md:px-6 rounded-full border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 bg-white/10 dark:bg-[#1e3a8a]/10 backdrop-blur-xl shadow-sm flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 shrink-0">
//             <div className="w-9 h-9 rounded-full bg-[#006B4F] dark:bg-[#F6F0E4] flex items-center justify-center text-white dark:text-[#1e3a8a] font-bold">
//               📖
//             </div>

//             <span className="text-xl lg:text-2xl font-serif font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
//               StudyNook
//             </span>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-5 lg:gap-8">
//             <Link href="/" className={getLinkClass("/")}>
//               Home
//             </Link>

//             <Link href="/Rooms" className={getLinkClass("/Rooms")}>
//               Rooms
//             </Link>

//             {user && (
//               <>
//                 <Link href="/add-room" className={getLinkClass("/add-room")}>
//                   Add Room
//                 </Link>

//                 <Link
//                   href="/my-listings"
//                   className={getLinkClass("/my-listings")}
//                 >
//                   My Listings
//                 </Link>

//                 <Link
//                   href="/my-bookings"
//                   className={getLinkClass("/my-bookings")}
//                 >
//                   My Bookings
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Desktop Right */}
//           <div className="hidden md:flex items-center gap-6 relative shrink-0">
//             <button
//               onClick={handleThemeToggle}
//               className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#1e3a8a]/70 dark:text-[#F6F0E4]"
//               aria-label="Toggle theme"
//             >
//               <span
//                 className={`absolute transition-all duration-300 ${
//                   darkMode
//                     ? "scale-100 rotate-0 opacity-100"
//                     : "scale-0 -rotate-90 opacity-0"
//                 }`}
//               >
//                 <SunIcon />
//               </span>

//               <span
//                 className={`absolute transition-all duration-300 ${
//                   darkMode
//                     ? "scale-0 rotate-90 opacity-0"
//                     : "scale-100 rotate-0 opacity-100"
//                 }`}
//               >
//                 <MoonIcon />
//               </span>
//             </button>

//             {!user ? (
//               <>
//                 <Link
//                   href="/login"
//                   className={`text-sm font-semibold transition ${
//                     pathname === "/login"
//                       ? "text-[#006B4F] dark:text-[#00D19A]"
//                       : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//                   }`}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   href="/Register"
//                   className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
//                     pathname === "/Register"
//                       ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
//                       : "bg-[#006B4F] text-white hover:bg-black"
//                   }`}
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpen(!open)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 dark:bg-[#1e3a8a]/40 border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 backdrop-blur-md"
//                 >
//                   <Image
//                     src={user?.photoURL || "/default-user.png"}
//                     alt="User"
//                     width={32}
//                     height={32}
//                     className="rounded-full object-cover"
//                   />

//                   <span className="text-sm font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
//                     {user?.displayName || "User"}
//                   </span>

//                   <span>⌄</span>
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#006B4F]/25 bg-white/10 text-[#10231b] backdrop-blur-md transition-all duration-300 hover:bg-white/20 dark:border-[#F6F0E4]/25 dark:text-[#F6F0E4]"
//             aria-label="Toggle menu"
//           >
//             <span className="grid h-full w-full place-items-center text-[20px] leading-none">
//               {mobileOpen ? "×" : "☰"}
//             </span>
//           </button>
//         </nav>

//         {/* MOBILE MENU */}
//         <div
//           className={`md:hidden absolute right-[4.5%] top-24 z-999 w-[82%] max-w-sm rounded-2xl border border-[#006B4F]/20 bg-white/10 dark:bg-[#1e3a8a]/10 backdrop-blur-xl px-4 py-5 shadow-2xl transition-all duration-300 ease-out ${
//             mobileOpen
//               ? "translate-x-0 opacity-100"
//               : "translate-x-10 opacity-0 pointer-events-none"
//           }`}
//         >
//           <div className="flex flex-col gap-4 text-sm">
//             <button
//               onClick={handleThemeToggle}
//               className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 text-[#006B4F] dark:text-[#F6F0E4]"
//             >
//               {darkMode ? (
//                 <>
//                   <SunIcon /> Light Mode
//                 </>
//               ) : (
//                 <>
//                   <MoonIcon /> Dark Mode
//                 </>
//               )}
//             </button>

//             <Link
//               href="/"
//               className={getLinkClass("/")}
//               onClick={() => setMobileOpen(false)}
//             >
//               Home
//             </Link>

//             <Link
//               href="/Rooms"
//               className={getLinkClass("/Rooms")}
//               onClick={() => setMobileOpen(false)}
//             >
//               Rooms
//             </Link>

//             {user && (
//               <>
//                 <Link
//                   href="/add-room"
//                   className={getLinkClass("/add-room")}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   Add Room
//                 </Link>

//                 <Link
//                   href="/my-listings"
//                   className={getLinkClass("/my-listings")}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   My Listings
//                 </Link>

//                 <Link
//                   href="/my-bookings"
//                   className={getLinkClass("/my-bookings")}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   My Bookings
//                 </Link>
//               </>
//             )}

//             {!user ? (
//               <div className="flex w-full items-center gap-3 pt-1">
//                 <Link
//                   href="/login"
//                   className={`flex-1 rounded-full border border-[#006B4F]/25 px-4 py-2 text-center font-semibold transition ${
//                     pathname === "/login"
//                       ? "bg-[#006B4F] text-white"
//                       : "text-[#006B4F] hover:bg-[#006B4F] hover:text-white"
//                   }`}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   href="/Register"
//                   className={`flex-1 rounded-full px-4 py-2 text-center font-semibold transition duration-300 ${
//                     pathname === "/Register"
//                       ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
//                       : "bg-[#006B4F] text-white hover:bg-black"
//                   }`}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   Register
//                 </Link>
//               </div>
//             ) : (
//               <button onClick={handleLogout} className="text-left text-red-600">
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* NAVBAR SPACE FIX */}
//       <div className="h-24" />
//     </>
//   );
// };

// export default Navbar;


// "use client";

// import { useEffect, useState, useSyncExternalStore } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// const SunIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     className="h-5 w-5"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64"
//     />
//     <circle cx="12" cy="12" r="4" />
//   </svg>
// );

// const MoonIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     className="h-5 w-5"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
//     />
//   </svg>
// );

// const THEME_CHANGE_EVENT = "theme-change";

// const subscribeTheme = (callback) => {
//   window.addEventListener("storage", callback);
//   window.addEventListener(THEME_CHANGE_EVENT, callback);

//   return () => {
//     window.removeEventListener("storage", callback);
//     window.removeEventListener(THEME_CHANGE_EVENT, callback);
//   };
// };

// const getThemeSnapshot = () => {
//   return localStorage.getItem("theme") || "light";
// };

// const getServerThemeSnapshot = () => {
//   return "light";
// };

// const Navbar = ({ user, handleLogout }) => {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const theme = useSyncExternalStore(
//     subscribeTheme,
//     getThemeSnapshot,
//     getServerThemeSnapshot
//   );

//   const darkMode = theme === "dark";

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const handleThemeToggle = () => {
//     const updatedTheme = darkMode ? "light" : "dark";

//     localStorage.setItem("theme", updatedTheme);
//     window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
//   };

//   const closeMobileMenu = () => {
//     setMobileOpen(false);
//   };

//   const getLinkClass = (href) => {
//     const isActive =
//       href === "/" ? pathname === "/" : pathname.startsWith(href);

//     return `text-base font-bold transition ${
//       isActive
//         ? "text-[#006B4F] dark:text-[#00D19A]"
//         : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//     }`;
//   };

//   const privateLinks = [
//     {
//       label: "Add Room",
//       href: "/add-room",
//     },
//     {
//       label: "My Listings",
//       href: "/my-listings",
//     },
//     {
//       label: "My Bookings",
//       href: "/my-bookings",
//     },
//   ];

//   return (
//     <>
//       {/* FIXED NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 z-999 bg-transparent pt-4">
//         <nav className="relative mx-auto flex h-16 w-11/12 items-center justify-between rounded-full border border-[#006B4F]/20 bg-white/10 px-4 shadow-sm backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-[#1e3a8a]/10 md:px-6">
//           {/* Logo */}
//           <Link href="/" className="flex shrink-0 items-center gap-2">
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006B4F] font-bold text-white dark:bg-[#F6F0E4] dark:text-[#1e3a8a]">
//               📖
//             </div>

//             <span className="font-serif text-xl font-semibold text-[#1f1b14] dark:text-[#F6F0E4] lg:text-2xl">
//               StudyNook
//             </span>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden items-center gap-5 md:flex lg:gap-8">
//             <Link href="/" className={getLinkClass("/")}>
//               Home
//             </Link>

//             <Link href="/Rooms" className={getLinkClass("/Rooms")}>
//               Rooms
//             </Link>

//             {user &&
//               privateLinks.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={getLinkClass(item.href)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//           </div>

//           {/* Desktop Right */}
//           <div className="relative hidden shrink-0 items-center gap-6 md:flex">
//             <button
//               onClick={handleThemeToggle}
//               className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#1e3a8a]/70 dark:text-[#F6F0E4]"
//               aria-label="Toggle theme"
//               type="button"
//             >
//               <span
//                 className={`absolute transition-all duration-300 ${
//                   darkMode
//                     ? "scale-100 rotate-0 opacity-100"
//                     : "scale-0 -rotate-90 opacity-0"
//                 }`}
//               >
//                 <SunIcon />
//               </span>

//               <span
//                 className={`absolute transition-all duration-300 ${
//                   darkMode
//                     ? "scale-0 rotate-90 opacity-0"
//                     : "scale-100 rotate-0 opacity-100"
//                 }`}
//               >
//                 <MoonIcon />
//               </span>
//             </button>

//             {!user ? (
//               <>
//                 <Link
//                   href="/login"
//                   className={`text-sm font-semibold transition ${
//                     pathname === "/login"
//                       ? "text-[#006B4F] dark:text-[#00D19A]"
//                       : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//                   }`}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   href="/Register"
//                   className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
//                     pathname === "/Register"
//                       ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
//                       : "bg-[#006B4F] text-white hover:bg-black"
//                   }`}
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpen((prev) => !prev)}
//                   className="flex items-center gap-2 rounded-full border border-[#006B4F]/20 bg-white/15 px-3 py-2 backdrop-blur-md dark:border-[#F6F0E4]/20 dark:bg-[#1e3a8a]/40"
//                   type="button"
//                 >
//                   <Image
//                     src={user?.photoURL || "/default-user.png"}
//                     alt="User"
//                     width={32}
//                     height={32}
//                     className="rounded-full object-cover"
//                   />

//                   <span className="max-w-28 truncate text-sm font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
//                     {user?.displayName || user?.email || "User"}
//                   </span>

//                   <span className="text-[#006B4F] dark:text-[#F6F0E4]">⌄</span>
//                 </button>

//                 {open && (
//                   <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-[#006B4F]/20 bg-white/90 p-2 shadow-xl backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-[#10231b]/95">
//                     <Link
//                       href="/profile"
//                       onClick={() => setOpen(false)}
//                       className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//                     >
//                       Profile
//                     </Link>

//                     <Link
//                       href="/my-listings"
//                       onClick={() => setOpen(false)}
//                       className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//                     >
//                       My Listings
//                     </Link>

//                     <Link
//                       href="/my-bookings"
//                       onClick={() => setOpen(false)}
//                       className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
//                     >
//                       My Bookings
//                     </Link>

//                     <button
//                       onClick={() => {
//                         setOpen(false);
//                         handleLogout?.();
//                       }}
//                       className="mt-1 w-full rounded-xl px-4 py-2 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
//                       type="button"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileOpen((prev) => !prev)}
//             className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#006B4F]/25 bg-white/10 text-[#10231b] backdrop-blur-md transition-all duration-300 hover:bg-white/20 dark:border-[#F6F0E4]/25 dark:text-[#F6F0E4] md:hidden"
//             aria-label="Toggle menu"
//             type="button"
//           >
//             <span className="grid h-full w-full place-items-center text-[20px] leading-none">
//               {mobileOpen ? "×" : "☰"}
//             </span>
//           </button>
//         </nav>

//         {/* MOBILE MENU */}
//         <div
//           className={`absolute right-[4.5%] top-24 z-999 w-[82%] max-w-sm rounded-2xl border border-[#006B4F]/20 bg-white/90 px-4 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out dark:bg-[#1e3a8a]/90 md:hidden ${
//             mobileOpen
//               ? "translate-x-0 opacity-100"
//               : "pointer-events-none translate-x-10 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col gap-4 text-sm">
//             <button
//               onClick={handleThemeToggle}
//               className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 font-semibold text-[#006B4F] dark:text-[#F6F0E4]"
//               type="button"
//             >
//               {darkMode ? (
//                 <>
//                   <SunIcon /> Light Mode
//                 </>
//               ) : (
//                 <>
//                   <MoonIcon /> Dark Mode
//                 </>
//               )}
//             </button>

//             <Link
//               href="/"
//               className={getLinkClass("/")}
//               onClick={closeMobileMenu}
//             >
//               Home
//             </Link>

//             <Link
//               href="/Rooms"
//               className={getLinkClass("/Rooms")}
//               onClick={closeMobileMenu}
//             >
//               Rooms
//             </Link>

//             {user &&
//               privateLinks.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={getLinkClass(item.href)}
//                   onClick={closeMobileMenu}
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//             {!user ? (
//               <div className="flex w-full items-center gap-3 pt-1">
//                 <Link
//                   href="/login"
//                   className={`flex-1 rounded-full border border-[#006B4F]/25 px-4 py-2 text-center font-semibold transition ${
//                     pathname === "/login"
//                       ? "bg-[#006B4F] text-white"
//                       : "text-[#006B4F] hover:bg-[#006B4F] hover:text-white dark:text-[#F6F0E4]"
//                   }`}
//                   onClick={closeMobileMenu}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   href="/Register"
//                   className={`flex-1 rounded-full px-4 py-2 text-center font-semibold transition duration-300 ${
//                     pathname === "/Register"
//                       ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
//                       : "bg-[#006B4F] text-white hover:bg-black"
//                   }`}
//                   onClick={closeMobileMenu}
//                 >
//                   Register
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   closeMobileMenu();
//                   handleLogout?.();
//                 }}
//                 className="rounded-full border border-red-500/20 px-4 py-2 text-left font-semibold text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
//                 type="button"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* NAVBAR SPACE FIX */}
//       <div className="h-24" />
//     </>
//   );
// };

// export default Navbar;






"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64"
    />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
    />
  </svg>
);

const THEME_CHANGE_EVENT = "theme-change";
const AUTH_CHANGE_EVENT = "auth-change";

const subscribeTheme = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
};

const getThemeSnapshot = () => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("theme") || "light";
};

const getServerThemeSnapshot = () => "light";

const subscribeAuth = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_CHANGE_EVENT, callback);
  };
};

const getAuthSnapshot = () => {
  if (typeof window === "undefined") return "";

  return (
    localStorage.getItem("studyNookUser") ||
    localStorage.getItem("user") ||
    ""
  );
};

const getServerAuthSnapshot = () => "";

const safeParseUser = (value) => {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const Navbar = ({ user, handleLogout }) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const authSnapshot = useSyncExternalStore(
    subscribeAuth,
    getAuthSnapshot,
    getServerAuthSnapshot
  );

  const storedUser = useMemo(() => safeParseUser(authSnapshot), [authSnapshot]);

  // Parent theke user ashলে সেটাকে priority দিচ্ছি,
  // na ashলে localStorage er user use korbe.
  const currentUser = user || storedUser;

  const darkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleThemeToggle = () => {
    const updatedTheme = darkMode ? "light" : "dark";

    localStorage.setItem("theme", updatedTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const closeAllMenus = () => {
    setOpen(false);
    setMobileOpen(false);
  };

  const logoutUser = () => {
    localStorage.removeItem("studyNookUser");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));

    setOpen(false);
    setMobileOpen(false);

    handleLogout?.();
  };

  const getLinkClass = (href) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `text-base font-bold transition ${
      isActive
        ? "text-[#006B4F] dark:text-[#00D19A]"
        : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
    }`;
  };

  const privateLinks = [
    {
      label: "Add Room",
      href: "/add-room",
    },
    {
      label: "My Listing",
      href: "/my-listing",
    },
    {
      label: "My Bookings",
      href: "/my-bookings",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-999 bg-transparent pt-4">
        <nav className="relative mx-auto flex h-16 w-11/12 items-center justify-between rounded-full border border-[#006B4F]/20 bg-white/10 px-4 shadow-sm backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-[#1e3a8a]/10 md:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006B4F] font-bold text-white dark:bg-[#F6F0E4] dark:text-[#1e3a8a]">
              📖
            </div>

            <span className="font-serif text-xl font-semibold text-[#1f1b14] dark:text-[#F6F0E4] lg:text-2xl">
              StudyNook
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>

            <Link href="/Rooms" className={getLinkClass("/Rooms")}>
              Rooms
            </Link>

            {currentUser &&
              privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
          </div>

          {/* Desktop Right */}
          <div className="relative hidden shrink-0 items-center gap-6 md:flex">
            <button
              onClick={handleThemeToggle}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#1e3a8a]/70 dark:text-[#F6F0E4]"
              aria-label="Toggle theme"
              type="button"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  darkMode
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-0 -rotate-90 opacity-0"
                }`}
              >
                <SunIcon />
              </span>

              <span
                className={`absolute transition-all duration-300 ${
                  darkMode
                    ? "scale-0 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
              >
                <MoonIcon />
              </span>
            </button>

            {!currentUser ? (
              <>
                <Link
                  href="/login"
                  className={`text-sm font-semibold transition ${
                    pathname === "/login"
                      ? "text-[#006B4F] dark:text-[#00D19A]"
                      : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
                  }`}
                >
                  Login
                </Link>

                <Link
                  href="/Register"
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                    pathname === "/Register"
                      ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
                      : "bg-[#006B4F] text-white hover:bg-black"
                  }`}
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-full border border-[#006B4F]/20 bg-white/15 px-3 py-2 backdrop-blur-md dark:border-[#F6F0E4]/20 dark:bg-[#1e3a8a]/40"
                  type="button"
                >
                  <Image
                    src={currentUser?.photoURL || "/default-user.png"}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />

                  <span className="max-w-28 truncate text-sm font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
                    {currentUser?.displayName || currentUser?.email || "User"}
                  </span>

                  <span className="text-[#006B4F] dark:text-[#F6F0E4]">
                    ⌄
                  </span>
                </button>

                {open && (
                  <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-[#006B4F]/20 bg-white/90 p-2 shadow-xl backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-[#10231b]/95">
                    <Link
                      href="/profile"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
                    >
                      Profile
                    </Link>

                    <Link
                      href="/add-room"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
                    >
                      Add Room
                    </Link>

                    <Link
                      href="/my-listings"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
                    >
                      My Listings
                    </Link>

                    <Link
                      href="/my-bookings"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
                    >
                      My Bookings
                    </Link>

                    <button
                      onClick={logoutUser}
                      className="mt-1 w-full rounded-xl px-4 py-2 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                      type="button"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#006B4F]/25 bg-white/10 text-[#10231b] backdrop-blur-md transition-all duration-300 hover:bg-white/20 dark:border-[#F6F0E4]/25 dark:text-[#F6F0E4] md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <span className="grid h-full w-full place-items-center text-[20px] leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute right-[4.5%] top-24 z-999 w-[82%] max-w-sm rounded-2xl border border-[#006B4F]/20 bg-white/90 px-4 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out dark:bg-[#1e3a8a]/90 md:hidden ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-10 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-sm">
            <button
              onClick={handleThemeToggle}
              className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 font-semibold text-[#006B4F] dark:text-[#F6F0E4]"
              type="button"
            >
              {darkMode ? (
                <>
                  <SunIcon /> Light Mode
                </>
              ) : (
                <>
                  <MoonIcon /> Dark Mode
                </>
              )}
            </button>

            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/Rooms"
              className={getLinkClass("/Rooms")}
              onClick={closeMobileMenu}
            >
              Rooms
            </Link>

            {currentUser &&
              privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

            {!currentUser ? (
              <div className="flex w-full items-center gap-3 pt-1">
                <Link
                  href="/login"
                  className={`flex-1 rounded-full border border-[#006B4F]/25 px-4 py-2 text-center font-semibold transition ${
                    pathname === "/login"
                      ? "bg-[#006B4F] text-white"
                      : "text-[#006B4F] hover:bg-[#006B4F] hover:text-white dark:text-[#F6F0E4]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>

                <Link
                  href="/Register"
                  className={`flex-1 rounded-full px-4 py-2 text-center font-semibold transition duration-300 ${
                    pathname === "/Register"
                      ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]"
                      : "bg-[#006B4F] text-white hover:bg-black"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={logoutUser}
                className="rounded-full border border-red-500/20 px-4 py-2 text-left font-semibold text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                type="button"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="h-24" />
    </>
  );
};

export default Navbar;