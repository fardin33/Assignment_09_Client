// import React, { useState } from "react";
// import { Calendar } from "lucide-react";

// const BookingModalPage = () => {
//   const [date, setDate] = useState("2026-05-15");
//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("11:00");
//   const [note, setNote] = useState("");

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-stone-900/50 p-4">
//       {/* Modal Container */}
//       <div className="w-full max-w-lg bg-[#0e1411] text-[#e4e7e5] rounded-2xl p-6 md:p-8 border border-stone-800 shadow-2xl relative">
//         {/* Close Button */}
//         <button className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
//             Book Quiet Pod 3A
//           </h2>
//           <p className="text-sm text-stone-400">
//             Pick a date and time slot. Bookings run on the hour.
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
//           {/* Date Picker Field */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-stone-300">
//               Date
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-stone-400">
//                 <Calendar size={18} />
//               </span>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-600 transition-colors cursor-pointer scheme-dark"
//               />
//             </div>
//           </div>

//           {/* Time Slots (Start & End) */}
//           <div className="grid grid-cols-2 gap-4">
//             {/* Start Time */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-stone-300">
//                 Start
//               </label>
//               <div className="relative">
//                 <select
//                   value={startTime}
//                   onChange={(e) => setStartTime(e.target.value)}
//                   className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-600 transition-colors appearance-none cursor-pointer">
//                   <option value="09:00">09:00</option>
//                   <option value="10:00">10:00</option>
//                   <option value="11:00">11:00</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-stone-400">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* End Time */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-stone-300">
//                 End
//               </label>
//               <div className="relative">
//                 <select
//                   value={endTime}
//                   onChange={(e) => setEndTime(e.target.value)}
//                   className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-600 transition-colors appearance-none cursor-pointer">
//                   <option value="11:00">11:00</option>
//                   <option value="12:00">12:00</option>
//                   <option value="13:00">13:00</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-stone-400">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Special Note Field */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-stone-300">
//               Special note (optional)
//             </label>
//             <textarea
//               rows={3}
//               placeholder="Any setup needed?"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               className="w-full bg-[#131a16] border border-stone-800 rounded-xl p-4 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-600 transition-colors resize-none"
//             />
//           </div>

//           {/* Total Cost Display */}
//           <div className="bg-[#131a16]/60 border border-stone-800/50 rounded-xl p-4 flex justify-between items-center mt-6">
//             <span className="text-stone-400 font-medium">Total cost</span>
//             <span className="text-2xl font-serif font-bold text-[#dfb15b]">
//               $10
//             </span>
//           </div>

//           {/* Actions Buttons */}
//           <div className="flex justify-end items-center gap-4 pt-4">
//             <button
//               type="button"
//               className="px-5 py-3 rounded-xl text-stone-300 hover:text-white transition-colors font-medium text-sm">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-[#eebb5c] hover:bg-[#dba84b] text-black font-semibold rounded-xl transition-all text-sm shadow-md">
//               Confirm Booking
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModalPage;

//================================

// "use client";
// import React, { useState } from "react";
// import { Calendar } from "lucide-react";

// const BookingModal = ({ isOpen, onClose, room }) => {
//   const [date, setDate] = useState("2026-05-15");
//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("11:00");
//   const [note, setNote] = useState("");

//   if (!isOpen) return null;

//   const startHour = parseInt(startTime.split(":")[0]);
//   const endHour = parseInt(endTime.split(":")[0]);
//   const hours = endHour > startHour ? endHour - startHour : 1;
//   const totalCost = hours * (room?.hourlyRate || 10);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//       {/* Modal Container */}
//       <div className="w-full max-w-lg bg-[#0e1411] text-[#e4e7e5] rounded-2xl p-6 md:p-8 border border-stone-800 shadow-2xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
//             Book {room?.roomName || "Quiet Pod"}
//           </h2>
//           <p className="text-sm text-stone-400">
//             Pick a date and time slot. Bookings run on the hour.
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Booking confirmed!");
//             onClose();
//           }}
//           className="space-y-5">
//           {/* Date Picker Field */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-stone-300">
//               Date
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-stone-400">
//                 <Calendar size={18} />
//               </span>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-600 transition-colors cursor-pointer scheme-dark"
//               />
//             </div>
//           </div>

//           {/* Time Slots */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-stone-300">
//                 Start
//               </label>
//               <div className="relative">
//                 <select
//                   value={startTime}
//                   onChange={(e) => setStartTime(e.target.value)}
//                   className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-600 transition-colors appearance-none cursor-pointer">
//                   <option value="09:00">09:00</option>
//                   <option value="10:00">10:00</option>
//                   <option value="11:00">11:00</option>
//                 </select>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-stone-300">
//                 End
//               </label>
//               <div className="relative">
//                 <select
//                   value={endTime}
//                   onChange={(e) => setEndTime(e.target.value)}
//                   className="w-full bg-[#131a16] border border-stone-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-600 transition-colors appearance-none cursor-pointer">
//                   <option value="11:00">11:00</option>
//                   <option value="12:00">12:00</option>
//                   <option value="13:00">13:00</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Special Note */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-stone-300">
//               Special note (optional)
//             </label>
//             <textarea
//               rows={3}
//               placeholder="Any setup needed?"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               className="w-full bg-[#131a16] border border-stone-800 rounded-xl p-4 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-600 transition-colors resize-none"
//             />
//           </div>

//           {/* Total Cost */}
//           <div className="bg-[#131a16]/60 border border-stone-800/50 rounded-xl p-4 flex justify-between items-center mt-6">
//             <span className="text-stone-400 font-medium">Total cost</span>
//             <span className="text-2xl font-serif font-bold text-[#dfb15b]">
//               ${totalCost}
//             </span>
//           </div>

//           <div className="flex justify-end items-center gap-4 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-3 rounded-xl text-stone-300 hover:text-white transition-colors font-medium text-sm">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-[#eebb5c] hover:bg-[#dba84b] text-black font-semibold rounded-xl transition-all text-sm shadow-md">
//               Confirm Booking
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

//==================================
// "use client";
// import React, { useState } from "react";
// import { Calendar } from "lucide-react";

// const BookingModal = ({ isOpen, onClose, room, user }) => {
//   const [date, setDate] = useState("2026-05-15");

//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("12:00");
//   const [note, setNote] = useState("");
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const startHour = parseInt(startTime.split(":")[0]);
//   const endHour = parseInt(endTime.split(":")[0]);
//   const hours = endHour > startHour ? endHour - startHour : 1;
//   const totalCost = hours * (room?.hourlyRate || 10);

//   const { _id, roomName, imageUrl, price } = room || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user || !user.email) {
//       alert("Please log in first to book a room!");
//       return;
//     }

//     setLoading(true);

//     const bookingData = {
//       userId: user?.id || user?.uid || user?._id,
//       userImage: user?.image || user?.photoURL || "",
//       userName: user?.name || user?.displayName || "Anonymous User",
//       userEmail: user?.email,
//       roomId: _id,
//       roomName: roomName || "Awesome Training Room",
//       price: price || room?.hourlyRate || 10,
//       totalCost,
//       date,
//       startTime,
//       endTime,
//       note,
//       imageUrl: imageUrl || "",
//       bookedAt: new Date(),
//     };

//     const result = await createBooking(bookingData);

//     setLoading(false);

//     if (result) {
//       alert("Booking confirmed successfully!");
//       onClose();
//     } else {
//       alert("Something went wrong! Failed to confirm booking.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//       <div className="w-full max-w-lg bg-[#0d1b3e] text-[#f8fafc] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2.5}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
//             Book {roomName || "Awesome Training Room"}
//           </h2>
//           <p className="text-sm text-slate-400/90 font-medium">
//             Pick a date and time slot. Bookings run on the hour.
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Date Picker Field */}
//           <div className="space-y-2">
//             <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//               Date
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
//                 <Calendar size={16} />
//               </span>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors cursor-pointer scheme-dark"
//               />
//             </div>
//           </div>

//           {/* Time Slots */}
//           <div className="grid grid-cols-2 gap-4">
//             {/* Start Time */}
//             <div className="space-y-2">
//               <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                 Start
//               </label>
//               <div className="relative">
//                 <select
//                   value={startTime}
//                   onChange={(e) => setStartTime(e.target.value)}
//                   className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                   <option value="07:00">07:00 AM</option>
//                   <option value="08:00">08:00 AM</option>
//                   <option value="09:00">09:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                 </select>
//               </div>
//             </div>

//             {/* End Time */}
//             <div className="space-y-2">
//               <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                 End
//               </label>
//               <div className="relative">
//                 <select
//                   value={endTime}
//                   onChange={(e) => setEndTime(e.target.value)}
//                   className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                   <option value="13:00">01:00 PM</option>
//                   <option value="14:00">02:00 PM</option>
//                   <option value="15:00">03:00 PM</option>
//                   <option value="17:00">05:00 PM</option>
//                   <option value="18:00">06:00 PM</option>
//                   <option value="19:00">07:00 PM</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Special Note */}
//           <div className="space-y-2">
//             <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//               Special note (optional)
//             </label>
//             <textarea
//               rows={3}
//               placeholder="Any setup needed?"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               className="w-full bg-[#0a142e] border border-white/5 rounded-2xl p-4 text-white font-semibold placeholder-slate-600 focus:outline-none focus:border-[#006B4F] transition-colors resize-none"
//             />
//           </div>

//           {/* Total Cost Section */}
//           <div className="bg-[#0a142e]/60 border border-white/5 rounded-2xl p-5 flex justify-between items-center mt-6">
//             <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
//               Total cost
//             </span>
//             <span className="text-3xl font-black text-white">${totalCost}</span>
//           </div>

//           <div className="flex items-center gap-4 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               disabled={loading}
//               className="flex-1 py-3.5 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-extrabold rounded-2xl transition-all text-sm tracking-wide disabled:opacity-50">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="flex-1 py-3.5 bg-[#006B4F] hover:bg-[#00523c] text-white font-extrabold rounded-2xl transition-all text-sm shadow-lg shadow-[#006B4F]/25 tracking-wide disabled:bg-emerald-800">
//               {loading ? "Confirming..." : "Confirm Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

//===============================
// "use client";
// import React, { useState, useEffect } from "react";
// import { Calendar, CheckCircle2, X } from "lucide-react";
// import { createBooking } from "@/data/roomsData"; // ইমপোর্ট করা হলো

// const BookingModal = ({ isOpen, onClose, room, user }) => {
//   const [date, setDate] = useState("2026-05-15");
//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("12:00");
//   const [note, setNote] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   // সাকসেস টোস্ট ৩ সেকেন্ড পর অটোমেটিক চলে যাবে
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => {
//         setShowToast(false);
//         onClose();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast, onClose]);

//   if (!isOpen && !showToast) return null;

//   const startHour = parseInt(startTime.split(":")[0]);
//   const endHour = parseInt(endTime.split(":")[0]);

//   const isValidTime = endHour > startHour;
//   const hours = isValidTime ? endHour - startHour : 0;

//   const dynamicHourlyRate =
//     room?.hourlyRate || room?.price
//       ? Math.round((room?.hourlyRate || room?.price) / 2)
//       : 5;

//   const calculatedCost = hours * dynamicHourlyRate;
//   const totalCost = Math.min(calculatedCost, 100);

//   const { _id, roomName, imageUrl } = room || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user || !user.email) {
//       alert("Please log in first to book a room!");
//       return;
//     }

//     if (!isValidTime) {
//       alert("End time must be after the start time!");
//       return;
//     }

//     setLoading(true);

//     const bookingData = {
//       userId: user?.id || user?.uid || user?._id,
//       userImage: user?.image || user?.photoURL || "",
//       userName: user?.name || user?.displayName || "Anonymous User",
//       userEmail: user?.email,
//       roomId: _id,
//       roomName: roomName || "Awesome Training Room",
//       price: dynamicHourlyRate,
//       totalCost,
//       date,
//       startTime,
//       endTime,
//       note,
//       imageUrl: imageUrl || "",
//       bookedAt: new Date(),
//     };

//     try {
//       const result = await createBooking(bookingData);
//       if (result) {
//         setShowToast(true); // সাকসেস টোস্ট ট্রিগার
//       } else {
//         alert("Something went wrong! Failed to confirm booking.");
//       }
//     } catch (error) {
//       console.error("Booking Error:", error);
//       alert("An error occurred while creating the booking.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Top Right Mini Success Toast */}
//       {showToast && (
//         <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[#006B4F] text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/20 animate-bounce">
//           <CheckCircle2 size={20} className="text-white" />
//           <div className="flex flex-col">
//             <span className="font-extrabold text-sm">Booking Confirmed!</span>
//             <span className="text-xs text-white/80">
//               Your slot is successfully locked.
//             </span>
//           </div>
//           <button
//             onClick={() => setShowToast(false)}
//             className="ml-2 hover:opacity-70">
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* Modal View */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-lg bg-[#0d1b3e] text-[#f8fafc] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative">
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2.5}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Header */}
//             <div className="mb-6">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
//                 Book {roomName || "Awesome Training Room"}
//               </h2>
//               <p className="text-sm text-slate-400/90 font-medium">
//                 Price updates automatically based on hours. (Discounted Rate: $
//                 {dynamicHourlyRate}/hr)
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Date Picker Field */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                   Date
//                 </label>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
//                     <Calendar size={16} />
//                   </span>
//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors cursor-pointer scheme-dark"
//                   />
//                 </div>
//               </div>

//               {/* Time Slots */}
//               <div className="grid grid-cols-2 gap-4">
//                 {/* Start Time */}
//                 <div className="space-y-2">
//                   <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                     Start
//                   </label>
//                   <div className="relative">
//                     <select
//                       value={startTime}
//                       onChange={(e) => setStartTime(e.target.value)}
//                       className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                       <option value="07:00">07:00 AM</option>
//                       <option value="08:00">08:00 AM</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="10:00">10:00 AM</option>
//                       <option value="11:00">11:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* End Time */}
//                 <div className="space-y-2">
//                   <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                     End
//                   </label>
//                   <div className="relative">
//                     <select
//                       value={endTime}
//                       onChange={(e) => setEndTime(e.target.value)}
//                       className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                       <option value="13:00">01:00 PM</option>
//                       <option value="14:00">02:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="17:00">05:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                       <option value="19:00">07:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Special Note */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                   Special note (optional)
//                 </label>
//                 <textarea
//                   rows={3}
//                   placeholder="Any setup needed?"
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                   className="w-full bg-[#0a142e] border border-white/5 rounded-2xl p-4 text-white font-semibold placeholder-slate-600 focus:outline-none focus:border-[#006B4F] transition-colors resize-none"
//                 />
//               </div>

//               {/* Total Cost Section */}
//               <div className="bg-[#0a142e]/60 border border-white/5 rounded-2xl p-5 flex justify-between items-center mt-6">
//                 <div className="flex flex-col">
//                   <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
//                     Total cost
//                   </span>
//                   <span className="text-xs text-slate-500 font-medium mt-0.5">
//                     Total Hours: {hours} hr{hours > 1 ? "s" : ""}
//                   </span>
//                 </div>
//                 <span className="text-3xl font-black text-white">
//                   ${totalCost}
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   disabled={loading}
//                   className="flex-1 py-3.5 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-extrabold rounded-2xl transition-all text-sm tracking-wide disabled:opacity-50 cursor-pointer">
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading || !isValidTime}
//                   className="flex-1 py-3.5 bg-[#006B4F] hover:bg-[#00523c] text-white font-extrabold rounded-2xl transition-all text-sm shadow-lg shadow-[#006B4F]/25 tracking-wide disabled:bg-slate-700 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer">
//                   {!isValidTime
//                     ? "Invalid Time"
//                     : loading
//                       ? "Confirming..."
//                       : "Confirm Booking"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookingModal;

//==============================
// "use client";
// import React, { useState, useEffect } from "react";
// import { Calendar, CheckCircle2, AlertTriangle, X } from "lucide-react";
// import { createBooking } from "@/data/roomsData";

// const BookingModal = ({ isOpen, onClose, room, user }) => {
//   const [date, setDate] = useState("2026-05-15");
//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("12:00");
//   const [note, setNote] = useState("");
//   const [loading, setLoading] = useState(false);

//   // টোস্ট স্টেইট ম্যানেজমেন্ট
//   const [toast, setToast] = useState({
//     show: false,
//     type: "",
//     message: "",
//     title: "",
//   });

//   useEffect(() => {
//     if (toast.show) {
//       const timer = setTimeout(() => {
//         setToast({ show: false, type: "", message: "", title: "" });
//       }, 4500);
//       return () => clearTimeout(timer);
//     }
//   }, [toast.show]);

//   if (!isOpen && !toast.show) return null;

//   const startHour = parseInt(startTime.split(":")[0]);
//   const endHour = parseInt(endTime.split(":")[0]);

//   const isValidTime = endHour > startHour;
//   const hours = isValidTime ? endHour - startHour : 0;

//   const dynamicHourlyRate =
//     room?.hourlyRate || room?.price
//       ? Math.round((room?.hourlyRate || room?.price) / 2)
//       : 5;

//   const calculatedCost = hours * dynamicHourlyRate;
//   const totalCost = Math.min(calculatedCost, 100);

//   const { _id, roomName, imageUrl } = room || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user || !user.email) {
//       setToast({
//         show: true,
//         type: "error",
//         title: "Authentication Required",
//         message: "Please log in first to book a room!",
//       });
//       return;
//     }

//     if (!isValidTime) {
//       setToast({
//         show: true,
//         type: "error",
//         title: "Invalid Duration",
//         message: "End time must be after the start time!",
//       });
//       return;
//     }

//     setLoading(true);

//     const bookingData = {
//       userId: user?.id || user?.uid || user?._id,
//       userImage: user?.image || user?.photoURL || "",
//       userName: user?.name || user?.displayName || "Anonymous User",
//       userEmail: user?.email,
//       roomId: _id,
//       roomName: roomName || "Awesome Training Room",
//       price: dynamicHourlyRate,
//       totalCost,
//       date,
//       startTime,
//       endTime,
//       note,
//       imageUrl: imageUrl || "",
//       bookedAt: new Date(),
//     };

//     try {
//       const response = await fetch("http://localhost:8000/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         if (data.error === "already_booked") {
//           setToast({
//             show: true,
//             type: "error",
//             title: "Slot Unavailable",
//             message:
//               "This room is already booked! Please select another time or room.",
//           });
//         } else {
//           throw new Error(data.message || "Failed to book");
//         }
//         return;
//       }

//       if (data.result) {
//         // সফল হলে মোডাল বন্ধ হবে এবং হোয়াইট সাকসেস টোস্ট দেখাবে
//         onClose();
//         setToast({
//           show: true,
//           type: "success",
//           title: "Booking Confirmed!",
//           message: "Your slot is successfully locked.",
//         });
//       }
//     } catch (error) {
//       console.error("Booking Error:", error);
//       setToast({
//         show: true,
//         type: "error",
//         title: "Booking Failed",
//         message: "An error occurred while creating the booking.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Dynamic Top Right White Background Toast */}
//       {toast.show && (
//         <div className="fixed top-6 right-6 z-[100] flex items-center gap-4 bg-white text-slate-800 px-5 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[320px] transition-all duration-300 ease-out animate-in fade-in slide-in-from-top-4">
//           <div className="flex shrink-0 items-center justify-center">
//             {toast.type === "success" ? (
//               <CheckCircle2 size={24} className="text-[#006B4F]" />
//             ) : (
//               <AlertTriangle size={24} className="text-amber-500" />
//             )}
//           </div>
//           <div className="flex-1 flex flex-col gap-0.5">
//             <span className="font-extrabold text-sm text-slate-900">
//               {toast.title}
//             </span>
//             <span className="text-xs text-slate-500 font-medium leading-relaxed">
//               {toast.message}
//             </span>
//           </div>
//           <button
//             onClick={() => setToast({ ...toast, show: false })}
//             className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50 cursor-pointer">
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* Modal View */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-lg bg-[#0d1b3e] text-[#f8fafc] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative">
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer">
//               <X size={16} />
//             </button>

//             {/* Header */}
//             <div className="mb-6">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
//                 Book {roomName || "Awesome Training Room"}
//               </h2>
//               <p className="text-sm text-slate-400/90 font-medium">
//                 Price updates automatically based on hours. (Discounted Rate: $
//                 {dynamicHourlyRate}/hr)
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Date */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                   Date
//                 </label>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
//                     <Calendar size={16} />
//                   </span>
//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors cursor-pointer scheme-dark"
//                   />
//                 </div>
//               </div>

//               {/* Time Slots */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                     Start
//                   </label>
//                   <select
//                     value={startTime}
//                     onChange={(e) => setStartTime(e.target.value)}
//                     className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                     <option value="07:00">07:00 AM</option>
//                     <option value="08:00">08:00 AM</option>
//                     <option value="09:00">09:00 AM</option>
//                     <option value="10:00">10:00 AM</option>
//                     <option value="11:00">11:00 AM</option>
//                     <option value="12:00">12:00 PM</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                     End
//                   </label>
//                   <select
//                     value={endTime}
//                     onChange={(e) => setEndTime(e.target.value)}
//                     className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] transition-colors appearance-none cursor-pointer">
//                     <option value="13:00">01:00 PM</option>
//                     <option value="14:00">02:00 PM</option>
//                     <option value="15:00">03:00 PM</option>
//                     <option value="17:00">05:00 PM</option>
//                     <option value="18:00">06:00 PM</option>
//                     <option value="19:00">07:00 PM</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Special Note */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
//                   Special note (optional)
//                 </label>
//                 <textarea
//                   rows={3}
//                   placeholder="Any setup needed?"
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                   className="w-full bg-[#0a142e] border border-white/5 rounded-2xl p-4 text-white font-semibold placeholder-slate-600 focus:outline-none focus:border-[#006B4F] transition-colors resize-none"
//                 />
//               </div>

//               {/* Total Cost */}
//               <div className="bg-[#0a142e]/60 border border-white/5 rounded-2xl p-5 flex justify-between items-center mt-6">
//                 <div className="flex flex-col">
//                   <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
//                     Total cost
//                   </span>
//                   <span className="text-xs text-slate-500 font-medium mt-0.5">
//                     Total Hours: {hours} hr{hours > 1 ? "s" : ""}
//                   </span>
//                 </div>
//                 <span className="text-3xl font-black text-white">
//                   ${totalCost}
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   disabled={loading}
//                   className="flex-1 py-3.5 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-extrabold rounded-2xl transition-all text-sm tracking-wide disabled:opacity-50 cursor-pointer">
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading || !isValidTime}
//                   className="flex-1 py-3.5 bg-[#006B4F] hover:bg-[#00523c] text-white font-extrabold rounded-2xl transition-all text-sm shadow-lg shadow-[#006B4F]/25 tracking-wide disabled:bg-slate-700 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer">
//                   {!isValidTime
//                     ? "Invalid Time"
//                     : loading
//                       ? "Confirming..."
//                       : "Confirm Booking"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookingModal;

//============================
"use client";
import React, { useState, useEffect } from "react";
import { Calendar, CheckCircle2, AlertTriangle, X } from "lucide-react";

const BookingModal = ({ isOpen, onClose, room, user }) => {
  const [date, setDate] = useState("2026-05-15");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("12:00");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
    title: "",
  });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, type: "", message: "", title: "" });
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!isOpen && !toast.show) return null;

  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);

  const isValidTime = endHour > startHour;
  const hours = isValidTime ? endHour - startHour : 0;

  const dynamicHourlyRate =
    room?.hourlyRate || room?.price
      ? Math.round((room?.hourlyRate || room?.price) / 2)
      : 5;

  const calculatedCost = hours * dynamicHourlyRate;
  const totalCost = Math.min(calculatedCost, 100);

  const { _id, roomName, imageUrl } = room || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.email) {
      setToast({
        show: true,
        type: "error",
        title: "Authentication Required",
        message: "Please log in first to book a room!",
      });
      return;
    }

    if (!isValidTime) {
      setToast({
        show: true,
        type: "error",
        title: "Invalid Duration",
        message: "End time must be after the start time!",
      });
      return;
    }

    setLoading(true);

    const bookingData = {
      userId: user?.id || user?.uid || user?._id || "user_123", // ডামি ব্যাকআপ আইডি বা রিয়েল সেশন আইডি
      userImage: user?.image || user?.photoURL || "",
      userName: user?.name || user?.displayName || "Anonymous User",
      userEmail: user?.email,
      roomId: _id,
      roomName: roomName || "Awesome Training Room",
      price: dynamicHourlyRate,
      total: totalCost, // টোটাল ফিল্ডটি মাই বুকিং পেজের অবজেক্ট স্ট্রাকচারের সাথে মিলানো হলো
      date,
      startTime,
      endTime,
      note,
      roomImage: imageUrl || "",
      bookedAt: new Date(),
    };

    try {
      const response = await fetch("http://localhost:8000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to book");
      }

      if (data.result) {
        setToast({
          show: true,
          type: "success",
          title: "Booking Confirmed!",
          message: "Your slot is successfully locked.",
        });
        setNote("");
        onClose();

        // রিয়েলটাইম ডাটা সিঙ্ক করার জন্য পেজ রিলোড হবে
        if (typeof window !== "undefined") {
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        }
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setToast({
        show: true,
        type: "error",
        title: "Booking Failed",
        message:
          error.message || "An error occurred while creating the booking.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast Alert */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-[100] flex items-center gap-4 bg-white text-slate-800 px-5 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[320px] transition-all duration-300 ease-out">
          <div className="flex shrink-0 items-center justify-center">
            {toast.type === "success" ? (
              <CheckCircle2 size={24} className="text-[#006B4F]" />
            ) : (
              <AlertTriangle size={24} className="text-amber-500" />
            )}
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="font-extrabold text-sm text-slate-900">
              {toast.title}
            </span>
            <span className="text-xs text-slate-500 font-medium leading-relaxed">
              {toast.message}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setToast({ ...toast, show: false })}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 cursor-pointer">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0d1b3e] text-[#f8fafc] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer">
              <X size={16} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Book {roomName || "Awesome Training Room"}
              </h2>
              <p className="text-sm text-slate-400/90 font-medium">
                Price updates automatically based on hours. (Discounted Rate: $
                {dynamicHourlyRate}/hr)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Date
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <Calendar size={16} />
                  </span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] cursor-pointer scheme-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Start
                  </label>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] appearance-none cursor-pointer">
                    <option value="07:00">07:00 AM</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    End
                  </label>
                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full bg-[#0a142e] border border-white/5 rounded-2xl py-3.5 px-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] appearance-none cursor-pointer">
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Special note (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any setup needed?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-[#0a142e] border border-white/5 rounded-2xl p-4 text-white font-semibold focus:outline-none focus:border-[#006B4F] resize-none"
                />
              </div>

              <div className="bg-[#0a142e]/60 border border-white/5 rounded-2xl p-5 flex justify-between items-center mt-6">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Total cost
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    Total Hours: {hours} hr{hours > 1 ? "s" : ""}
                  </span>
                </div>
                <span className="text-3xl font-black text-white">
                  ${totalCost}
                </span>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 py-3.5 border border-white/10 hover:bg-white/5 text-slate-300 font-extrabold rounded-2xl transition-all text-sm disabled:opacity-50 cursor-pointer">
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !isValidTime}
                  className="flex-1 py-3.5 bg-[#006B4F] hover:bg-[#00523c] text-white font-extrabold rounded-2xl transition-all text-sm shadow-lg disabled:bg-slate-700 disabled:cursor-not-allowed cursor-pointer">
                  {!isValidTime
                    ? "Invalid Time"
                    : loading
                      ? "Confirming..."
                      : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
