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
//     <main className="min-h-screen  text-[#1f1f1f]">
//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] sm:text-4xl">
//               My Listings
//             </h1>

//             <p className="mt-2 text-sm text-[#55504a] sm:text-base">
//               {rooms.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(0,119,91,0.22)] transition hover:bg-[#00634c] active:scale-[0.98]">
//             <Plus className="h-4 w-4" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
//               Active Listings
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">
//               {rooms.length}
//             </h2>
//           </div>

//           <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
//               <DollarSign className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
//               Revenue
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">
//               $1,284
//             </h2>
//           </div>

//           <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)] sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
//               <TrendingUp className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
//               Avg Occupancy
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">78%</h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-3xl border border-[#00775B]/15 bg-white shadow-[0_20px_60px_rgba(0,119,91,0.08)] lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-[#00775B]/10 px-6 py-4">
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                   Room
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                   Location
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                   Rate
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
//                   Actions
//                 </p>
//               </div>

//               {rooms.map((room) => (
//                 <div
//                   key={room.id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-[#00775B]/10 px-6 py-5 last:border-b-0">
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={56}
//                       height={56}
//                       className="h-14 w-14 rounded-2xl object-cover"
//                     />

//                     <div>
//                       <h3 className="text-base font-bold text-[#1f1f1f]">
//                         {room.name}
//                       </h3>

//                       <p className="text-sm text-[#55504a]">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-medium text-[#55504a]">
//                     {room.location}
//                   </p>

//                   <p className="text-sm font-bold text-[#1f1f1f]">
//                     ${room.rate}/hr
//                   </p>

//                   <p className="text-sm font-bold text-[#1f1f1f]">
//                     {room.bookings}
//                   </p>

//                   <div className="flex justify-end gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-red-500/20 bg-white text-red-500 transition hover:bg-red-500 hover:text-white">
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
//                   className="rounded-3xl border border-[#00775B]/15 bg-white p-4 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
//                   <div className="flex gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={80}
//                       height={80}
//                       className="h-20 w-20 rounded-2xl object-cover"
//                     />

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold text-[#1f1f1f]">
//                         {room.name}
//                       </h3>

//                       <p className="mt-1 text-sm text-[#55504a]">
//                         Cap {room.capacity}
//                       </p>

//                       <p className="mt-2 flex items-center gap-1 text-sm font-medium text-[#55504a]">
//                         <MapPin className="h-4 w-4 text-[#00775B]" />
//                         {room.location}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-[#00775B]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-[#55504a]">
//                         Rate
//                       </p>

//                       <p className="mt-1 text-base font-extrabold text-[#00775B]">
//                         ${room.rate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-[#00775B]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-[#55504a]">
//                         Bookings
//                       </p>

//                       <p className="mt-1 text-base font-extrabold text-[#00775B]">
//                         {room.bookings}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 bg-white px-3 py-3 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 bg-white px-3 py-3 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-500/20 bg-white px-3 py-3 text-red-500 transition hover:bg-red-500 hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-3xl border border-[#00775B]/15 bg-white p-6 text-center shadow-[0_20px_60px_rgba(0,119,91,0.08)] sm:min-h-65">
//             <div>
//               <p className="text-base font-medium text-[#55504a] sm:text-lg">
//                 You haven&apos;t listed any study rooms yet.
//               </p>

//               <button
//                 type="button"
//                 className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] transition hover:text-[#00634c] sm:text-lg">
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
//     <main className="min-h-screen bg-white text-[#1f1f1f] dark:bg-[#07111f] dark:text-[#F6F0E4] transition-colors duration-300">
//       <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
//         {/* Top Part */}
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
//               My Listings
//             </h1>

//             <p className="mt-2 text-sm text-[#55504a] dark:text-[#F6F0E4]/75 sm:text-base">
//               {rooms.length} active listings · {totalBookings} total bookings
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] dark:bg-[#0e9b75] px-5 py-3 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_14px_30px_rgba(0,119,91,0.15)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.98]">
//             <Plus className="h-4 w-4" />
//             New listing
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <CalendarCheck className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//               Active Listings
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//               {rooms.length}
//             </h2>
//           </div>

//           <div className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <DollarSign className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//               Revenue
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//               $1,284
//             </h2>
//           </div>

//           <div className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl sm:col-span-2 lg:col-span-1">
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
//               <TrendingUp className="h-5 w-5" />
//             </div>

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//               Avg Occupancy
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//               78%
//             </h2>
//           </div>
//         </div>

//         {hasRooms ? (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl lg:block">
//               <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-[#00775B]/10 dark:border-[#F6F0E4]/10 px-6 py-4">
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                   Room
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                   Location
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                   Rate
//                 </p>
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                   Bookings
//                 </p>
//                 <p className="text-right text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a] dark:text-[#F6F0E4]/60">
//                   Actions
//                 </p>
//               </div>

//               {rooms.map((room) => (
//                 <div
//                   key={room.id}
//                   className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-[#00775B]/10 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0">
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={56}
//                       height={56}
//                       className="h-14 w-14 rounded-2xl object-cover"
//                     />

//                     <div>
//                       <h3 className="text-base font-bold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                         {room.name}
//                       </h3>

//                       <p className="text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
//                     {room.location}
//                   </p>

//                   <p className="text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                     ${room.rate}/hr
//                   </p>

//                   <p className="text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                     {room.bookings}
//                   </p>

//                   <div className="flex justify-end gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/80 transition hover:border-[#00775B] dark:hover:border-[#0e9b75] hover:bg-[#00775B] dark:hover:bg-[#0e9b75] hover:text-white dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-4 py-2 text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/80 transition hover:border-[#00775B] dark:hover:border-[#0e9b75] hover:bg-[#00775B] dark:hover:bg-[#0e9b75] hover:text-white dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-red-500/20 bg-white dark:bg-transparent text-red-500 dark:text-red-400 transition hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white">
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
//                   className="rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-4 shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl">
//                   <div className="flex gap-4">
//                     <Image
//                       src={room.image}
//                       alt={room.name}
//                       width={80}
//                       height={80}
//                       className="h-20 w-20 rounded-2xl object-cover"
//                     />

//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-lg font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]">
//                         {room.name}
//                       </h3>

//                       <p className="mt-1 text-sm text-[#55504a] dark:text-[#F6F0E4]/60">
//                         Cap {room.capacity}
//                       </p>

//                       <p className="mt-2 flex items-center gap-1 text-sm font-medium text-[#55504a] dark:text-[#F6F0E4]/70">
//                         <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                         {room.location}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-2 gap-3">
//                     <div className="rounded-2xl bg-[#00775B]/5 dark:bg-[#07111f]/60 border border-transparent dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-[#55504a] dark:text-[#F6F0E4]/60">
//                         Rate
//                       </p>

//                       <p className="mt-1 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//                         ${room.rate}/hr
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-[#00775B]/5 dark:bg-[#07111f]/60 border border-transparent dark:border-[#F6F0E4]/5 p-3">
//                       <p className="text-xs font-bold uppercase text-[#55504a] dark:text-[#F6F0E4]/60">
//                         Bookings
//                       </p>

//                       <p className="mt-1 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//                         {room.bookings}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-3 gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-3 py-3 text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/80 transition hover:border-[#00775B] dark:hover:border-[#0e9b75] hover:bg-[#00775B] dark:hover:bg-[#0e9b75] hover:text-white dark:hover:text-[#07111f]">
//                       <Eye className="h-4 w-4" />
//                       View
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-3 py-3 text-sm font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/80 transition hover:border-[#00775B] dark:hover:border-[#0e9b75] hover:bg-[#00775B] dark:hover:bg-[#0e9b75] hover:text-white dark:hover:text-[#07111f]">
//                       <Pencil className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-500/20 bg-white dark:bg-transparent px-3 py-3 text-red-500 dark:text-red-400 transition hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/15 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 text-center shadow-[0_20px_55px_rgba(0,119,91,0.03)] dark:shadow-none backdrop-blur-xl sm:min-h-65">
//             <div>
//               <p className="text-base font-medium text-[#55504a] dark:text-[#F6F0E4]/80 sm:text-lg">
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

"use client";

import React from "react";
import Image from "next/image";
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
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Oak Reading Room",
    capacity: 4,
    location: "Floor 4 · East Wing",
    rate: 12,
    bookings: 142,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "The Glass Cube",
    capacity: 2,
    location: "Floor 1 · Atrium",
    rate: 18,
    bookings: 89,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "The Thesis Studio",
    capacity: 1,
    location: "Floor 4 · West Wing",
    rate: 15,
    bookings: 76,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop",
  },
];

const MyListingPage = () => {
  const hasRooms = rooms.length > 0;
  const totalBookings = rooms.reduce((total, room) => total + room.bookings, 0);

  return (
    <main className="min-h-screen  text-black dark:text-[#F6F0E4] transition-colors duration-300">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Top Part */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
              My Listings
            </h1>

            <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
              {rooms.length} active listings · {totalBookings} total bookings
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
          {/* Active Listings Card */}
          <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
              Active Listings
            </p>
            <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
              {rooms.length}
            </h2>
          </div>

          {/* Revenue Card */}
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

          {/* Avg Occupancy Card */}
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
                  Location
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

              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
                  <div className="flex items-center gap-4">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-base font-extrabold !text-black dark:!text-[#F6F0E4]">
                        {room.name}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
                    {room.location}
                  </p>

                  <p className="text-sm font-extrabold !text-black dark:!text-[#F6F0E4]">
                    ${room.rate}/hr
                  </p>

                  <p className="text-sm font-extrabold !text-black dark:!text-[#F6F0E4]">
                    {room.bookings}
                  </p>

                  <div className="flex justify-end gap-2.5">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
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
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
                  <div className="flex gap-4">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-extrabold !text-black dark:!text-[#F6F0E4]">
                        {room.name}
                      </h3>

                      <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>

                      <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
                        <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                        {room.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
                      <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
                        Rate
                      </p>
                      <p className="mt-1 text-base font-black !text-black dark:!text-[#F6F0E4]">
                        ${room.rate}/hr
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 dark:bg-[#07111f]/60 border border-slate-200/60 dark:border-[#F6F0E4]/5 p-3">
                      <p className="text-xs font-bold uppercase text-slate-500 dark:text-[#F6F0E4]/60">
                        Bookings
                      </p>
                      <p className="mt-1 text-base font-black !text-black dark:!text-[#F6F0E4]">
                        {room.bookings}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
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
    </main>
  );
};

export default MyListingPage;
