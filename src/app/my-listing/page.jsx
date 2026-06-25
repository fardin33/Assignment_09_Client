// "use client";

// import React from "react";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Eye,
//   Pencil,
//   Plus,
//   Trash2,
//   MapPin,
//   DollarSign,
//   CalendarCheck,
//   TrendingUp,
// } from "lucide-react";

// const rooms = [
//   {
//     id: 1,
//     name: "Oak Reading Room",
//     capacity: 4,
//     location: "Floor 4 · East Wing",
//     rate: 12,
//     bookings: 142,
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     name: "The Glass Cube",
//     capacity: 2,
//     location: "Floor 1 · Atrium",
//     rate: 18,
//     bookings: 89,
//     image:
//       "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     name: "The Thesis Studio",
//     capacity: 1,
//     location: "Floor 4 · West Wing",
//     rate: 15,
//     bookings: 76,
//     image:
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop",
//   },
// ];

// const MyListingPage = () => {
//   const hasRooms = rooms.length > 0;
//   const totalBookings = rooms.reduce((total, room) => total + room.bookings, 0);

//   return (
//     <main className="min-h-screen  text-black dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
//               My Listings
//             </h1>

//             <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
//               {rooms.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-6 py-3.5 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_10px_25px_rgba(0,119,91,0.25)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
//             <Plus className="h-4 w-4 stroke-[2.5]" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Active Listings Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Active Listings
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               {rooms.length}
//             </h2>
//           </div>

//           {/* Revenue Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <DollarSign className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Revenue
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               $1,284
//             </h2>
//           </div>

//           {/* Avg Occupancy Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <TrendingUp className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Avg Occupancy
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               78%
//             </h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Room
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Location
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Rate
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Actions
//                 </p>
//               </div>

//               {rooms.map((room) => (
//                 <div
//                   key={room.id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={56}
//                       height={56}
//                       className="h-14 w-14 rounded-2xl object-cover"
//                     />
//                     <div>
//                       <h3 className="text-base font-extrabold !text-black dark:!text-[#F6F0E4]">
//                         {room.name}
//                       </h3>
//                       <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                     {room.location}
//                   </p>

//                   <p className="text-sm font-extrabold !text-black dark:!text-[#F6F0E4]">
//                     ${room.rate}/hr
//                   </p>

//                   <p className="text-sm font-extrabold !text-black dark:!text-[#F6F0E4]">
//                     {room.bookings}
//                   </p>

//                   <div className="flex justify-end gap-2.5">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile / Tablet Card View */}
//             <div className="grid grid-cols-1 gap-4 lg:hidden">
//               {rooms.map((room) => (
//                 <div
//                   key={room.id}
//                   className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
//                   <div className="flex gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={80}
//                       height={80}
//                       className="h-20 w-20 rounded-2xl object-cover"
//                     />

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold !text-black dark:!text-[#F6F0E4]">
//                         {room.name}
//                       </h3>

//                       <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>

//                       <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                         <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                         {room.location}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Rate
//                       </p>
//                       <p className="mt-1 text-base font-black !text-black dark:!text-[#F6F0E4]">
//                         ${room.rate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Bookings
//                       </p>
//                       <p className="mt-1 text-base font-black !text-black dark:!text-[#F6F0E4]">
//                         {room.bookings}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You haven&apos;t listed any study rooms yet.
//               </p>

//               <button
//                 type="button"
//                 className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
//                 Add your first room
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MyListingPage;

//=======================
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Eye,
//   Pencil,
//   Plus,
//   Trash2,
//   MapPin,
//   DollarSign,
//   CalendarCheck,
//   TrendingUp,
// } from "lucide-react";
// import { rooms as fetchRooms } from "@/data/roomsData";

// const MyListingPage = () => {
//   const [roomList, setRoomList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loadRooms = async () => {
//       setIsLoading(true);
//       const data = await fetchRooms();
//       setRoomList(data || []);
//       setIsLoading(false);
//     };

//     loadRooms();
//   }, []);

//   const hasRooms = roomList.length > 0;

//   const totalBookings = roomList.reduce(
//     (total, room) => total + (Number(room.bookings) || 0),
//     0,
//   );

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-black dark:text-[#F6F0E4]">
//         <div className="text-center font-bold animate-pulse text-lg">
//           Loading rooms...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen text-black dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
//               My Listings
//             </h1>

//             <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
//               {roomList.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-6 py-3.5 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_10px_25px_rgba(0,119,91,0.25)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
//             <Plus className="h-4 w-4 stroke-[2.5]" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Active Listings Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Active Listings
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               {roomList.length}
//             </h2>
//           </div>

//           {/* Revenue Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <DollarSign className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Revenue
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               $1,284
//             </h2>
//           </div>

//           {/* Avg Occupancy Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <TrendingUp className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Avg Occupancy
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               78%
//             </h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Room
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Floor
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Rate
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Actions
//                 </p>
//               </div>

//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
//                   <div className="flex items-center gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={56}
//                         height={56}
//                         className="h-14 w-14 rounded-2xl object-cover"
//                       />
//                     )}
//                     <div>
//                       <h3 className="text-base font-extrabold text-black! dark:text-[#F6F0E4]!">
//                         {room.roomName}
//                       </h3>
//                       <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                     {room.floor || "N/A"}
//                   </p>

//                   <p className="text-sm font-extrabold text-black! dark:text-[#F6F0E4]!">
//                     ${room.hourlyRate}/hr
//                   </p>

//                   <p className="text-sm font-extrabold text-black! dark:text-[#F6F0E4]!">
//                     {room.bookings || 0}
//                   </p>

//                   <div className="flex justify-end gap-2.5">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile / Tablet Card View */}
//             <div className="grid grid-cols-1 gap-4 lg:hidden">
//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
//                   <div className="flex gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={80}
//                         height={80}
//                         className="h-20 w-20 rounded-2xl object-cover"
//                       />
//                     )}

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold text-black! dark:text-[#F6F0E4]!">
//                         {room.roomName}
//                       </h3>

//                       <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>

//                       <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                         <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                         {room.floor || "N/A"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Rate
//                       </p>
//                       <p className="mt-1 text-base font-black text-black! dark:text-[#F6F0E4]!">
//                         ${room.hourlyRate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Bookings
//                       </p>
//                       <p className="mt-1 text-base font-black text-black! dark:text-[#F6F0E4]!">
//                         {room.bookings || 0}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You haven&apos;t listed any study rooms yet.
//               </p>

//               <button
//                 type="button"
//                 className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
//                 Add your first room
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MyListingPage;

//========================

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Eye,
//   Pencil,
//   Plus,
//   Trash2,
//   MapPin,
//   DollarSign,
//   CalendarCheck,
//   TrendingUp,
// } from "lucide-react";
// import { rooms as fetchRooms } from "@/data/roomsData";
// import EditModalPage from "@/components/EditModal";
// import toast, { Toaster } from "react-hot-toast";

// const MyListingPage = () => {
//   const [roomList, setRoomList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   useEffect(() => {
//     const loadRooms = async () => {
//       setIsLoading(true);
//       const data = await fetchRooms();
//       setRoomList(data || []);
//       setIsLoading(false);
//     };

//     loadRooms();
//   }, []);

//   const handleEditClick = (room) => {
//     setSelectedRoom(room);
//     setIsModalOpen(true);
//   };

//   const handleUpdateRoom = async (updatedRoom) => {
//     try {
//       console.log("Sending Updated Data to Backend:", updatedRoom);

//       setRoomList((prevList) =>
//         prevList.map((room) =>
//           room._id === updatedRoom._id ? updatedRoom : room,
//         ),
//       );

//       toast.success("Room updated successfully!");
//       setIsModalOpen(false);
//       setSelectedRoom(null);
//     } catch (error) {
//       toast.error("An error occurred while updating the room.");
//     }
//   };

//   const hasRooms = roomList.length > 0;

//   const totalBookings = roomList.reduce(
//     (total, room) => total + (Number(room.bookings) || 0),
//     0,
//   );

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-black dark:text-[#F6F0E4]">
//         <div className="text-center font-bold animate-pulse text-lg">
//           Loading rooms...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen text-black dark:text-[#F6F0E4] transition-colors duration-300">
//       <Toaster position="top-right" reverseOrder={false} />

//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
//               My Listings
//             </h1>

//             <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
//               {roomList.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-6 py-3.5 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_10px_25px_rgba(0,119,91,0.25)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
//             <Plus className="h-4 w-4 stroke-[2.5]" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Active Listings Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Active Listings
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               {roomList.length}
//             </h2>
//           </div>

//           {/* Revenue Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <DollarSign className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Revenue
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               $1,284
//             </h2>
//           </div>

//           {/* Avg Occupancy Card */}
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <TrendingUp className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Avg Occupancy
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               78%
//             </h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Room
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Floor
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Rate
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Actions
//                 </p>
//               </div>

//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
//                   <div className="flex items-center gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={56}
//                         height={56}
//                         className="h-14 w-14 rounded-2xl object-cover"
//                       />
//                     )}
//                     <div>
//                       <h3 className="text-base font-extrabold text-black! dark:text-[#F6F0E4]!">
//                         {room.roomName}
//                       </h3>
//                       <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                     {room.floor || "N/A"}
//                   </p>

//                   <p className="text-sm font-extrabold text-black! dark:text-[#F6F0E4]!">
//                     ${room.hourlyRate}/hr
//                   </p>

//                   <p className="text-sm font-extrabold text-black! dark:text-[#F6F0E4]!">
//                     {room.bookings || 0}
//                   </p>

//                   <div className="flex justify-end gap-2.5">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     {/* Edit Button Click Handler Attached */}
//                     <button
//                       onClick={() => handleEditClick(room)}
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile / Tablet Card View */}
//             <div className="grid grid-cols-1 gap-4 lg:hidden">
//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
//                   <div className="flex gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={80}
//                         height={80}
//                         className="h-20 w-20 rounded-2xl object-cover"
//                       />
//                     )}

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold text-black! dark:text-[#F6F0E4]!">
//                         {room.roomName}
//                       </h3>

//                       <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>

//                       <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                         <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                         {room.floor || "N/A"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Rate
//                       </p>
//                       <p className="mt-1 text-base font-black text-black! dark:text-[#F6F0E4]!">
//                         ${room.hourlyRate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Bookings
//                       </p>
//                       <p className="mt-1 text-base font-black text-black! dark:text-[#F6F0E4]!">
//                         {room.bookings || 0}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     {/* Mobile Edit Button Click Handler Attached */}
//                     <button
//                       onClick={() => handleEditClick(room)}
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You haven&apos;t listed any study rooms yet.
//               </p>

//               <button
//                 type="button"
//                 className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
//                 Add your first room
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Edit Modal Component Rendered Here */}
//       <EditModalPage
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         room={selectedRoom}
//         onUpdate={handleUpdateRoom}
//       />
//     </main>
//   );
// };

// export default MyListingPage;

//=========================================
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   ArrowRight,
//   Eye,
//   Pencil,
//   Plus,
//   Trash2,
//   MapPin,
//   DollarSign,
//   CalendarCheck,
//   TrendingUp,
// } from "lucide-react";
// import { rooms as fetchRooms, updateRoom, deleteRoom } from "@/data/roomsData";
// import EditModalPage from "@/components/EditModal";
// import toast, { Toaster } from "react-hot-toast";

// const MyListingPage = () => {
//   const [roomList, setRoomList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   useEffect(() => {
//     const loadRooms = async () => {
//       setIsLoading(true);
//       const data = await fetchRooms();
//       setRoomList(data || []);
//       setIsLoading(false);
//     };

//     loadRooms();
//   }, []);

//   const handleEditClick = (room) => {
//     setSelectedRoom(room);
//     setIsModalOpen(true);
//   };

//   // DB Update for Edit functionality : UPDATED
//   const handleUpdateRoom = async (updatedRoom) => {
//     try {
//       const response = await updateRoom(updatedRoom._id, updatedRoom);

//       if (response) {
//         setRoomList((prevList) =>
//           prevList.map((room) =>
//             room._id === updatedRoom._id ? updatedRoom : room,
//           ),
//         );
//         toast.success("Room updated successfully!");
//         setIsModalOpen(false);
//         setSelectedRoom(null);
//       } else {
//         toast.error("Failed to update the room on server.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while updating the room.");
//     }
//   };

//   // Delete Functionality with confirmation : UPDATED
//   const handleDeleteClick = async (roomId) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to permanently delete this room?",
//     );

//     if (!confirmDelete) return;

//     try {
//       const response = await deleteRoom(roomId);
//       if (response) {
//         setRoomList((prevList) =>
//           prevList.filter((room) => room._id !== roomId),
//         );
//         toast.success("Room deleted successfully!");
//       } else {
//         toast.error("Failed to delete the room from server.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while deleting the room.");
//     }
//   };

//   const hasRooms = roomList.length > 0;

//   const totalBookings = roomList.reduce(
//     (total, room) => total + (Number(room.bookings) || 0),
//     0,
//   );

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-black dark:text-[#F6F0E4]">
//         <div className="text-center font-bold animate-pulse text-lg">
//           Loading rooms...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen text-black dark:text-[#F6F0E4] transition-colors duration-300">
//       <Toaster position="top-right" reverseOrder={false} />

//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
//               My Listings
//             </h1>
//             <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
//               {roomList.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-6 py-3.5 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_10px_25px_rgba(0,119,91,0.25)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
//             <Plus className="h-4 w-4 stroke-[2.5]" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Active Listings
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               {roomList.length}
//             </h2>
//           </div>

//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <DollarSign className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Revenue
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               $1,284
//             </h2>
//           </div>

//           <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <TrendingUp className="h-5 w-5" />
//             </div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
//               Avg Occupancy
//             </p>
//             <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
//               78%
//             </h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Room
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Floor
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Rate
//                 </p>
//                 <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
//                   Actions
//                 </p>
//               </div>

//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
//                   <div className="flex items-center gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={56}
//                         height={56}
//                         className="h-14 w-14 rounded-2xl object-cover"
//                       />
//                     )}
//                     <div>
//                       <h3 className="text-base font-extrabold text-black dark:text-[#F6F0E4]">
//                         {room.roomName}
//                       </h3>
//                       <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                     {room.floor || "N/A"}
//                   </p>

//                   <p className="text-sm font-extrabold text-black dark:text-[#F6F0E4]">
//                     ${room.hourlyRate}/hr
//                   </p>

//                   <p className="text-sm font-extrabold text-black dark:text-[#F6F0E4]">
//                     {room.bookings || 0}
//                   </p>

//                   <div className="flex justify-end gap-2.5">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       onClick={() => handleEditClick(room)}
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     {/* Delete Event Linked -> UPDATED */}
//                     <button
//                       onClick={() => handleDeleteClick(room._id)}
//                       type="button"
//                       className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile / Tablet Card View */}
//             <div className="grid grid-cols-1 gap-4 lg:hidden">
//               {roomList.map((room) => (
//                 <div
//                   key={room._id}
//                   className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
//                   <div className="flex gap-4">
//                     {room.image && (
//                       <Image
//                         src={room.image}
//                         alt={room.roomName || "Room Image"}
//                         width={80}
//                         height={80}
//                         className="h-20 w-20 rounded-2xl object-cover"
//                       />
//                     )}

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold text-black dark:text-[#F6F0E4]">
//                         {room.roomName}
//                       </h3>
//                       <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                       <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
//                         <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                         {room.floor || "N/A"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Rate
//                       </p>
//                       <p className="mt-1 text-base font-black text-black dark:text-[#F6F0E4]">
//                         ${room.hourlyRate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
//                         Bookings
//                       </p>
//                       <p className="mt-1 text-base font-black text-black dark:text-[#F6F0E4]">
//                         {room.bookings || 0}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       onClick={() => handleEditClick(room)}
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     {/* Mobile Delete Click -> UPDATED */}
//                     <button
//                       onClick={() => handleDeleteClick(room._id)}
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
//                 You haven&apos;t listed any study rooms yet.
//               </p>
//               <button
//                 type="button"
//                 className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
//                 Add your first room
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       <EditModalPage
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         room={selectedRoom}
//         onUpdate={handleUpdateRoom}
//       />
//     </main>
//   );
// };

// export default MyListingPage;

//==============================
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  Pencil,
  Plus,
  Trash2,
  MapPin,
  DollarSign,
  CalendarCheck,
  TrendingUp,
  X,
  AlertTriangle,
} from "lucide-react";
import { rooms as fetchRooms, updateRoom, deleteRoom } from "@/data/roomsData";
import EditModalPage from "@/components/EditModal";
import toast, { Toaster } from "react-hot-toast";

const MyListingPage = () => {
  const [roomList, setRoomList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loadRooms = async () => {
      setIsLoading(true);
      const data = await fetchRooms();
      setRoomList(data || []);
      setIsLoading(false);
    };

    loadRooms();
  }, []);

  const handleEditClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // DB Update for Edit functionality
  const handleUpdateRoom = async (updatedRoom) => {
    try {
      const response = await updateRoom(updatedRoom._id, updatedRoom);

      if (response) {
        setRoomList((prevList) =>
          prevList.map((room) =>
            room._id === updatedRoom._id ? updatedRoom : room,
          ),
        );
        toast.success("Room updated successfully!");
        setIsModalOpen(false);
        setSelectedRoom(null);
      } else {
        toast.error("Failed to update the room on server.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the room.");
    }
  };

  const handleDeleteClick = (room) => {
    setRoomToDelete(room);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!roomToDelete) return;

    setIsDeleting(true);
    try {
      const response = await deleteRoom(roomToDelete._id);
      if (response) {
        setRoomList((prevList) =>
          prevList.filter((room) => room._id !== roomToDelete._id),
        );
        toast.success("Room deleted successfully!");
        setIsDeleteModalOpen(false);
        setRoomToDelete(null);
      } else {
        toast.error("Failed to delete the room from server.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the room.");
    } finally {
      setIsDeleting(false);
    }
  };

  const hasRooms = roomList.length > 0;

  const totalBookings = roomList.reduce(
    (total, room) => total + (Number(room.bookings) || 0),
    0,
  );

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-black dark:text-[#F6F0E4]">
        <div className="text-center font-bold animate-pulse text-lg">
          Loading rooms...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-black dark:text-[#F6F0E4] transition-colors duration-300">
      <Toaster position="top-right" reverseOrder={false} />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Top Part */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
              My Listings
            </h1>
            <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
              {roomList.length} active listings · {totalBookings} total bookings
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-6 py-3.5 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_10px_25px_rgba(0,119,91,0.25)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
            <Plus className="h-4 w-4 stroke-[2.5]" />
            New listing
          </button>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
              Active Listings
            </p>
            <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
              {roomList.length}
            </h2>
          </div>

          <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
              <DollarSign className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
              Revenue
            </p>
            <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
              $1,284
            </h2>
          </div>

          <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
              Avg Occupancy
            </p>
            <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
              78%
            </h2>
          </div>
        </div>

        {hasRooms ? (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
              <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Room
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Floor
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Rate
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Bookings
                </p>
                <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Actions
                </p>
              </div>

              {roomList.map((room) => (
                <div
                  key={room._id}
                  className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
                  <div className="flex items-center gap-4">
                    {room.image && (
                      <Image
                        src={room.image}
                        alt={room.roomName || "Room Image"}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-2xl object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-base font-extrabold text-black dark:text-[#F6F0E4]">
                        {room.roomName}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
                    {room.floor || "N/A"}
                  </p>

                  <p className="text-sm font-extrabold text-black dark:text-[#F6F0E4]">
                    ${room.hourlyRate}/hr
                  </p>

                  <p className="text-sm font-extrabold text-black dark:text-[#F6F0E4]">
                    {room.bookings || 0}
                  </p>

                  <div className="flex justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => router.push(`/Rooms/${room._id}`)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      onClick={() => handleEditClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteClick(room)}
                      type="button"
                      className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Card View */}
            <div className="grid grid-cols-1 gap-4 lg:hidden">
              {roomList.map((room) => (
                <div
                  key={room._id}
                  className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
                  <div className="flex gap-4">
                    {room.image && (
                      <Image
                        src={room.image}
                        alt={room.roomName || "Room Image"}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-extrabold text-black dark:text-[#F6F0E4]">
                        {room.roomName}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>
                      <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
                        <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                        {room.floor || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
                      <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
                        Rate
                      </p>
                      <p className="mt-1 text-base font-black text-black dark:text-[#F6F0E4]">
                        ${room.hourlyRate}/hr
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
                      <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
                        Bookings
                      </p>
                      <p className="mt-1 text-base font-black text-black dark:text-[#F6F0E4]">
                        {room.bookings || 0}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => router.push(`/Rooms/${room._id}`)}
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      onClick={() => handleEditClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
            <div>
              <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
                You haven&apos;t listed any study rooms yet.
              </p>
              <button
                type="button"
                className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
                Add your first room
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Edit Modal Component */}
      <EditModalPage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={selectedRoom}
        onUpdate={handleUpdateRoom}
      />

      {/* Custom Center Confirmation Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[24px] border border-red-500/20 bg-white dark:border-red-500/10 dark:bg-[#0b1733] p-6 shadow-2xl transition-colors duration-300 text-[#1f1f1f] dark:text-[#F6F0E4] text-center">
            {/* Close Cross icon */}
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 dark:text-[#F6F0E4]/60 dark:hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>

            {/* Warning Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400">
              <AlertTriangle className="h-7 w-7" />
            </div>

            {/* Modal Contents */}
            <h3 className="text-xl font-black text-slate-900 dark:text-[#F6F0E4]">
              Delete Room?
            </h3>
            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/70 px-2">
              Are you sure you want to permanently delete{" "}
              <span className="font-extrabold text-red-500 dark:text-red-400">
                `{roomToDelete?.roomName}`
              </span>
              ? This action cannot be undone.
            </p>

            {/* Buttons Layout */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setIsDeleteModalOpen(false)}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:bg-white/5 disabled:opacity-50">
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="rounded-2xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 shadow-md shadow-red-500/10 disabled:opacity-50">
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MyListingPage;
