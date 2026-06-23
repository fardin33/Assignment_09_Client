"use client";

import { useMemo, useState, useEffect } from "react";
import { rooms as fetchRooms } from "@/data/roomsData";
import AllRoomsCards from "@/components/ui/allRoomsCard";

const floorOptions = [
  "Ground Floor",
  "1st Floor",
  "2nd Floor",
  "3rd Floor",
  "4th Floor",
  "Media Lab",
];

const amenityOptions = [
  "Wi-Fi",
  "Whiteboard",
  "Quiet Zone",
  "Power Outlets",
  "Monitor",
  "Video Conferencing",
  "Natural Light",
  "Group Study",
  "Private",
  "Large Table",
];

const RoomsPage = () => {
  const [dbRooms, setDbRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [maxPrice, setMaxPrice] = useState(30);
  const [isFloorOpen, setIsFloorOpen] = useState(false);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const data = await fetchRooms(); // roomsData fetch
        setDbRooms(data || []);
      } catch (error) {
        console.error("Failed to load rooms:", error);
      } finally {
        setLoading(false);
      }
    };
    loadRooms();
  }, []);

  const filteredRooms = useMemo(() => {
    const searchValue = searchText.trim().toLowerCase();

    return dbRooms.filter((room) => {
      const searchableText = [room.roomName, room.floor, room.description]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchValue
        ? searchableText.includes(searchValue)
        : true;

      const matchesFloor = selectedFloor ? room.floor === selectedFloor : true;

      const matchesPrice = room.hourlyRate <= maxPrice;

      const matchesAmenities =
        selectedAmenities.length > 0
          ? selectedAmenities.every((amenity) =>
              room.amenities?.includes(amenity),
            )
          : true;

      return matchesSearch && matchesFloor && matchesPrice && matchesAmenities;
    });
  }, [dbRooms, searchText, selectedFloor, selectedAmenities, maxPrice]);

  const handleResetFilters = () => {
    setSearchText("");
    setSelectedFloor("");
    setSelectedAmenities([]);
    setMaxPrice(30);
    setIsFloorOpen(false);
  };

  const handleSelectFloor = (floor) => {
    setSelectedFloor(floor);
    setIsFloorOpen(false);
  };

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((item) => item !== amenity);
      }
      return [...prev, amenity];
    });
  };

  return (
    <main className="min-h-screen">
      <section className="py-6 sm:py-8 md:py-10 lg:py-10">
        <div className="mx-auto w-[92%] max-w-375">
          {/* Top Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <span className="inline-flex rounded-full border border-[#006B4F]/25 bg-[#006B4F]/10 px-4 py-2 text-xs font-bold text-[#006B4F] dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
              Available Rooms
            </span>

            <h1 className="mt-3.5 text-3xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4] md:text-5xl">
              <span className="text-[#006B4F] dark:text-[#0e9b75]">
                Available
              </span>{" "}
              Study Rooms
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#5f5a50] dark:text-[#F6F0E4]/75 sm:text-base">
              Handpicked spaces across campus for every study style — solo pods,
              group suites, quiet rooms, and creative studios.
            </p>
          </div>

          {/* Filter And Cards Layout */}
          <div className="grid gap-5 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
            {/* Left Filter */}
            <aside className="h-fit rounded-2xl border border-[#006B4F]/15 bg-white/75 p-4 shadow-sm backdrop-blur-xl dark:border-[#F6F0E4]/10 dark:bg-[#0f234f]/70 lg:sticky lg:top-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-base text-[#006B4F] dark:text-[#F6F0E4]">
                  ☷
                </span>
                <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f1b14] dark:text-[#F6F0E4]">
                  Filters
                </h2>
              </div>

              {/* Search Filter */}
              <div>
                <label
                  htmlFor="roomSearch"
                  className="mb-2 block text-xs font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  Search rooms
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#006B4F] dark:text-[#F6F0E4]/80">
                    🔍
                  </span>
                  <input
                    id="roomSearch"
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search by name, floor, amenity..."
                    className="w-full rounded-full border border-[#006B4F]/20 bg-white/80 py-2.5 pl-9 pr-4 text-xs font-medium text-[#1f1b14] outline-none transition placeholder:text-[#5f5a50]/60 focus:border-[#006B4F] focus:ring-2 focus:ring-[#006B4F]/15 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/40 dark:text-[#F6F0E4] dark:placeholder:text-[#F6F0E4]/45"
                  />
                </div>
              </div>

              {/* Price Filter */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="maxPrice"
                    className="text-xs font-semibold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                    Max price
                  </label>
                  <span className="rounded-full bg-[#006B4F]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#006B4F] dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
                    ${maxPrice}/hr
                  </span>
                </div>
                <input
                  id="maxPrice"
                  type="range"
                  min="5"
                  max="30"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  className="h-1.5 w-full cursor-pointer accent-[#006B4F]"
                />
              </div>

              {/* Floor Dropdown */}
              <div className="relative z-30 mt-5">
                <label className="mb-2.5 block text-xs font-bold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  Floor
                </label>
                <button
                  type="button"
                  onClick={() => setIsFloorOpen((prev) => !prev)}
                  className={
                    "flex w-full items-center justify-between gap-3 rounded-2xl border bg-white/85 px-4 py-3 text-left text-xs font-bold shadow-sm outline-none backdrop-blur-md transition duration-300 dark:bg-[#07111f]/50 " +
                    (isFloorOpen
                      ? "border-[#006B4F] ring-4 ring-[#006B4F]/10 dark:border-[#006B4F] dark:ring-[#006B4F]/10"
                      : "border-[#006B4F]/20 hover:border-[#006B4F]/40 dark:border-[#F6F0E4]/15 dark:hover:border-[#F6F0E4]/30")
                  }
                  aria-haspopup="listbox"
                  aria-expanded={isFloorOpen}>
                  <span
                    className={
                      "truncate " +
                      (selectedFloor
                        ? "text-[#1f1b14] dark:text-[#F6F0E4]"
                        : "text-[#5f5a50]/75 dark:text-[#F6F0E4]/50")
                    }>
                    {selectedFloor || "All floors"}
                  </span>
                  <span
                    className={
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#006B4F]/10 text-sm text-[#006B4F] transition duration-300 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4] " +
                      (isFloorOpen ? "rotate-180" : "")
                    }>
                    ⌄
                  </span>
                </button>

                {isFloorOpen && (
                  <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-[#006B4F]/15 bg-white/95 p-1.5 shadow-2xl shadow-[#006B4F]/10 backdrop-blur-xl dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/95">
                    <div
                      role="listbox"
                      className="max-h-64 overflow-y-auto overscroll-contain pr-1">
                      <button
                        type="button"
                        onClick={() => handleSelectFloor("")}
                        className={
                          "flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs font-bold transition " +
                          (selectedFloor === ""
                            ? "bg-[#006B4F] text-white dark:bg-[#006B4F] dark:text-[#07111f]"
                            : "text-[#1f1b14] hover:bg-[#eef8f5] dark:text-[#F6F0E4] dark:hover:bg-white/10")
                        }
                        role="option"
                        aria-selected={selectedFloor === ""}>
                        <span className="truncate">All floors</span>
                        {selectedFloor === "" && (
                          <span className="text-sm">✓</span>
                        )}
                      </button>

                      {floorOptions.map((floor) => {
                        const isSelected = selectedFloor === floor;
                        return (
                          <button
                            key={floor}
                            type="button"
                            onClick={() => handleSelectFloor(floor)}
                            className={
                              "mt-1 flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs font-bold transition " +
                              (isSelected
                                ? "bg-[#006B4F] text-white dark:bg-[#006B4F] dark:text-[#07111f]"
                                : "text-[#1f1b14] hover:bg-[#eef8f5] dark:text-[#F6F0E4] dark:hover:bg-white/10")
                            }
                            role="option"
                            aria-selected={isSelected}>
                            <span className="truncate">{floor}</span>
                            {isSelected && <span className="text-sm">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Amenities Filter */}
              <div className="mt-5">
                <h3 className="mb-2.5 text-xs font-bold text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  Amenities
                </h3>
                <div className="grid gap-2">
                  {amenityOptions.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex cursor-pointer items-center gap-2.5 text-xs font-medium text-[#1f1b14] dark:text-[#F6F0E4]/85">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="h-3.5 w-3.5 rounded border-[#006B4F]/40 accent-[#006B4F]"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 w-full rounded-full border border-[#006B4F]/20 bg-[#006B4F] px-4 py-2 text-xs font-bold text-white transition duration-300 hover:bg-black dark:border-[#F6F0E4]/20 dark:bg-[#F6F0E4] dark:text-[#0f234f] dark:hover:bg-white">
                Reset filters
              </button>
            </aside>

            {/* Right Side:  */}
            <div className="min-w-0 overflow-hidden rounded-3xl border border-[#006B4F]/10 bg-white/50 p-4 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/40 sm:p-5">
              {loading ? (
                <div className="flex min-h-60 items-center justify-center text-sm font-semibold dark:text-white">
                  Loading rooms...
                </div>
              ) : filteredRooms.length > 0 ? (
                <AllRoomsCards roomsData={filteredRooms} />
              ) : (
                <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-[#006B4F]/25 bg-white/40 p-6 text-center dark:border-[#F6F0E4]/20 dark:bg-[#0f234f]/40">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
                      No rooms found
                    </h3>
                    <p className="mt-2 text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                      Try searching with another room name, floor, or amenity.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
