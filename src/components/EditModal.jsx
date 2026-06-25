// import React, { useState } from "react";
// import {
//   Image as ImageIcon,
//   Users,
//   DollarSign,
//   Building2,
//   FileText,
//   BadgePlus,
//   X,
// } from "lucide-react";

// const EditModalPage = ({ isOpen, onClose, room, onUpdate }) => {
//   const getFloorNumber = (floorValue) => {
//     let floorNumber = floorValue || "";
//     if (typeof floorNumber === "string") {
//       if (floorNumber.toLowerCase().includes("ground")) return "0";
//       return floorNumber.replace(/\D/g, "");
//     }
//     return floorNumber;
//   };

//   const [formData, setFormData] = useState(() => ({
//     name: room?.roomName || "",
//     description: room?.description || "",
//     image: room?.image || "",
//     floor: getFloorNumber(room?.floor),
//     capacity: room?.capacity || "",
//     price: room?.hourlyRate || "",
//     amenities: room?.amenities || [],
//   }));

//   if (!isOpen || !room) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (amenity) => {
//     setFormData((prev) => {
//       const isChecked = prev.amenities.includes(amenity);
//       const updatedAmenities = isChecked
//         ? prev.amenities.filter((item) => item !== amenity)
//         : [...prev.amenities, amenity];
//       return { ...prev, amenities: updatedAmenities };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formatFloor = (floorNum) => {
//       const num = Number(floorNum);
//       if (num === 0) return "Ground Floor";
//       if (num === 1) return "1st Floor";
//       if (num === 2) return "2nd Floor";
//       if (num === 3) return "3rd Floor";
//       return `${num}th Floor`;
//     };

//     const updatedRoomDetails = {
//       ...room,
//       roomName: formData.name,
//       description: formData.description,
//       image: formData.image,
//       floor: formatFloor(formData.floor),
//       capacity: Number(formData.capacity),
//       hourlyRate: Number(formData.price),
//       amenities: formData.amenities,
//     };

//     onUpdate(updatedRoomDetails);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
//       <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[24px] border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/10 dark:bg-[#0b1733] p-6 shadow-2xl transition-colors duration-300 text-[#1f1f1f] dark:text-[#F6F0E4]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 dark:text-[#F6F0E4]/60 dark:hover:bg-white/10">
//           <X className="h-5 w-5" />
//         </button>

//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
//             Edit Room Details
//           </h2>
//           <p className="text-sm text-slate-500 dark:text-[#F6F0E4]/75">
//             Update the information for `{room.roomName}`
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Room Name */}
//           <div>
//             <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//               <BadgePlus className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//               Room Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75] font-semibold"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//               <FileText className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//               Description
//             </label>
//             <textarea
//               rows="3"
//               name="description"
//               required
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full resize-none rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//               <ImageIcon className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//               Image URL
//             </label>
//             <input
//               type="url"
//               name="image"
//               required
//               value={formData.image}
//               onChange={handleChange}
//               className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
//             />
//           </div>

//           {/* Floor and Capacity */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//                 <Building2 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                 Floor (Number Input)
//               </label>
//               <input
//                 type="number"
//                 name="floor"
//                 min="0"
//                 required
//                 value={formData.floor}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
//               />
//             </div>

//             <div>
//               <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//                 <Users className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//                 Capacity
//               </label>
//               <input
//                 type="number"
//                 name="capacity"
//                 min="1"
//                 required
//                 value={formData.capacity}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
//               />
//             </div>
//           </div>

//           {/* Hourly Rate */}
//           <div className="w-full sm:w-1/2">
//             <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
//               <DollarSign className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
//               Hourly Rate ($)
//             </label>
//             <input
//               type="number"
//               name="price"
//               min="0"
//               required
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
//             />
//           </div>

//           {/* Amenities Section */}
//           <div>
//             <h3 className="mb-2 text-xs font-extrabold sm:text-sm">
//               Amenities
//             </h3>
//             <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
//               {[
//                 "Projector",
//                 "Air Conditioning",
//                 "Wi-Fi",
//                 "Power Outlets",
//                 "Whiteboard",
//                 "Quiet Zone",
//               ].map((amenity) => (
//                 <label
//                   key={amenity}
//                   className="flex items-center gap-2 text-sm cursor-pointer select-none">
//                   <input
//                     type="checkbox"
//                     checked={formData.amenities.includes(amenity)}
//                     onChange={() => handleCheckboxChange(amenity)}
//                     className="rounded border-[#00775B]/40 accent-[#00775B]"
//                   />
//                   {amenity}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="grid grid-cols-2 gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-2xl border border-[#00775B]/25 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-4 py-2.5 text-sm font-bold text-[#00775B] dark:text-[#0e9b75] transition hover:bg-[#00775B]/5 dark:hover:bg-white/5">
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="rounded-2xl bg-[#00775B] dark:bg-[#0e9b75] px-4 py-2.5 text-sm font-bold text-white dark:text-[#07111f] transition hover:bg-[#00634c] dark:hover:bg-[#11cda0]">
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditModalPage;

//=================================
import React, { useState, useEffect } from "react";
import {
  Image as ImageIcon,
  Users,
  DollarSign,
  Building2,
  FileText,
  BadgePlus,
  X,
} from "lucide-react";

const EditModalPage = ({ isOpen, onClose, room, onUpdate }) => {
  const getFloorNumber = (floorValue) => {
    let floorNumber = floorValue || "";
    if (typeof floorNumber === "string") {
      if (floorNumber.toLowerCase().includes("ground")) return "0";
      return floorNumber.replace(/\D/g, "");
    }
    return floorNumber;
  };

  // State initialization
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    floor: "",
    capacity: "",
    price: "",
    amenities: [],
  });

  useEffect(() => {
    if (room && isOpen) {
      const timer = setTimeout(() => {
        setFormData({
          name: room?.roomName || "",
          description: room?.description || "",
          image: room?.image || "",
          floor: getFloorNumber(room?.floor),
          capacity: room?.capacity || "",
          price: room?.hourlyRate || "",
          amenities: room?.amenities || [],
        });
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [room, isOpen]);

  if (!isOpen || !room) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (amenity) => {
    setFormData((prev) => {
      const isChecked = prev.amenities.includes(amenity);
      const updatedAmenities = isChecked
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updatedAmenities };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatFloor = (floorNum) => {
      const num = Number(floorNum);
      if (num === 0) return "Ground Floor";
      if (num === 1) return "1st Floor";
      if (num === 2) return "2nd Floor";
      if (num === 3) return "3rd Floor";
      return `${num}th Floor`;
    };

    const updatedRoomDetails = {
      ...room,
      roomName: formData.name,
      description: formData.description,
      image: formData.image,
      floor: formatFloor(formData.floor),
      capacity: Number(formData.capacity),
      hourlyRate: Number(formData.price),
      amenities: formData.amenities,
    };

    onUpdate(updatedRoomDetails);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[24px] border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/10 dark:bg-[#0b1733] p-6 shadow-2xl transition-colors duration-300 text-[#1f1f1f] dark:text-[#F6F0E4]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 dark:text-[#F6F0E4]/60 dark:hover:bg-white/10">
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-[#00775B] dark:text-[#0e9b75]">
            Edit Room Details
          </h2>
          <p className="text-sm text-slate-500 dark:text-[#F6F0E4]/75">
            Update the information for `{room.roomName}`
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Room Name */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
              <BadgePlus className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
              Room Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75] font-semibold"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
              <FileText className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
              Description
            </label>
            <textarea
              rows="3"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full resize-none rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
              <ImageIcon className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
              Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
            />
          </div>

          {/* Floor and Capacity */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
                <Building2 className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                Floor (Number Input)
              </label>
              <input
                type="number"
                name="floor"
                min="0"
                required
                value={formData.floor}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
                <Users className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                Capacity
              </label>
              <input
                type="number"
                name="capacity"
                min="1"
                required
                value={formData.capacity}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
              />
            </div>
          </div>

          {/* Hourly Rate */}
          <div className="w-full sm:w-1/2">
            <label className="mb-1.5 flex items-center gap-2 text-xs font-bold sm:text-sm">
              <DollarSign className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
              Hourly Rate ($)
            </label>
            <input
              type="number"
              name="price"
              min="0"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#00775B]/20 bg-white dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/60 px-4 py-2.5 text-sm outline-none transition focus:border-[#00775B] dark:focus:border-[#0e9b75]"
            />
          </div>

          {/* Amenities Section */}
          <div>
            <h3 className="mb-2 text-xs font-extrabold sm:text-sm">
              Amenities
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                  className="flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleCheckboxChange(amenity)}
                    className="rounded border-[#00775B]/40 accent-[#00775B]"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-[#00775B]/25 dark:border-[#F6F0E4]/15 bg-white dark:bg-transparent px-4 py-2.5 text-sm font-bold text-[#00775B] dark:text-[#0e9b75] transition hover:bg-[#00775B]/5 dark:hover:bg-white/5">
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-2xl bg-[#00775B] dark:bg-[#0e9b75] px-4 py-2.5 text-sm font-bold text-white dark:text-[#07111f] transition hover:bg-[#00634c] dark:hover:bg-[#11cda0]">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalPage;
