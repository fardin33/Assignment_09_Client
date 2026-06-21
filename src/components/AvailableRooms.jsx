import Cards from "@/components/Ui/cards.jsx";

const rooms = [
  {
    id: 1,
    title: "The Scholar's Den",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    price: 8,
    rating: 4.9,
    floor: "2nd Floor",
    seats: 4,
    bookings: 128,
    desc: "A serene private room tucked in the quiet wing of the Central Library. Great for focused reading and research.",
    tags: ["Wi-Fi", "Whiteboard", "Quiet Zone", "Power Outlets"],
  },
  {
    id: 2,
    title: "Innovator's Suite",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    price: 14,
    rating: 4.7,
    floor: "3rd Floor",
    seats: 8,
    bookings: 94,
    desc: "A collaborative room equipped for group study, presentations, and brainstorming sessions.",
    tags: ["Wi-Fi", "Monitor", "Video Conferencing", "Power Outlets"],
  },
  {
    id: 3,
    title: "Zen Focus Pod",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    price: 5,
    rating: 4.8,
    floor: "1st Floor",
    seats: 1,
    bookings: 211,
    desc: "A minimal single-occupancy pod for deep focus, online exams, and private study sessions.",
    tags: ["Wi-Fi", "Quiet Zone", "Natural Light", "Power Outlets"],
  },
  {
    id: 4,
    title: "Bright Study Lounge",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    price: 12,
    rating: 4.6,
    floor: "4th Floor",
    seats: 6,
    bookings: 76,
    desc: "A bright, comfortable space with natural light, soft chairs, and a calm study environment.",
    tags: ["Wi-Fi", "Natural Light", "Whiteboard", "Group Study"],
  },
  {
    id: 5,
    title: "Creative Media Room",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop",
    price: 10,
    rating: 4.5,
    floor: "Media Lab",
    seats: 3,
    bookings: 62,
    desc: "Perfect for creative projects, virtual meetings, digital practice, and presentation prep.",
    tags: ["Wi-Fi", "Monitor", "Power Outlets", "Private"],
  },
  {
    id: 6,
    title: "Team Collaboration Hub",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    price: 11,
    rating: 4.8,
    floor: "Ground Floor",
    seats: 10,
    bookings: 156,
    desc: "A spacious group room designed for teamwork, meetings, project planning, and discussions.",
    tags: ["Wi-Fi", "Large Table", "Whiteboard", "Group Study"],
  },
];

const AvailableRooms = () => {
  return (
    <section className=" py-10 md:py-15 lg:py-25">
      <div className="w-[84.615%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex rounded-full border border-[#006B4F]/25 bg-[#006B4F]/10 px-4 py-2 text-xs font-bold text-[#006B4F] dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
            Available Rooms
          </span>

          <h2 className="mt-3.5 text-3xl md:text-5xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
            <span className="text-[#006B4F]">Available</span> Study Rooms
          </h2>

          <p className="mt-4 text-[#5f5a50] dark:text-[#F6F0E4]/75 leading-7">
            Handpicked spaces across campus for every study style — solo pods,
            group suites, quiet rooms, and creative studios.
          </p>
        </div>

        <Cards rooms={rooms} />
      </div>
    </section>
  );
};

export default AvailableRooms;
