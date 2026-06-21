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
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Top Part */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] sm:text-4xl">
              My Listings
            </h1>

            <p className="mt-2 text-sm text-[#55504a] sm:text-base">
              {rooms.length} active listings · {totalBookings} total bookings
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00775B] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(0,119,91,0.22)] transition hover:bg-[#00634c] active:scale-[0.98]">
            <Plus className="h-4 w-4" />
            New listing
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
              <CalendarCheck className="h-5 w-5" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
              Active Listings
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">
              {rooms.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
              <DollarSign className="h-5 w-5" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
              Revenue
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">
              $1,284
            </h2>
          </div>

          <div className="rounded-3xl border border-[#00775B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,119,91,0.08)] sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B]">
              <TrendingUp className="h-5 w-5" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55504a]">
              Avg Occupancy
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#1f1f1f]">78%</h2>
          </div>
        </div>

        {hasRooms ? (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#00775B]/15 bg-white shadow-[0_20px_60px_rgba(0,119,91,0.08)] lg:block">
              <div className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] border-b border-[#00775B]/10 px-6 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                  Room
                </p>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                  Location
                </p>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                  Rate
                </p>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                  Bookings
                </p>
                <p className="text-right text-xs font-extrabold uppercase tracking-[0.18em] text-[#55504a]">
                  Actions
                </p>
              </div>

              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="grid grid-cols-[1.5fr_1fr_0.6fr_0.7fr_0.9fr] items-center border-b border-[#00775B]/10 px-6 py-5 last:border-b-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="text-base font-bold text-[#1f1f1f]">
                        {room.name}
                      </h3>

                      <p className="text-sm text-[#55504a]">
                        Cap {room.capacity}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#55504a]">
                    {room.location}
                  </p>

                  <p className="text-sm font-bold text-[#1f1f1f]">
                    ${room.rate}/hr
                  </p>

                  <p className="text-sm font-bold text-[#1f1f1f]">
                    {room.bookings}
                  </p>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00775B]/20 bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      type="button"
                      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-red-500/20 bg-white text-red-500 transition hover:bg-red-500 hover:text-white">
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
                  className="rounded-3xl border border-[#00775B]/15 bg-white p-4 shadow-[0_18px_45px_rgba(0,119,91,0.08)]">
                  <div className="flex gap-4">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-extrabold text-[#1f1f1f]">
                        {room.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#55504a]">
                        Cap {room.capacity}
                      </p>

                      <p className="mt-2 flex items-center gap-1 text-sm font-medium text-[#55504a]">
                        <MapPin className="h-4 w-4 text-[#00775B]" />
                        {room.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#00775B]/5 p-3">
                      <p className="text-xs font-bold uppercase text-[#55504a]">
                        Rate
                      </p>

                      <p className="mt-1 text-base font-extrabold text-[#00775B]">
                        ${room.rate}/hr
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#00775B]/5 p-3">
                      <p className="text-xs font-bold uppercase text-[#55504a]">
                        Bookings
                      </p>

                      <p className="mt-1 text-base font-extrabold text-[#00775B]">
                        {room.bookings}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 bg-white px-3 py-3 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00775B]/20 bg-white px-3 py-3 text-sm font-bold text-[#1f1f1f] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-500/20 bg-white px-3 py-3 text-red-500 transition hover:bg-red-500 hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-57.5 items-center justify-center rounded-3xl border border-[#00775B]/15 bg-white p-6 text-center shadow-[0_20px_60px_rgba(0,119,91,0.08)] sm:min-h-65">
            <div>
              <p className="text-base font-medium text-[#55504a] sm:text-lg">
                You haven&apos;t listed any study rooms yet.
              </p>

              <button
                type="button"
                className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] transition hover:text-[#00634c] sm:text-lg">
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
