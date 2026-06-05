import Image from "next/image";
import Link from "next/link";

const Cards = ({ rooms = [] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="group overflow-hidden rounded-3xl border border-[#006B4F]/15 dark:bg-[#0f234f]/70 backdrop-blur-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={room.image}
              alt={room.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

            <span className="absolute top-4 left-4 rounded-full border border-[#006B4F]/30 bg-[#006B4F]/85 px-3 py-1 text-xs font-bold text-white">
              ● Available
            </span>

            <span className="absolute top-4 right-4 rounded-full border border-[#006B4F]/25 bg-[#f9f3e8]/90 px-3 py-1 text-xs font-bold text-[#006B4F]">
              ${room.price}/hr
            </span>

            <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
              ⭐ {room.rating}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
              {room.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/75">
              {room.desc}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#5f5a50] dark:text-[#F6F0E4]/70">
              <span>📍 {room.floor}</span>
              <span>•</span>
              <span>👥 {room.seats} seats</span>
              <span>•</span>
              <span>{room.bookings} bookings</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {room.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#006B4F]/20 bg-[#006B4F]/10 px-3 py-1 text-xs font-semibold text-[#006B4F] dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 border-t border-[#006B4F]/10 pt-5">
              <Link
                href={`/Rooms/${room.id}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#006B4F] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black"
              >
                View Details <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;