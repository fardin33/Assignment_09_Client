import React from "react";
import {
  Image as ImageIcon,
  Users,
  DollarSign,
  Building2,
  FileText,
  BadgePlus,
} from "lucide-react";

const amenities = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddRoomPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      {/* Header Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-10 text-center sm:px-6 md:pt-10 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] md:text-3xl lg:text-5xl">
            Add New Room
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-md leading-6 text-[#55504a] md:text-sm lg:text-xl">
            List your study room and help students find the perfect space
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto flex w-full max-w-6xl justify-center bg-white px-5 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="w-full max-w-4xl rounded-[24px] border border-[#00775B]/20 bg-white/55 p-5 shadow-[0_20px_55px_rgba(0,119,91,0.09)] backdrop-blur-xl sm:p-6 md:p-7">
          <form className="space-y-5">
            {/* Room Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                <BadgePlus className="h-4 w-4 text-[#00775B]" />
                Room Name
              </label>

              <input
                type="text"
                placeholder="Silent Focus Pod"
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                <FileText className="h-4 w-4 text-[#00775B]" />
                Description
              </label>

              <textarea
                rows="4"
                placeholder="A quiet private room ideal for deep reading, exam preparation, and focused study sessions..."
                className="w-full resize-none rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                <ImageIcon className="h-4 w-4 text-[#00775B]" />
                Image URL
              </label>

              <input
                type="url"
                placeholder="https://example.com/room-image.jpg"
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
              />
            </div>

            {/* Floor and Capacity */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                  <Building2 className="h-4 w-4 text-[#00775B]" />
                  Floor
                </label>

                <input
                  type="text"
                  placeholder="Floor 3"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                  <Users className="h-4 w-4 text-[#00775B]" />
                  Capacity
                </label>

                <input
                  type="text"
                  placeholder="2-4 people"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
                />
              </div>
            </div>

            {/* Hourly Rate */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1f1f1f] sm:text-sm">
                  <DollarSign className="h-4 w-4 text-[#00775B]" />
                  Hourly Rate
                </label>

                <input
                  type="number"
                  placeholder="5"
                  className="w-full rounded-2xl border border-[#00775B]/20 bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#6b7280] focus:border-[#00775B] focus:ring-4 focus:ring-[#00775B]/10 sm:text-base"
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="mb-3 text-xs font-extrabold text-[#1f1f1f] sm:text-sm">
                Amenities
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-2xl border border-[#00775B]/25 bg-white px-4 py-3 text-xs font-semibold text-[#55504a] transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#00775B]/10 sm:text-sm">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-2xl border border-[#00775B]/25 bg-white px-5 py-3 text-sm font-bold text-[#00775B] transition hover:bg-[#00775B]/5 sm:text-base">
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-2xl bg-[#00775B] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(0,119,91,0.20)] transition hover:bg-[#00634c] active:scale-[0.99] sm:text-base">
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
