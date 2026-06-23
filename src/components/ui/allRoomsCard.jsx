import Image from "next/image";
import Link from "next/link";

const AllRoomsCards = ({ roomsData = [] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 p-4">
      {roomsData.map((room) => (
        <div
          key={room._id}
          className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-green bg-white/30 dark:bg-[#0f234f]/50 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-white/40">
          {/* Image Section */}
          <div className="relative h-52 overflow-hidden rounded-t-3xl strict">
            <Image
              src={room.image}
              alt={room.roomName || "Study Room Image"}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            {/* Status Badge */}
            <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#006B4F] backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white tracking-wide shadow-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Available
            </span>

            {/* Price Badge */}
            <span className="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-red-500 shadow-sm">
              ${room.hourlyRate}/hr
            </span>

            {/* Rating Badge */}
            <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-amber-400">
              ⭐ <span className="text-white">{room.rating}</span>
            </span>
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold dark:text-white tracking-tight transition-colors duration-200 group-hover:text-(--accent-green)">
              {room.roomName}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300/80">
              {room.description}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2 py-1 text-center">
              <div className="flex flex-col items-center justify-center border-r border-slate-100 dark:border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Floor
                </span>
                <span className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {room.floor}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-slate-100 dark:border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Capacity
                </span>
                <span className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {room.capacity} Seats
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Booked
                </span>
                <span className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {room.bookings}x
                </span>
              </div>
            </div>

            {room.amenities && room.amenities.length > 0 && (
              <div className="mt-5">
                <span className="block mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Amenities
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 transition-colors duration-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/40">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-auto pt-6">
              <Link
                href={`/Rooms/${room._id}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/10 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-emerald-900/20 active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent-green)" }}>
                View Details
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRoomsCards;
