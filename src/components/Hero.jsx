// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   const images = {
//     main: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
//     study:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
//     library:
//       "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
//   };

//   return (
//     <section className=" py-16 md:py-24 overflow-hidden">
//       <div className="w-11/13 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//         {/* Left Content */}
//         <div className="text-center lg:text-left">
//           <div className="inline-flex items-center gap-2 rounded-full border border-[#006B4F]/30 bg-[#006B4F]/10 px-4 py-2 text-sm font-semibold text-[#006B4F] dark:text-[#14a880]">
//             ✦ Campus-Wide Study Room Network
//           </div>

//           <h1 className="mt-6 text-4xl md:text-5xl xl:text-[52px] font-extrabold leading-tight text-[#1f1b14] dark:text-[#F6F0E4]">
//             Find Your{" "}
//             <span className="text-(--accent-green) dark:text-[#0e9b75]">
//               Perfect
//             </span>{" "}
//             Study Room
//           </h1>

//           <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-8 text-[#5f5a50] dark:text-[#F6F0E4]/80">
//             Browse and book quiet, private study rooms in your library. List
//             your own room, check real-time availability, and enjoy a calm study
//             experience without conflicts.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Link
//               href="/rooms"
//               className="rounded-full px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black"
//               style={{ backgroundColor: "var(--accent-green)" }}>
//               Explore Rooms →
//             </Link>

//             <Link
//               href="/add-room"
//               className="rounded-full border px-7 py-3 text-sm font-bold text-(--accent-green) transition duration-300 hover:bg-[#006B4F] hover:text-white dark:text-[#F6F0E4] dark:border-[#F6F0E4]"
//               style={{ borderColor: "var(--accent-green)" }}>
//               List Your Room
//             </Link>
//           </div>

//           <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
//             <div>
//               <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
//                 500+
//               </h3>
//               <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                 Study Rooms
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
//                 12K+
//               </h3>
//               <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                 Bookings
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
//                 4.8★
//               </h3>
//               <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
//                 Avg. Rating
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Images */}
//         <div className="relative">
//           <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#006B4F]/10 blur-3xl" />
//           <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#006B4F]/10 blur-3xl" />

//           <div className="relative grid grid-cols-12 gap-5 items-center">
//             <div className="col-span-12 md:col-span-8">
//               <Image
//                 src={images.main}
//                 alt="Modern study room"
//                 width={700}
//                 height={800}
//                 className="w-full h-105 md:h-135 object-cover rounded-[28px] border border-[#006B4F]/15 shadow-lg"
//               />
//             </div>

//             <div className="col-span-12 md:col-span-4 flex md:flex-col gap-5">
//               <Image
//                 src={images.study}
//                 alt="Students studying together"
//                 width={350}
//                 height={260}
//                 className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
//               />

//               <Image
//                 src={images.library}
//                 alt="Library study area"
//                 width={350}
//                 height={260}
//                 className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = {
    main: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    study:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    library:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="w-11/13 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006B4F]/30 bg-[#006B4F]/10 px-4 py-2 text-sm font-semibold text-[#006B4F] dark:text-[#14a880]">
            ✦ Campus-Wide Study Room Network
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl xl:text-[52px] font-extrabold leading-tight text-[#1f1b14] dark:text-[#F6F0E4]">
            Find Your{" "}
            <span className="text-(--accent-green) dark:text-[#0e9b75]">
              Perfect
            </span>{" "}
            Study Room
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-8 text-[#5f5a50] dark:text-[#F6F0E4]/80">
            Browse and book quiet, private study rooms in your library. List
            your own room, check real-time availability, and enjoy a calm study
            experience without conflicts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/Rooms"
              className="rounded-full px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black text-center"
              style={{ backgroundColor: "var(--accent-green)" }}>
              Explore Rooms →
            </Link>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border px-7 py-3 text-sm font-bold text-(--accent-green) transition duration-300 hover:bg-[#006B4F] hover:text-white dark:text-[#F6F0E4] dark:border-[#F6F0E4] text-center"
              style={{ borderColor: "var(--accent-green)" }}>
              List Your Room
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
                500+
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Study Rooms
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
                12K+
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Bookings
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-(--accent-green) dark:text-[#0e9b75]">
                4.8★
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Avg. Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#006B4F]/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#006B4F]/10 blur-3xl" />

          <div className="relative grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 md:col-span-8">
              <Image
                src={images.main}
                alt="Modern study room"
                width={700}
                height={800}
                className="w-full h-105 md:h-135 object-cover rounded-[28px] border border-[#006B4F]/15 shadow-lg"
              />
            </div>

            <div className="col-span-12 md:col-span-4 flex md:flex-col gap-5">
              <Image
                src={images.study}
                alt="Students studying together"
                width={350}
                height={260}
                className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
              />

              <Image
                src={images.library}
                alt="Library study area"
                width={350}
                height={260}
                className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Protection Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#006B4F]/20 bg-white p-8 shadow-2xl dark:border-white/10 dark:bg-[#0f234f] text-center transform transition-all duration-300 scale-100">
            {/* Close Cross Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 font-bold transition duration-200">
              ✕
            </button>

            {/* Modal Icon / Heading */}
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#006B4F]/10 text-2xl text-[#006B4F] dark:bg-emerald-500/10 dark:text-emerald-400">
              🔒
            </div>

            <h3 className="text-xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
              Authentication Required
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#5f5a50] dark:text-[#F6F0E4]/80">
              If you want to list your own study room, please log in or register
              an account first.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/login"
                className="flex-1 rounded-xl bg-[#006B4F] py-3 text-sm font-bold text-white shadow-md shadow-emerald-900/10 transition duration-300 hover:bg-black text-center">
                Log In
              </Link>
              <Link
                href="/register"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-bold text-[#1f1b14] transition duration-300 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800 dark:text-[#F6F0E4] dark:hover:bg-slate-700 text-center">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
