// "use client";

// import React, { useMemo, useState } from "react";
// import Image from "next/image";
// import {
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   XCircle,
// } from "lucide-react";

// const bookings = [
//   {
//     id: 1,
//     roomName: "Oak Reading Room",
//     status: "confirmed",
//     date: "May 22, 2026",
//     time: "10:00 – 13:00",
//     location: "Library",
//     note: "Final exam revision session.",
//     total: 36,
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     roomName: "The Glass Cube",
//     status: "confirmed",
//     date: "May 24, 2026",
//     time: "14:00 – 16:00",
//     location: "Library",
//     note: "",
//     total: 36,
//     image:
//       "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     roomName: "Boardroom 201",
//     status: "cancelled",
//     date: "May 18, 2026",
//     time: "09:00 – 11:00",
//     location: "Library",
//     note: "Rescheduled to next week.",
//     total: 50,
//     image:
//       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=500&auto=format&fit=crop",
//   },
// ];

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Confirmed", value: "confirmed" },
//   { label: "Cancelled", value: "cancelled" },
// ];

// const MyBookingPage = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredBookings = useMemo(() => {
//     if (activeTab === "all") return bookings;
//     return bookings.filter((booking) => booking.status === activeTab);
//   }, [activeTab]);

//   return (
//     <main className="min-h-screen text-[#1f1f1f]">
//       <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
//         {/* Header */}
//         <div className="mx-auto mb-24 max-w-3xl text-center sm:mb-28 md:mb-32">
//           <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] sm:text-4xl md:text-5xl">
//             My Bookings
//           </h1>

//           <p className="mt-3 text-sm text-[#55504a] sm:text-base md:text-lg">
//             Manage upcoming and past sessions.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-10 ml-2 flex justify-start sm:mb-12">
//           <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.08)] sm:w-auto">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.value;

//               return (
//                 <button
//                   key={tab.value}
//                   type="button"
//                   onClick={() => setActiveTab(tab.value)}
//                   className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
//                     isActive
//                       ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.22)]"
//                       : "bg-white text-[#55504a] hover:bg-[#00775B]/10 hover:text-[#00775B]"
//                   }`}>
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Booking Cards */}
//         {filteredBookings.length > 0 ? (
//           <div className="space-y-5">
//             {filteredBookings.map((booking) => {
//               const isConfirmed = booking.status === "confirmed";

//               return (
//                 <article
//                   key={booking.id}
//                   className="rounded-3xl border border-[#00775B]/15 bg-white p-4 shadow-[0_18px_50px_rgba(0,119,91,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(0,119,91,0.12)] sm:p-5 lg:p-6">
//                   <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
//                     {/* Image */}
//                     <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-3xl sm:h-56 lg:h-32 lg:w-36">
//                       <Image
//                         src={booking.image}
//                         alt={booking.roomName}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 144px"
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Main Content */}
//                     <div className="min-w-0 flex-1">
//                       <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                         <h2 className="text-xl font-extrabold text-[#1f1f1f]">
//                           {booking.roomName}
//                         </h2>

//                         <span
//                           className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
//                             isConfirmed
//                               ? "bg-[#00775B]/10 text-[#00775B]"
//                               : "bg-red-500/10 text-red-500"
//                           }`}>
//                           {isConfirmed ? (
//                             <CheckCircle2 className="h-3.5 w-3.5" />
//                           ) : (
//                             <XCircle className="h-3.5 w-3.5" />
//                           )}
//                           {booking.status}
//                         </span>
//                       </div>

//                       <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a]">
//                         <span className="inline-flex items-center gap-2">
//                           <CalendarDays className="h-4 w-4 text-[#00775B]" />
//                           {booking.date}
//                         </span>

//                         <span className="inline-flex items-center gap-2">
//                           <Clock3 className="h-4 w-4 text-[#00775B]" />
//                           {booking.time}
//                         </span>

//                         <span className="inline-flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-[#00775B]" />
//                           {booking.location}
//                         </span>
//                       </div>

//                       {booking.note && (
//                         <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 px-4 py-3 text-sm font-medium text-[#55504a]">
//                           {booking.note}
//                         </div>
//                       )}
//                     </div>

//                     {/* Price and Action */}
//                     <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
//                       <div className="text-left lg:text-right">
//                         <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                           Total
//                         </p>

//                         <p className="mt-1 text-2xl font-extrabold text-[#00775B]">
//                           ${booking.total}
//                         </p>
//                       </div>

//                       {isConfirmed && (
//                         <button
//                           type="button"
//                           className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white px-4 py-2 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white">
//                           <XCircle className="h-4 w-4" />
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-3xl border border-[#00775B]/15 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,119,91,0.08)] sm:min-h-65">
//             <div>
//               <p className="text-base font-bold text-[#55504a] sm:text-lg">
//                 No {activeTab === "all" ? "" : activeTab} bookings found.
//               </p>

//               <p className="mt-2 text-sm text-[#55504a]">
//                 Your booking data will appear here.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MyBookingPage;

// "use client";

// import React, { useMemo, useState } from "react";
// import Image from "next/image";
// import {
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   XCircle,
// } from "lucide-react";

// const bookings = [
//   {
//     id: 1,
//     roomName: "Oak Reading Room",
//     status: "confirmed",
//     date: "May 22, 2026",
//     time: "10:00 – 13:00",
//     location: "Library",
//     note: "Final exam revision session.",
//     total: 36,
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     roomName: "The Glass Cube",
//     status: "confirmed",
//     date: "May 24, 2026",
//     time: "14:00 – 16:00",
//     location: "Library",
//     note: "",
//     total: 36,
//     image:
//       "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     roomName: "Boardroom 201",
//     status: "cancelled",
//     date: "May 18, 2026",
//     time: "09:00 – 11:00",
//     location: "Library",
//     note: "Rescheduled to next week.",
//     total: 50,
//     image:
//       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=500&auto=format&fit=crop",
//   },
// ];

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Confirmed", value: "confirmed" },
//   { label: "Cancelled", value: "cancelled" },
// ];

// const MyBookingPage = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredBookings = useMemo(() => {
//     if (activeTab === "all") return bookings;
//     return bookings.filter((booking) => booking.status === activeTab);
//   }, [activeTab]);

//   return (
//     <main className="min-h-screen text-[#1f1f1f] dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
//         {/* Header */}
//         <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 md:mb-24">
//           <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl md:text-5xl">
//             My Bookings
//           </h1>

//           <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/75 sm:text-base md:text-lg">
//             Manage upcoming and past sessions.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-10 ml-2 flex justify-start sm:mb-12">
//           <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.04)] dark:shadow-none backdrop-blur-xl sm:w-auto">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.value;

//               return (
//                 <button
//                   key={tab.value}
//                   type="button"
//                   onClick={() => setActiveTab(tab.value)}
//                   className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
//                     isActive
//                       ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.15)] dark:bg-[#0e9b75] dark:text-[#07111f] dark:shadow-none"
//                       : "bg-transparent text-[#55504a] dark:text-[#F6F0E4]/70 hover:bg-[#00775B]/10 hover:text-[#00775B] dark:hover:bg-white/5 dark:hover:text-[#0e9b75]"
//                   }`}>
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Booking Cards */}
//         {filteredBookings.length > 0 ? (
//           <div className="space-y-5">
//             {filteredBookings.map((booking) => {
//               const isConfirmed = booking.status === "confirmed";

//               return (
//                 <article
//                   key={booking.id}
//                   className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-4 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl transition hover:-translate-y-0.5 sm:p-5 lg:p-6">
//                   <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
//                     {/* Image */}
//                     <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 lg:h-32 lg:w-36">
//                       <Image
//                         src={booking.image}
//                         alt={booking.roomName}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 144px"
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Main Content */}
//                     <div className="min-w-0 flex-1">
//                       <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                         <h2 className="text-xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                           {booking.roomName}
//                         </h2>

//                         <span
//                           className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
//                             isConfirmed
//                               ? "bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]"
//                               : "bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400"
//                           }`}>
//                           {isConfirmed ? (
//                             <CheckCircle2 className="h-3.5 w-3.5" />
//                           ) : (
//                             <XCircle className="h-3.5 w-3.5" />
//                           )}
//                           {booking.status}
//                         </span>
//                       </div>

//                       <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
//                         <span className="inline-flex items-center gap-2">
//                           <CalendarDays className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.date}
//                         </span>

//                         <span className="inline-flex items-center gap-2">
//                           <Clock3 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.time}
//                         </span>

//                         <span className="inline-flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.location}
//                         </span>
//                       </div>

//                       {booking.note && (
//                         <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/60 px-4 py-3 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/80">
//                           {booking.note}
//                         </div>
//                       )}
//                     </div>

//                     {/* Price and Action */}
//                     <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 dark:border-[#F6F0E4]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
//                       <div className="text-left lg:text-right">
//                         <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                           Total
//                         </p>

//                         <p className="mt-1 text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//                           ${booking.total}
//                         </p>
//                       </div>

//                       {isConfirmed && (
//                         <button
//                           type="button"
//                           className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-red-500 dark:text-red-400 transition hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white">
//                           <XCircle className="h-4 w-4" />
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 text-center shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-bold text-[#55504a] dark:text-[#F6F0E4]/80 sm:text-lg">
//                 No {activeTab === "all" ? "" : activeTab} bookings found.
//               </p>

//               <p className="mt-2 text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
//                 Your booking data will appear here.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MyBookingPage;

//==============================
// "use client";

// import React, { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   XCircle,
//   AlertTriangle,
// } from "lucide-react";
// import { getAllBookings, cancelBooking } from "@/data/roomsData";

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Confirmed", value: "confirmed" },
//   { label: "Cancelled", value: "cancelled" },
// ];

// const MyBookingPage = () => {
//   // ডামি লগইন ইউজার আইডি
//   const loggedInUser = useMemo(() => ({ id: "user_123" }), []);

//   const [bookings, setBookings] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");
//   const [loading, setLoading] = useState(true);

//   // মোডাল স্টেটস
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   // ডাটা রি-ফেচ ট্রিগার করার জন্য একটি স্টেট কাউন্টার
//   const [refreshKey, setRefreshKey] = useState(0);

//   // ডাটা ফেচিং লজিক সরাসরি useEffect এর ভেতরে হ্যান্ডেল করা হয়েছে
//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserBookings = async () => {
//       try {
//         setLoading(true);
//         const data = await getAllBookings(loggedInUser.id);
//         if (isMounted) {
//           setBookings(data || []);
//         }
//       } catch (error) {
//         console.error("Failed to load bookings:", error);
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserBookings();

//     return () => {
//       isMounted = false;
//     };
//   }, [loggedInUser.id, refreshKey]); // refreshKey চেঞ্জ হলে ডাটা আবার লোড হবে

//   // বুকিংয়ের ডেট ফিউচারে (আজ বা আগামীতে) কিনা তা চেক করার লজিক
//   const isFutureDate = (dateString) => {
//     if (!dateString) return false;
//     const bookingDate = new Date(dateString);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return bookingDate >= today;
//   };

//   // ক্যান্সেল হ্যান্ডলার
//   const handleCancelClick = (id) => {
//     setSelectedBookingId(id);
//     setIsModalOpen(true);
//   };

//   const handleConfirmCancel = async () => {
//     if (!selectedBookingId) return;

//     const res = await cancelBooking(selectedBookingId, loggedInUser.id);
//     if (res) {
//       alert("Booking cancelled successfully!");
//       setIsModalOpen(false);
//       setSelectedBookingId(null);
//       setRefreshKey((prev) => prev + 1); // refreshKey বাড়িয়ে ডাটা রি-ফেচ ট্রিগার করা হলো
//     } else {
//       alert("Failed to cancel the booking. Try again.");
//     }
//   };

//   const filteredBookings = useMemo(() => {
//     if (activeTab === "all") return bookings;
//     return bookings.filter((booking) => booking.status === activeTab);
//   }, [activeTab, bookings]);

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-lg font-semibold animate-pulse text-[#00775B]">
//           Loading your bookings...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen text-[#1f1f1f] dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
//         {/* Header */}
//         <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 md:mb-24">
//           <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl md:text-5xl">
//             My Bookings
//           </h1>
//           <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/75 sm:text-base md:text-lg">
//             Manage upcoming and past sessions.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-10 ml-2 flex justify-start sm:mb-12">
//           <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.04)] dark:shadow-none backdrop-blur-xl sm:w-auto">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.value;
//               return (
//                 <button
//                   key={tab.value}
//                   type="button"
//                   onClick={() => setActiveTab(tab.value)}
//                   className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
//                     isActive
//                       ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.15)] dark:bg-[#0e9b75] dark:text-[#07111f] dark:shadow-none"
//                       : "bg-transparent text-[#55504a] dark:text-[#F6F0E4]/70 hover:bg-[#00775B]/10 hover:text-[#00775B] dark:hover:bg-white/5 dark:hover:text-[#0e9b75]"
//                   }`}>
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Booking Cards */}
//         {filteredBookings.length > 0 ? (
//           <div className="space-y-5">
//             {filteredBookings.map((booking) => {
//               const isConfirmed = booking.status === "confirmed";
//               const canCancel = isConfirmed && isFutureDate(booking.date);

//               return (
//                 <article
//                   key={booking._id}
//                   className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-4 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl transition hover:-translate-y-0.5 sm:p-5 lg:p-6">
//                   <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
//                     {/* Image */}
//                     <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 lg:h-32 lg:w-36">
//                       <Image
//                         src={
//                           booking.roomImage ||
//                           "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop"
//                         }
//                         alt={booking.roomName || "Room Image"}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 144px"
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Main Content */}
//                     <div className="min-w-0 flex-1">
//                       <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                         <h2 className="text-xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                           {booking.roomName}
//                         </h2>
//                         <span
//                           className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
//                             isConfirmed
//                               ? "bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]"
//                               : "bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400"
//                           }`}>
//                           {isConfirmed ? (
//                             <CheckCircle2 className="h-3.5 w-3.5" />
//                           ) : (
//                             <XCircle className="h-3.5 w-3.5" />
//                           )}
//                           {booking.status}
//                         </span>
//                       </div>

//                       <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
//                         <span className="inline-flex items-center gap-2">
//                           <CalendarDays className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.date}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <Clock3 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.startTime} – {booking.endTime}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.location || "Library"}
//                         </span>
//                       </div>

//                       {booking.note && (
//                         <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/60 px-4 py-3 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/80">
//                           {booking.note}
//                         </div>
//                       )}
//                     </div>

//                     {/* Price and Action */}
//                     <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 dark:border-[#F6F0E4]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
//                       <div className="text-left lg:text-right">
//                         <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                           Total
//                         </p>
//                         <p className="mt-1 text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//                           ${booking.total || booking.price || 0}
//                         </p>
//                       </div>

//                       {canCancel && (
//                         <button
//                           type="button"
//                           onClick={() => handleCancelClick(booking._id)}
//                           className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-red-500 dark:text-red-400 transition hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white">
//                           <XCircle className="h-4 w-4" />
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 text-center shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl">
//             <div>
//               <p className="text-base font-bold text-[#55504a] dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You have no bookings yet.
//               </p>
//               <p className="mt-2 text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
//                 Your booked sessions will appear here.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Confirmation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="mx-4 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-[#0b1733] border border-[#00775B]/20">
//             <div className="flex items-center gap-3 text-red-500">
//               <AlertTriangle className="h-6 w-6" />
//               <h3 className="text-xl font-bold">Cancel Booking?</h3>
//             </div>
//             <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/70">
//               Are you sure you want to cancel this room booking? This action
//               cannot be undone.
//             </p>
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(false)}
//                 className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
//                 No, Keep It
//               </button>
//               <button
//                 type="button"
//                 onClick={handleConfirmCancel}
//                 className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
//                 Yes, Cancel Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default MyBookingPage;

//===============================
// "use client";

// import React, { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   XCircle,
//   AlertTriangle,
// } from "lucide-react";
// import { getAllBookings, cancelBooking } from "@/data/roomsData";
// import { authClient } from "@/lib/auth-client";

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Confirmed", value: "confirmed" },
//   { label: "Cancelled", value: "cancelled" },
// ];

// const MyBookingPage = () => {
//   // আসল লগইন করা ইউজারের সেশন ডাটা
//   const { data: session, isPending: sessionLoading } = authClient.useSession();
//   const user = session?.user || null;

//   // ডাইনামিক ইউজার আইডি রিট্রিভ করা
//   const currentUserId = user?.id || user?.uid || user?._id || null;

//   const [bookings, setBookings] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");

//   // সিঙ্ক্রোনাস স্টেট চেঞ্জ এড়াতে ডিফল্ট ট্রু রাখা হলো
//   const [loading, setLoading] = useState(true);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   useEffect(() => {
//     // ইউজার আইডি না পাওয়া পর্যন্ত ডাটা ফেচিং স্কিপ করবে
//     if (!currentUserId) {
//       return;
//     }

//     let isMounted = true;

//     const fetchUserBookings = async () => {
//       try {
//         setLoading(true);
//         const data = await getAllBookings(currentUserId);
//         if (isMounted) {
//           setBookings(data || []);
//         }
//       } catch (error) {
//         console.error("Failed to load bookings:", error);
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserBookings();

//     return () => {
//       isMounted = false;
//     };
//   }, [currentUserId, refreshKey]); // dependency থেকে sessionLoading বাদ দেওয়া হলো কারণ এটি এখন ইফেক্টের ভেতর লাগছে না

//   const isFutureDate = (dateString) => {
//     if (!dateString) return false;
//     const bookingDate = new Date(dateString);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return bookingDate >= today;
//   };

//   const handleCancelClick = (id) => {
//     setSelectedBookingId(id);
//     setIsModalOpen(true);
//   };

//   const handleConfirmCancel = async () => {
//     if (!selectedBookingId || !currentUserId) return;

//     const res = await cancelBooking(selectedBookingId, currentUserId);
//     if (res) {
//       alert("Booking cancelled successfully!");
//       setIsModalOpen(false);
//       setSelectedBookingId(null);
//       setRefreshKey((prev) => prev + 1);
//     } else {
//       alert("Failed to cancel the booking. Try again.");
//     }
//   };

//   const filteredBookings = useMemo(() => {
//     if (activeTab === "all") return bookings;
//     return bookings.filter((booking) => booking.status === activeTab);
//   }, [activeTab, bookings]);

//   // কন্ডিশনাল রেন্ডারিং স্টেটমেন্টটি এখানে হ্যান্ডেল করা হলো
//   // সেশন লোড হচ্ছে অথবা সেশন লোড শেষ কিন্তু ইউজার আছে এবং ডাটা ফেচ হচ্ছে—এই দুই ক্ষেত্রেই লোডার দেখাবে
//   const showLoading = sessionLoading || (currentUserId && loading);

//   if (showLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-lg font-semibold animate-pulse text-[#00775B]">
//           Loading your bookings...
//         </p>
//       </div>
//     );
//   }

//   // সেশন লোড শেষ কিন্তু কোনো ইউজার পাওয়া যায়নি
//   if (!sessionLoading && !user) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-center p-6">
//         <div>
//           <h2 className="text-2xl font-bold text-red-500 mb-2">
//             Authentication Required
//           </h2>
//           <p className="text-sm text-slate-500">
//             Please log in to view and manage your personal bookings.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen text-[#1f1f1f] dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
//         {/* Header */}
//         <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 md:mb-24">
//           <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl md:text-5xl">
//             My Bookings
//           </h1>
//           <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/75 sm:text-base md:text-lg">
//             Manage upcoming and past sessions.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-10 ml-2 flex justify-start sm:mb-12">
//           <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.04)] backdrop-blur-xl sm:w-auto">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.value;
//               return (
//                 <button
//                   key={tab.value}
//                   type="button"
//                   onClick={() => setActiveTab(tab.value)}
//                   className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
//                     isActive
//                       ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.15)] dark:bg-[#0e9b75] dark:text-[#07111f]"
//                       : "bg-transparent text-[#55504a] dark:text-[#F6F0E4]/70 hover:bg-[#00775B]/10 hover:text-[#00775B] dark:hover:bg-white/5 dark:hover:text-[#0e9b75]"
//                   }`}>
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Booking Cards */}
//         {filteredBookings.length > 0 ? (
//           <div className="space-y-5">
//             {filteredBookings.map((booking) => {
//               const isConfirmed =
//                 booking.status === "confirmed" || !booking.status;
//               const canCancel =
//                 isConfirmed &&
//                 booking.status !== "cancelled" &&
//                 isFutureDate(booking.date);

//               return (
//                 <article
//                   key={booking._id}
//                   className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-4 shadow-[0_20px_55px_rgba(0,119,91,0.03)] backdrop-blur-xl transition hover:-translate-y-0.5 sm:p-5 lg:p-6">
//                   <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
//                     {/* Image */}
//                     <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 lg:h-32 lg:w-36">
//                       <Image
//                         src={
//                           booking.roomImage ||
//                           "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop"
//                         }
//                         alt={booking.roomName || "Room Image"}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 144px"
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Main Content */}
//                     <div className="min-w-0 flex-1">
//                       <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                         <h2 className="text-xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                           {booking.roomName}
//                         </h2>
//                         <span
//                           className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
//                             booking.status !== "cancelled"
//                               ? "bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]"
//                               : "bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400"
//                           }`}>
//                           {booking.status !== "cancelled" ? (
//                             <CheckCircle2 className="h-3.5 w-3.5" />
//                           ) : (
//                             <XCircle className="h-3.5 w-3.5" />
//                           )}
//                           {booking.status || "confirmed"}
//                         </span>
//                       </div>

//                       <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
//                         <span className="inline-flex items-center gap-2">
//                           <CalendarDays className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.date}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <Clock3 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.startTime} – {booking.endTime}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                           {booking.location || "Main Branch"}
//                         </span>
//                       </div>

//                       {booking.note && (
//                         <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/60 px-4 py-3 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/80">
//                           {booking.note}
//                         </div>
//                       )}
//                     </div>

//                     {/* Price and Action */}
//                     <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 dark:border-[#F6F0E4]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
//                       <div className="text-left lg:text-right">
//                         <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                           Total
//                         </p>
//                         <p className="mt-1 text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//                           $
//                           {booking.total ||
//                             booking.totalCost ||
//                             booking.price ||
//                             0}
//                         </p>
//                       </div>

//                       {canCancel && (
//                         <button
//                           type="button"
//                           onClick={() => handleCancelClick(booking._id)}
//                           className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-red-500 dark:text-red-400 transition hover:bg-red-500 hover:text-white dark:hover:bg-red-500">
//                           <XCircle className="h-4 w-4" />
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="flex min-h-[230px] items-center justify-center rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 text-center shadow-[0_20px_55px_rgba(0,119,91,0.03)] backdrop-blur-xl">
//             <div>
//               <p className="text-base font-bold text-[#55504a] dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You have no bookings yet.
//               </p>
//               <p className="mt-2 text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
//                 Your booked sessions will appear here.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Confirmation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="mx-4 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-[#0b1733] border border-[#00775B]/20">
//             <div className="flex items-center gap-3 text-red-500">
//               <AlertTriangle className="h-6 w-6" />
//               <h3 className="text-xl font-bold">Cancel Booking?</h3>
//             </div>
//             <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/70">
//               Are you sure you want to cancel this room booking? This action
//               cannot be undone.
//             </p>
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(false)}
//                 className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
//                 No, Keep It
//               </button>
//               <button
//                 type="button"
//                 onClick={handleConfirmCancel}
//                 className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
//                 Yes, Cancel Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default MyBookingPage;

//===========================
"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { getAllBookings, cancelBooking } from "@/data/roomsData";
import { authClient } from "@/lib/auth-client";

const tabs = [
  { label: "All", value: "all" },
  { label: "Confirmed", value: "confirmed" },
  { label: "Cancelled", value: "cancelled" },
];

const MyBookingPage = () => {
  // আসল লগইন করা ইউজারের সেশন ডাটা
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const user = session?.user || null;

  // ডাইনামিক ইউজার আইডি রিট্রিভ করা
  const currentUserId = user?.id || user?.uid || user?._id || null;

  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // সিঙ্ক্রোনাস স্টেট চেঞ্জ এড়াতে ডিফল্ট ট্রু রাখা হলো
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // ইউজার আইডি না পাওয়া পর্যন্ত ডাটা ফেচিং স্কিপ করবে
    if (!currentUserId) {
      return;
    }

    let isMounted = true;

    const fetchUserBookings = async () => {
      try {
        setLoading(true);
        const data = await getAllBookings(currentUserId);
        if (isMounted) {
          // ডিবাগিং করার জন্য কনসোলে ডাটা চেক করতে পারেন
          console.log("Fetched Bookings Data:", data);
          setBookings(data || []);
        }
      } catch (error) {
        console.error("Failed to load bookings:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserBookings();

    return () => {
      isMounted = false;
    };
  }, [currentUserId, refreshKey]);

  const isFutureDate = (dateString) => {
    if (!dateString) return false;
    const bookingDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return bookingDate >= today;
  };

  const handleCancelClick = (id) => {
    setSelectedBookingId(id);
    setIsModalOpen(true);
  };

  const handleConfirmCancel = async () => {
    if (!selectedBookingId || !currentUserId) return;

    const res = await cancelBooking(selectedBookingId, currentUserId);
    if (res) {
      alert("Booking cancelled successfully!");
      setIsModalOpen(false);
      setSelectedBookingId(null);
      setRefreshKey((prev) => prev + 1);
    } else {
      alert("Failed to cancel the booking. Try again.");
    }
  };

  // ফিল্টারিং লজিককে ডিফেন্সিভ করা হলো যেন ওল্ড ডাটার বিভিন্ন স্ট্যাটাসও ম্যাচ করে
  const filteredBookings = useMemo(() => {
    if (activeTab === "all") return bookings;
    return bookings.filter((booking) => {
      const currentStatus = (
        booking.status ||
        booking.bookingStatus ||
        "confirmed"
      ).toLowerCase();
      return currentStatus === activeTab.toLowerCase();
    });
  }, [activeTab, bookings]);

  // কন্ডিশনাল রেন্ডারিং স্টেটমেন্ট
  const showLoading = sessionLoading || (currentUserId && loading);

  if (showLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-semibold animate-pulse text-[#00775B]">
          Loading your bookings...
        </p>
      </div>
    );
  }

  // সেশন লোড শেষ কিন্তু কোনো ইউজার পাওয়া যায়নি
  if (!sessionLoading && !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-center p-6">
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            Authentication Required
          </h2>
          <p className="text-sm text-slate-500">
            Please log in to view and manage your personal bookings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-[#1f1f1f] dark:text-[#F6F0E4] transition-colors duration-300">
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 md:mb-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl md:text-5xl">
            My Bookings
          </h1>
          <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/75 sm:text-base md:text-lg">
            Manage upcoming and past sessions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 ml-2 flex justify-start sm:mb-12">
          <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.04)] backdrop-blur-xl sm:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
                    isActive
                      ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.15)] dark:bg-[#0e9b75] dark:text-[#07111f]"
                      : "bg-transparent text-[#55504a] dark:text-[#F6F0E4]/70 hover:bg-[#00775B]/10 hover:text-[#00775B] dark:hover:bg-white/5 dark:hover:text-[#0e9b75]"
                  }`}>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Booking Cards */}
        {filteredBookings.length > 0 ? (
          <div className="space-y-5">
            {filteredBookings.map((booking) => {
              // ওল্ড ডাটাবেজ ফিল্ড সাপোর্ট (Fallback mapping)
              const bookingId = booking._id || booking.id;
              const statusText =
                booking.status || booking.bookingStatus || "confirmed";
              const isConfirmed = statusText.toLowerCase() === "confirmed";
              const bookingDate =
                booking.date || booking.bookingDate || booking.checkInDate;

              // যদি রুমের ডাটা অবজেক্ট আকারে পপুলেট হয়ে আসে (booking.roomId.roomName) তার সাপোর্ট
              const roomName =
                booking.roomName || booking.roomId?.roomName || "Standard Room";
              const roomImage =
                booking.roomImage ||
                booking.roomId?.roomImage ||
                booking.room?.image;

              const canCancel =
                isConfirmed &&
                statusText.toLowerCase() !== "cancelled" &&
                isFutureDate(bookingDate);

              return (
                <article
                  key={bookingId}
                  className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-4 shadow-[0_20px_55px_rgba(0,119,91,0.03)] backdrop-blur-xl transition hover:-translate-y-0.5 sm:p-5 lg:p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    {/* Image */}
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 lg:h-32 lg:w-36">
                      <Image
                        src={
                          roomImage ||
                          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop"
                        }
                        alt={roomName}
                        fill
                        sizes="(max-width: 1024px) 100vw, 144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Main Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <h2 className="text-xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
                          {roomName}
                        </h2>
                        <span
                          className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                            statusText.toLowerCase() !== "cancelled"
                              ? "bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]"
                              : "bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400"
                          }`}>
                          {statusText.toLowerCase() !== "cancelled" ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5" />
                          )}
                          {statusText}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                          {bookingDate}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                          {booking.startTime || booking.slot || "N/A"}{" "}
                          {booking.endTime ? `– ${booking.endTime}` : ""}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                          {booking.location ||
                            booking.roomId?.location ||
                            "Main Branch"}
                        </span>
                      </div>

                      {booking.note && (
                        <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/60 px-4 py-3 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/80">
                          {booking.note}
                        </div>
                      )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 dark:border-[#F6F0E4]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
                      <div className="text-left lg:text-right">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
                          Total
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
                          $
                          {booking.total ||
                            booking.totalCost ||
                            booking.price ||
                            booking.amount ||
                            0}
                        </p>
                      </div>

                      {canCancel && (
                        <button
                          type="button"
                          onClick={() => handleCancelClick(bookingId)}
                          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-red-500 dark:text-red-400 transition hover:bg-red-500 hover:text-white dark:hover:bg-red-500">
                          <XCircle className="h-4 w-4" />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[230px] items-center justify-center rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 text-center shadow-[0_20px_55px_rgba(0,119,91,0.03)] backdrop-blur-xl">
            <div>
              <p className="text-base font-bold text-[#55504a] dark:text-[#F6F0E4]/80 sm:text-lg">
                You have no bookings yet.
              </p>
              <p className="mt-2 text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
                Your booked sessions will appear here.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-[#0b1733] border border-[#00775B]/20">
            <div className="flex items-center gap-3 text-red-500">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="text-xl font-bold">Cancel Booking?</h3>
            </div>
            <p className="mt-3 text-sm text-[#55504a] dark:text-[#F6F0E4]/70">
              Are you sure you want to cancel this room booking? This action
              cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                No, Keep It
              </button>
              <button
                type="button"
                onClick={handleConfirmCancel}
                className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
                Yes, Cancel Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MyBookingPage;
