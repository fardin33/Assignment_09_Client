"use client";

import {
  Image as ImageIcon,
  Users,
  DollarSign,
  Building2,
  FileText,
  BadgePlus,
} from "lucide-react";

import { createRoom } from "@/data/roomsData";
import toast, { Toaster } from "react-hot-toast";

const AddRoomPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData.entries());

    const formatFloor = (floorNum) => {
      const num = Number(floorNum);
      if (num === 0) return "Ground Floor";
      if (num === 1) return "1st Floor";
      if (num === 2) return "2nd Floor";
      if (num === 3) return "3rd Floor";
      return `${num}th Floor`;
    };

    const roomDetails = {
      roomName: rawData.name,
      description: rawData.description,
      image: rawData.image,
      floor: formatFloor(rawData.floor),
      capacity: Number(rawData.capacity),
      hourlyRate: Number(rawData.price),
      rating: 5, // Custom configuration tracking format matching default 5 star rating
      amenities: formData.getAll("amenities"),
    };

    console.log("Sending Formatted Data to Backend:", roomDetails);

    try {
      const result = await createRoom(roomDetails);

      if (result && result.acknowledged) {
        toast.success("Room added successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Could not add room.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the room.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f] dark:bg-[#07111f] dark:text-[#F6F0E4] transition-colors duration-300">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header Section */}
      <section className="bg-transparent">
        <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-10 text-center sm:px-6 md:pt-10 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] md:text-3xl lg:text-5xl">
            Add New Room
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-md leading-6 text-[#55504a] dark:text-[#F6F0E4]/75 md:text-sm lg:text-xl">
            List your study room and help students find the perfect space
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto flex w-full max-w-6xl justify-center bg-transparent px-5 pt-6 pb-16 sm:px-6 md:pt-8 md:pb-24 lg:px-8 lg:pb-32">
        <div className="w-full max-w-4xl rounded-[24px] border border-[#00775B]/20 bg-white/55 dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-5 shadow-[0_20px_55px_rgba(0,119,91,0.05)] dark:shadow-none backdrop-blur-xl sm:p-6 md:p-7">
          <form id="room-form" onSubmit={onSubmit} className="space-y-5">
            {/* Room Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                <BadgePlus className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                Room Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Silent Focus Pod"
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base font-semibold"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                <FileText className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                required
                placeholder="A quiet private room ideal for deep reading, exam preparation, and focused study sessions..."
                className="w-full resize-none rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                <ImageIcon className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                Image URL
              </label>
              <input
                type="url"
                name="image"
                required
                placeholder="https://example.com/room-image.jpg"
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base"
              />
            </div>

            {/* Floor and Capacity */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Floor */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                  <Building2 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                  Floor (Number Input)
                </label>
                <input
                  type="number"
                  name="floor"
                  min="0"
                  required
                  placeholder="7"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base"
                />
              </div>

              {/* Capacity */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                  <Users className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                  Capacity
                </label>
                <input
                  type="number"
                  name="capacity"
                  min="1"
                  required
                  placeholder="16"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base"
                />
              </div>
            </div>

            {/* Hourly Rate */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                  <DollarSign className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                  Hourly Rate ($)
                </label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  required
                  placeholder="35"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-3 text-sm text-[#08a37f] outline-none transition placeholder:text-[#6b7280] dark:placeholder:text-[#F6F0E4]/40 focus:border-[#00775B] dark:focus:border-[#0e9b75] focus:ring-4 focus:ring-[#00775B]/10 dark:focus:ring-[#0e9b75]/10 sm:text-base"
                />
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h3 className="mb-3 text-xs font-extrabold text-[#1f1f1f] dark:text-[#F6F0E4]/90 sm:text-sm">
                Amenities
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Projector",
                  "Air Conditioning",
                  "Wi-Fi",
                  "Power Outlets",
                  "Whiteboard",
                  "Quiet Zone",
                ].map((amenity) => (
                  <label
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-[#1f1f1f] dark:text-[#F6F0E4]/80 cursor-pointer">
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      className="rounded border-[#00775B]/40 accent-[#00775B]"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <button
                type="reset"
                className="rounded-2xl border border-[#00775B]/25 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-5 py-3 text-sm font-bold text-[#00775B] dark:text-[#0e9b75] transition hover:bg-[#00775B]/5 dark:hover:bg-white/5 sm:text-base">
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-2xl bg-[#00775B] dark:bg-[#0e9b75] px-5 py-3 text-sm font-bold text-white dark:text-[#07111f] shadow-[0_14px_30px_rgba(0,119,91,0.15)] dark:shadow-none transition hover:bg-[#00634c] dark:hover:bg-[#11cda0] active:scale-[0.99] sm:text-base">
                Add Room
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddRoomPage;
