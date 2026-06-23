import Link from "next/link";

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.5 9H16V6h-2.5C10.9 6 10 7.6 10 9.6V11H8v3h2v7h3v-7h2.4l.6-3h-3V9.7c0-.5.2-.7.5-.7Z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.4l-5-6.5L4.9 21H1.8l7.3-8.3L1.5 3H8l4.5 5.9L17.7 3Zm-1.1 16.2h1.7L7.1 4.7H5.3l11.3 14.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 3a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5 3Zm16 11.1c0-3.2-1.7-5.5-4.6-5.5-1.8 0-3 .9-3.5 1.8V8.8H10V21h2.9v-6.4c0-1.7.9-2.9 2.5-2.9 1.5 0 2.3 1.1 2.3 2.9V21H21v-6.9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-300/50 dark:border-white/10 bg-[#ECF0F1] dark:bg-[#07111f]/80 transition-colors duration-300">
      <div className="w-11/12 mx-auto py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white dark:bg-[#ECF0F1]"
                style={{ backgroundColor: "var(--accent-green)" }}>
                📖
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                StudyNook
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-slate-600 dark:text-slate-200">
              The marketplace for focused study spaces. Find a quiet seat, book
              by the hour, never get double-booked.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:contents">
            <div>
              <h3 className="text-sm font-black text-slate-800 dark:text-white">
                Explore
              </h3>

              <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-slate-600 dark:text-slate-200">
                <Link
                  href="/rooms"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  Browse rooms
                </Link>

                <Link
                  href="/how-it-works"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  How it works
                </Link>

                <Link
                  href="/add-room"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  List a room
                </Link>

                <Link
                  href="/dashboard"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  My dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-slate-800 dark:text-white">
                Company
              </h3>

              <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-slate-600 dark:text-slate-200">
                <Link
                  href="/"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  About us
                </Link>

                <Link
                  href="/"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  Contact
                </Link>

                <Link
                  href="/"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  Trust & safety
                </Link>

                <Link
                  href="/"
                  className="hover:text-slate-900 dark:hover:text-white transition">
                  Terms & privacy
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-800 dark:text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  ✉
                </span>
                <p>hello@studynook.co</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  ✆
                </span>
                <p>+1 (415) 555-0140</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href="/"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/10 text-slate-700 dark:text-slate-200 transition duration-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-[var(--accent-green)]">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300/50 dark:border-white/10">
        <div className="w-11/12 mx-auto flex flex-col items-center justify-between gap-3 py-5 text-xs font-semibold text-slate-500 dark:text-slate-300 md:flex-row md:text-sm">
          <p>© 2026 StudyNook, Inc. All rights reserved.</p>
          <p>Made for students, librarians, and quiet thinkers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
