"use client";

import { useEffect, useState, useSyncExternalStore, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2">
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
    strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
    />
  </svg>
);

const THEME_CHANGE_EVENT = "theme-change";

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

const Navbar = ({ handleLogout }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { data: session } = authClient.useSession();
  const currentUser = session?.user;

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const darkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeToggle = () => {
    const updatedTheme = darkMode ? "light" : "dark";
    localStorage.setItem("theme", updatedTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const logoutUser = async () => {
    try {
      await authClient.signOut();
      setOpen(false);
      setMobileOpen(false);
      handleLogout?.();
    } catch (error) {
      console.error("লগআউট করতে সমস্যা হয়েছে:", error);
    }
  };

  const getLinkClass = (href) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `text-base font-bold transition duration-200 ${
      isActive
        ? "text-[#006B4F] dark:text-[#00D19A]"
        : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"
    }`;
  };

  const privateLinks = [
    { label: "Add Room", href: "/add-room" },
    { label: "My Listing", href: "/my-listing" },
    { label: "My Bookings", href: "/my-bookings" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4">
        <nav className="relative mx-auto flex h-16 w-11/12 items-center justify-between rounded-full border border-[#006B4F]/20 bg-white/70 px-4 shadow-sm backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-[#07111f]/70 md:px-6">
          {/* Logo Section */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006B4F] font-bold text-white dark:bg-[#F6F0E4] dark:text-[#07111f]">
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
                  className={getLinkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
          </div>

          {/* Desktop Right (Theme & Profile/Auth Buttons) */}
          <div className="relative hidden shrink-0 items-center gap-4 md:flex">
            <button
              onClick={handleThemeToggle}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#07111f]/50 dark:text-[#F6F0E4]"
              aria-label="Toggle theme"
              type="button">
              <span
                className={`absolute transition-all duration-300 ${darkMode ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}>
                <SunIcon />
              </span>
              <span
                className={`absolute transition-all duration-300 ${darkMode ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}>
                <MoonIcon />
              </span>
            </button>

            {!currentUser ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className={`text-sm font-bold transition ${pathname === "/login" ? "text-[#006B4F] dark:text-[#00D19A]" : "text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#00D19A]"}`}>
                  Login
                </Link>

                <Link
                  href="/register"
                  className={`rounded-full px-5 py-2 text-sm font-bold transition duration-300 ${pathname === "/register" ? "bg-black text-white dark:bg-[#00D19A] dark:text-[#10231b]" : "bg-[#006B4F] text-white hover:bg-[#004f3b]"}`}>
                  Register
                </Link>
              </div>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex items-center gap-3 rounded-full border border-[#006B4F]/40 bg-white/40 p-1.5 pr-4 text-left shadow-xs backdrop-blur-md transition hover:bg-white/60 dark:border-[#F6F0E4]/30 dark:bg-[#0f234f]/40 dark:hover:bg-[#0f234f]/60"
                  type="button">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#006B4F]/10 dark:border-[#F6F0E4]/10">
                    <Image
                      src={
                        currentUser?.image ||
                        currentUser?.photoURL ||
                        "/default-user.png"
                      }
                      alt="User Profile"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center leading-tight max-w-30">
                    <span className="truncate text-xs font-black text-[#1f1b14] dark:text-[#F6F0E4]">
                      {currentUser?.name ||
                        currentUser?.displayName ||
                        "Active User"}
                    </span>
                    <span className="truncate text-[10px] font-medium text-[#5f5a50]/80 dark:text-[#F6F0E4]/60 mt-0.5">
                      {currentUser?.email || "No email synchronized"}
                    </span>
                  </div>

                  <span className="text-xs text-[#5f5a50] dark:text-[#F6F0E4]/70 pl-1">
                    ▼
                  </span>
                </button>

                {open && (
                  <div className="absolute right-0 top-16 w-52 overflow-hidden rounded-2xl border border-[#006B4F]/15 bg-white/95 p-1.5 shadow-xl backdrop-blur-xl dark:border-[#F6F0E4]/15 dark:bg-[#07111f]">
                    <Link
                      href="/profile"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-xs font-bold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:bg-[#00D19A]/10 dark:hover:text-[#00D19A]">
                      View Profile
                    </Link>

                    <div className="my-1 h-px bg-[#006B4F]/10 dark:bg-[#F6F0E4]/10" />

                    <Link
                      href="/add-room"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-xs font-bold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:bg-[#00D19A]/10 dark:hover:text-[#00D19A]">
                      Add Room
                    </Link>

                    <Link
                      href="/my-listing"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-xs font-bold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:bg-[#00D19A]/10 dark:hover:text-[#00D19A]">
                      My Listings
                    </Link>

                    <Link
                      href="/my-bookings"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-xs font-bold text-[#4f4a40] transition hover:bg-[#006B4F]/10 hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:bg-[#00D19A]/10 dark:hover:text-[#00D19A]">
                      My Bookings
                    </Link>

                    <div className="my-1 h-px bg-[#006B4F]/10 dark:bg-[#F6F0E4]/10" />

                    <button
                      onClick={logoutUser}
                      className="w-full rounded-xl px-4 py-2.5 text-left text-xs font-black text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                      type="button">
                      Logout Account
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
            type="button">
            <span className="text-xl font-bold leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile Flyout Menu */}
        <div
          className={`absolute right-[4.5%] top-20 z-50 w-[91%] max-w-sm rounded-2xl border border-[#006B4F]/20 bg-white/95 px-4 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out dark:border-[#F6F0E4]/10 dark:bg-[#07111f] md:hidden ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-10 opacity-0"
          }`}>
          <div className="flex flex-col gap-4 text-sm">
            {currentUser && (
              <div className="flex items-center gap-3 rounded-xl border border-[#006B4F]/10 bg-[#006B4F]/5 p-3 dark:border-[#F6F0E4]/10 dark:bg-[#F6F0E4]/5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={
                      currentUser?.image ||
                      currentUser?.photoURL ||
                      "/default-user.png"
                    }
                    alt="Mobile Profile Avatar"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <span className="truncate text-sm font-black text-[#1f1b14] dark:text-[#F6F0E4]">
                    {currentUser?.name ||
                      currentUser?.displayName ||
                      "Active User"}
                  </span>
                  <span className="truncate text-xs font-medium text-[#5f5a50] dark:text-[#F6F0E4]/60">
                    {currentUser?.email}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={handleThemeToggle}
              className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 text-xs font-bold text-[#006B4F] dark:text-[#F6F0E4]"
              type="button">
              {darkMode ? <> Light Mode</> : <> Dark Mode</>}
            </button>

            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="/Rooms"
              className={getLinkClass("/Rooms")}
              onClick={closeMobileMenu}>
              Rooms
            </Link>

            {currentUser &&
              privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                  onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ))}

            {!currentUser ? (
              <div className="flex w-full items-center gap-3 pt-2 border-t border-[#006B4F]/10 dark:border-[#F6F0E4]/10">
                <Link
                  href="/login"
                  className={`flex-1 rounded-full border border-[#006B4F]/25 py-2.5 text-center text-xs font-bold transition ${pathname === "/login" ? "bg-[#006B4F] text-white" : "text-[#006B4F] dark:text-[#F6F0E4]"}`}
                  onClick={closeMobileMenu}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex-1 rounded-full bg-[#006B4F] py-2.5 text-center text-xs font-bold text-white hover:bg-[#004f3b]"
                  onClick={closeMobileMenu}>
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={logoutUser}
                className="w-full mt-2 rounded-full border border-red-500/20 py-2.5 text-center text-xs font-bold text-red-600 bg-red-500/5 transition hover:bg-red-500/10"
                type="button">
                Logout Account
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
