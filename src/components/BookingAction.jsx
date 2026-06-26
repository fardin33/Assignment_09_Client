// "use client";
// import React, { useState } from "react";
// import { authClient } from "@/lib/auth-client";
// import BookingModal from "@/components/bookingModal";
// import AuthModal from "@/components/EditModal";

// const BookingActionSection = ({ room }) => {
//   const { data: session } = authClient.useSession();
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [isAuthOpen, setIsAuthOpen] = useState(false);

//   const handleBookNowClick = () => {
//     if (session) {
//       setIsBookingOpen(true);
//     } else {
//       setIsAuthOpen(true);
//     }
//   };

//   return (
//     <>
//       <aside className="h-fit rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-xl shadow-[#1f2937]/5 dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 lg:sticky lg:top-6">
//         <div className="flex items-start justify-between gap-4">
//           <div>
//             <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#8a94ad] dark:text-[#F6F0E4]/50">
//               Hourly Pricing
//             </p>
//             <p className="mt-2 text-4xl font-black text-[#006B4F]">
//               ${room.hourlyRate}
//               <span className="text-base font-extrabold text-[#465672] dark:text-[#F6F0E4]/70">
//                 /hr
//               </span>
//             </p>
//           </div>
//           <div className="text-right">
//             <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#8a94ad] dark:text-[#F6F0E4]/50">
//               Total Bookings
//             </p>
//             <p className="mt-3 text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
//               {room.bookings || 0}
//             </p>
//           </div>
//         </div>

//         <div className="my-6 h-px bg-[#e8edf5] dark:bg-[#F6F0E4]/10" />

//         <div className="grid gap-3">
//           <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
//             <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
//               Floor
//             </span>
//             <span className="text-sm font-black text-[#172033] dark:text-[#F6F0E4]">
//               {room.floor}
//             </span>
//           </div>
//           <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
//             <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
//               Seats
//             </span>
//             <span className="text-sm font-black text-[#172033] dark:text-[#F6F0E4]">
//               {room.capacity} people
//             </span>
//           </div>
//         </div>

//         <button
//           onClick={handleBookNowClick}
//           className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl">
//           Book Now
//         </button>

//         <p className="mt-4 text-center text-xs font-semibold leading-5 text-[#8a94ad] dark:text-[#F6F0E4]/50">
//           Free cancellations up to start of booking slot. Double-booking
//           detection guarantees slot integrity.
//         </p>
//       </aside>

//       {/* Modals Conditional Render */}
//       <BookingModal
//         isOpen={isBookingOpen}
//         onClose={() => setIsBookingOpen(false)}
//         room={room}
//       />
//       <AuthModal
//         isOpen={isAuthOpen}
//         onClose={() => setIsAuthOpen(false)}
//         onAuthSuccess={() => setIsBookingOpen(true)}
//       />
//     </>
//   );
// };

// export default BookingActionSection;

//-======================
"use client";
import React, { useState } from "react";
import BookingModal from "@/components/bookingModal";
import AuthModal from "@/components/authModal";
import { authClient } from "@/lib/auth-client";

const BookingActionSection = ({ room }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleBookNowClick = () => {
    if (!user) {
      setIsAuthOpen(true);
    } else {
      setIsBookingOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-4 lg:sticky lg:top-6">
      <div className="rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-sm dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70">
        <h3 className="text-xl font-black text-[#172033] dark:text-[#F6F0E4]">
          Ready to Book?
        </h3>
        <p className="mt-2 text-xs font-medium text-[#5f6b85] dark:text-[#F6F0E4]/70">
          Select your desired time slot and lock your seat instantly.
        </p>
        <button
          onClick={handleBookNowClick}
          className="mt-5 w-full rounded-2xl bg-[#006B4F] py-4 text-center text-sm font-black text-white shadow-lg shadow-[#006B4F]/25 transition hover:bg-black cursor-pointer">
          Book This Room Now
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        room={room}
        user={user}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default BookingActionSection;
