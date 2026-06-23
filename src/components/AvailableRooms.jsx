import Cards from "@/components/ui/cards.jsx";
import { rooms } from "@/data/roomsData.js";

const AvailableRooms = async () => {
  const roomsData = await rooms();

  return (
    <section className=" py-10 md:py-15 lg:py-25">
      <div className="w-[84.615%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex rounded-full border border-[#006B4F]/25 bg-[#006B4F]/10 px-4 py-2 text-xs font-bold text-(--accent-green) dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
            Available Rooms
          </span>

          <h2 className="mt-3.5 text-3xl md:text-5xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
            <span className="text-(--accent-green) dark:text-[#0e9b75]">
              Available
            </span>{" "}
            Study Rooms
          </h2>

          <p className="mt-4 text-[#5f5a50] dark:text-[#F6F0E4]/75 leading-7">
            Handpicked spaces across campus for every study style — solo pods,
            group suites, quiet rooms, and creative studios.
          </p>
        </div>

        <Cards roomsData={roomsData} />
      </div>
    </section>
  );
};

export default AvailableRooms;
