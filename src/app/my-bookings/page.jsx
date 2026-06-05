"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  XCircle,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    roomName: "Oak Reading Room",
    status: "confirmed",
    date: "May 22, 2026",
    time: "10:00 – 13:00",
    location: "Library",
    note: "Final exam revision session.",
    total: 36,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    roomName: "The Glass Cube",
    status: "confirmed",
    date: "May 24, 2026",
    time: "14:00 – 16:00",
    location: "Library",
    note: "",
    total: 36,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    roomName: "Boardroom 201",
    status: "cancelled",
    date: "May 18, 2026",
    time: "09:00 – 11:00",
    location: "Library",
    note: "Rescheduled to next week.",
    total: 50,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=500&auto=format&fit=crop",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Confirmed", value: "confirmed" },
  { label: "Cancelled", value: "cancelled" },
];

const MyBookingPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBookings = useMemo(() => {
    if (activeTab === "all") return bookings;
    return bookings.filter((booking) => booking.status === activeTab);
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-28 sm:px-6 sm:pb-32 md:pt-10 md:pb-40 lg:px-5">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center sm:mb-28 md:mb-32">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] sm:text-4xl md:text-5xl">
            My Bookings
          </h1>

          <p className="mt-3 text-sm text-[#55504a] sm:text-base md:text-lg">
            Manage upcoming and past sessions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 ml-2 flex justify-start sm:mb-12">
          <div className="flex w-full max-w-md gap-1.5 rounded-full border border-[#00775B]/20 bg-white p-1.5 shadow-[0_14px_35px_rgba(0,119,91,0.08)] sm:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold transition sm:flex-none sm:px-5 ${
                    isActive
                      ? "bg-[#00775B] text-white shadow-[0_10px_25px_rgba(0,119,91,0.22)]"
                      : "bg-white text-[#55504a] hover:bg-[#00775B]/10 hover:text-[#00775B]"
                  }`}
                >
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
              const isConfirmed = booking.status === "confirmed";

              return (
                <article
                  key={booking.id}
                  className="rounded-3xl border border-[#00775B]/15 bg-white p-4 shadow-[0_18px_50px_rgba(0,119,91,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(0,119,91,0.12)] sm:p-5 lg:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    {/* Image */}
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-3xl sm:h-56 lg:h-32 lg:w-36">
                      <Image
                        src={booking.image}
                        alt={booking.roomName}
                        fill
                        sizes="(max-width: 1024px) 100vw, 144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Main Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <h2 className="text-xl font-extrabold text-[#1f1f1f]">
                          {booking.roomName}
                        </h2>

                        <span
                          className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                            isConfirmed
                              ? "bg-[#00775B]/10 text-[#00775B]"
                              : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {isConfirmed ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5" />
                          )}
                          {booking.status}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#55504a]">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-[#00775B]" />
                          {booking.date}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-[#00775B]" />
                          {booking.time}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#00775B]" />
                          {booking.location}
                        </span>
                      </div>

                      {booking.note && (
                        <div className="mt-4 rounded-2xl border border-[#00775B]/15 bg-[#00775B]/5 px-4 py-3 text-sm font-medium text-[#55504a]">
                          {booking.note}
                        </div>
                      )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#00775B]/10 pt-4 lg:w-28 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
                      <div className="text-left lg:text-right">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                          Total
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-[#00775B]">
                          ${booking.total}
                        </p>
                      </div>

                      {isConfirmed && (
                        <button
                          type="button"
                          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/20 bg-white px-4 py-2 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                        >
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
          <div className="flex min-h-57.5 items-center justify-center rounded-3xl border border-[#00775B]/15 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,119,91,0.08)] sm:min-h-65">
            <div>
              <p className="text-base font-bold text-[#55504a] sm:text-lg">
                No {activeTab === "all" ? "" : activeTab} bookings found.
              </p>

              <p className="mt-2 text-sm text-[#55504a]">
                Your booking data will appear here.
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default MyBookingPage;