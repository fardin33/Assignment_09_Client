"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { rooms } from "@/data/roomsData";

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#006B4F]/10 bg-[#f8fafc] p-4 dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/45">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#006B4F]/10 text-lg text-[#006B4F] dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#8a94ad] dark:text-[#F6F0E4]/50">
          {label}
        </p>
        <p className="mt-1 text-sm font-extrabold text-[#172033] dark:text-[#F6F0E4]">
          {value}
        </p>
      </div>
    </div>
  );
};

const DetailsPage = () => {
  const params = useParams();
  const roomId = Number(params.id);

  const room = rooms.find((item) => item.id === roomId);

  if (!room) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-4 dark:bg-[#07111f]">
        <div className="max-w-md rounded-3xl border border-[#006B4F]/15 bg-white p-8 text-center shadow-xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]">
          <h1 className="text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
            Room not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#5f6b85] dark:text-[#F6F0E4]/70">
            The room you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            href="/Rooms"
            className="mt-6 inline-flex rounded-full bg-[#006B4F] px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
          >
            Back to Rooms
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] dark:bg-[#07111f]">
      {/* Hero Section */}
      <section className="relative h-90 overflow-hidden sm:h-105 lg:h-113.75">
        <Image
          src={room.image}
          alt={room.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#07111f]/90 via-[#07111f]/60 to-[#07111f]/55" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07111f]/95 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl items-end pb-8 sm:pb-10 lg:pb-12">
          <div className="grid w-full gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Link
                href="/Rooms"
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85 backdrop-blur-md transition hover:bg-white/20"
              >
                ← Back to Rooms
              </Link>

              <div>
                <span className="inline-flex rounded-full bg-[#006B4F] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-[#006B4F]/25">
                  {room.floor}
                </span>

                <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  {room.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/75">
                  <span className="text-[#006B4F]">●</span>
                  <span>Listed by {room.listedBy}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>⭐ {room.rating} rating</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{room.seats} seats</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:w-82.5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-white/65">
                  Hourly Rate
                </p>
                <p className="mt-2 text-2xl font-black text-[#F6F0E4]">
                  ${room.price}
                  <span className="text-base text-white/70">/hr</span>
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-white/65">
                  Booking Count
                </p>
                <p className="mt-2 text-2xl font-black text-[#006B4F]">
                  {room.bookings}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Content */}
      <section className="mx-auto grid w-[92%] max-w-6xl gap-6 py-8 sm:py-10 lg:grid-cols-[1fr_360px] lg:py-12">
        <div className="space-y-6">
          {/* About Room */}
          <div className="rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-sm dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 sm:p-8">
            <h2 className="text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
              About this room
            </h2>

            <div className="mt-4 h-1 w-14 rounded-full bg-[#006B4F]" />

            <p className="mt-5 text-base leading-8 text-[#465672] dark:text-[#F6F0E4]/75">
              {room.desc}
            </p>

            <div className="mt-7 border-t border-[#e8edf5] pt-6 dark:border-[#F6F0E4]/10">
              <div className="grid gap-4 sm:grid-cols-3">
                <InfoItem
                  icon="👥"
                  label="Seat Capacity"
                  value={`${room.seats} people`}
                />

                <InfoItem
                  icon="🔐"
                  label="Access Level"
                  value={room.accessLevel}
                />

                <InfoItem
                  icon="🕘"
                  label="Min Booking"
                  value={room.minBooking}
                />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-sm dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 sm:p-8">
            <h2 className="text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
              Equipped Amenities
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {room.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-3 rounded-2xl border border-[#e8edf5] bg-[#f8fafc] px-4 py-4 text-sm font-bold text-[#26324a] dark:border-[#F6F0E4]/10 dark:bg-[#07111f]/45 dark:text-[#F6F0E4]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#006B4F]" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-sm dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 sm:p-8">
            <h2 className="text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
              Room Guidelines
            </h2>

            <div className="mt-5 grid gap-3">
              {[
                "Keep the room clean after use.",
                "Do not disturb other study zones.",
                "Double-booking detection guarantees slot integrity.",
                "Cancel before your booking slot starts if needed.",
              ].map((rule) => (
                <div
                  key={rule}
                  className="flex gap-3 rounded-2xl bg-[#f8fafc] p-4 text-sm font-semibold leading-6 text-[#465672] dark:bg-[#07111f]/45 dark:text-[#F6F0E4]/75"
                >
                  <span className="text-[#006B4F] dark:text-[#006B4F]">
                    ✓
                  </span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <aside className="h-fit rounded-3xl border border-[#dfe5ef] bg-white p-6 shadow-xl shadow-[#1f2937]/5 dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 lg:sticky lg:top-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#8a94ad] dark:text-[#F6F0E4]/50">
                Hourly Pricing
              </p>

              <p className="mt-2 text-4xl font-black text-[#006B4F] dark:text-[#006B4F]">
                ${room.price}
                <span className="text-base font-extrabold text-[#465672] dark:text-[#F6F0E4]/70">
                  /hr
                </span>
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#8a94ad] dark:text-[#F6F0E4]/50">
                Total Bookings
              </p>

              <p className="mt-3 text-2xl font-black text-[#172033] dark:text-[#F6F0E4]">
                {room.bookings}
              </p>
            </div>
          </div>

          <div className="my-6 h-px bg-[#e8edf5] dark:bg-[#F6F0E4]/10" />

          <div className="grid gap-3">
            <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
              <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
                Floor
              </span>
              <span className="text-sm font-black text-[#172033] dark:text-[#F6F0E4]">
                {room.floor}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
              <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
                Seats
              </span>
              <span className="text-sm font-black text-[#172033] dark:text-[#F6F0E4]">
                {room.seats} people
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
              <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
                Rating
              </span>
              <span className="text-sm font-black text-[#172033] dark:text-[#F6F0E4]">
                ⭐ {room.rating}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-[#07111f]/45">
              <span className="text-sm font-bold text-[#5f6b85] dark:text-[#F6F0E4]/70">
                Access
              </span>
              <span className="text-right text-sm font-black text-[#172033] dark:text-[#F6F0E4]"> 
                {room.accessLevel}
              </span>
            </div>
          </div>

          <Link
            href="/login"
            className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#006B4F] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#006B4F]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl"
          >
            Login to Book
          </Link>

          <p className="mt-4 text-center text-xs font-semibold leading-5 text-[#8a94ad] dark:text-[#F6F0E4]/50">
            Free cancellations up to start of booking slot. Double-booking
            detection guarantees slot integrity.
          </p>
        </aside>
      </section>
    </main>
  );
};

export default DetailsPage;