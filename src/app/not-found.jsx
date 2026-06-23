import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden px-4 py-20">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#006B4F]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[#006B4F]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 inline-flex rounded-full border border-[#006B4F]/20 bg-white/20 px-4 py-2 text-sm font-bold text-[var(--accent-green)] backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-white/10 dark:text-[#F6F0E4]">
          404 — Page Not Found
        </div>

        <h1 className="text-[7rem] font-black leading-none tracking-tight text-[var(--accent-green)] md:text-[10rem]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-extrabold text-[#1f1b14] md:text-5xl dark:text-[#F6F0E4]">
          This study room is unavailable.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5a50] md:text-lg dark:text-[#F6F0E4]/75">
          The page you are looking for may have been moved, deleted, or the link
          might be incorrect. Let’s get you back to a quiet place to study.
        </p>

        <div className="mt-9 flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex-1 rounded-full px-8 py-3.5 text-center text-sm font-bold text-white transition duration-300 hover:bg-black"
            style={{ backgroundColor: "var(--accent-green)" }}>
            Back to Home
          </Link>

          <Link
            href="/rooms"
            className="flex-1 rounded-full border px-8 py-3.5 text-center text-sm font-bold text-[var(--accent-green)] transition duration-300 hover:bg-[#006B4F] hover:text-white dark:border-[#F6F0E4]/40 dark:text-[#F6F0E4]"
            style={{ borderColor: "var(--accent-green)" }}>
            Browse Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
