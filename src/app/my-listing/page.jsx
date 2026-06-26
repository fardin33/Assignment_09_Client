
//=========================
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  Pencil,
  Trash2,
  MapPin,
  CalendarCheck,
  X,
  AlertTriangle,
  Layers,
  Sparkles,
} from "lucide-react";
import { rooms as fetchRooms, updateRoom, deleteRoom } from "@/data/roomsData";
import EditModalPage from "@/components/EditModal";
import toast, { Toaster } from "react-hot-toast";

const MyListingPage = () => {
  const [roomList, setRoomList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);
  const [isDeleting, setIsLoadingDelete] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loadRooms = async () => {
      setIsLoading(true);
      const data = await fetchRooms();
      setRoomList(data || []);
      setIsLoading(false);
    };

    loadRooms();
  }, []);

  const handleEditClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // DB Update for Edit functionality
  const handleUpdateRoom = async (updatedRoom) => {
    try {
      const response = await updateRoom(updatedRoom._id, updatedRoom);

      if (response) {
        setRoomList((prevList) =>
          prevList.map((room) =>
            room._id === updatedRoom._id ? updatedRoom : room,
          ),
        );
        toast.success("Room updated successfully!");
        setIsModalOpen(false);
        setSelectedRoom(null);
      } else {
        toast.error("Failed to update the room on server.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the room.");
    }
  };

  const handleDeleteClick = (room) => {
    setRoomToDelete(room);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!roomToDelete) return;

    setIsLoadingDelete(true);
    try {
      const response = await deleteRoom(roomToDelete._id);
      if (response) {
        setRoomList((prevList) =>
          prevList.filter((room) => room._id !== roomToDelete._id),
        );
        toast.success("Room deleted successfully!");
        setIsDeleteModalOpen(false);
        setRoomToDelete(null);
      } else {
        toast.error("Failed to delete the room from server.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the room.");
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const hasRooms = roomList.length > 0;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-black dark:text-[#F6F0E4]">
        <div className="text-center font-bold animate-pulse text-lg">
          Loading rooms...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-black dark:text-[#F6F0E4] transition-colors duration-300">
      <Toaster position="top-right" reverseOrder={false} />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Top Part */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#00775B] dark:text-[#0e9b75] sm:text-4xl">
              My Listings
            </h1>
            {/* <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-[#F6F0E4]/75 sm:text-base">
              {roomList.length} active listings
            </p> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-10 grid grid-cols-1">
          <div className="rounded-[24px] border border-[#00775B]/20 bg-white shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 p-6 dark:shadow-none dark:backdrop-blur-xl max-w-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00775B]/10 text-[#00775B] dark:bg-[#0e9b75]/10 dark:text-[#0e9b75]">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#F6F0E4]/60">
              Active Listings
            </p>
            <h2 className="mt-3 text-3.5xl font-black text-[#00775B] dark:text-[#0e9b75]">
              {roomList.length}
            </h2>
          </div>
        </div>

        {hasRooms ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden overflow-hidden rounded-[24px] border border-[#00775B]/25 bg-white shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl lg:block">
              <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr_1.8fr_1fr] border-b border-slate-200 dark:border-[#F6F0E4]/10 px-6 py-4 bg-slate-50 dark:bg-transparent">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Room
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Floor
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Rate
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Amenities
                </p>
                <p className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-600 dark:text-[#F6F0E4]/60">
                  Actions
                </p>
              </div>

              {roomList.map((room) => (
                <div
                  key={room._id}
                  className="grid grid-cols-[1.5fr_0.8fr_0.8fr_1.8fr_1fr] items-center border-b border-slate-100 dark:border-[#F6F0E4]/10 px-6 py-5 last:border-b-0 hover:bg-[#00775B]/5 dark:hover:bg-white/5 transition">
                  {/* Room Main Info */}
                  <div className="flex items-center gap-4">
                    {room.image && (
                      <Image
                        src={room.image}
                        alt={room.roomName || "Room Image"}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-2xl object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-base font-extrabold text-black dark:text-[#F6F0E4]">
                        {room.roomName}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>
                    </div>
                  </div>

                  {/* Floor */}
                  <p className="text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70 flex items-center gap-1">
                    <Layers className="h-4 w-4 text-slate-400" />
                    {room.floor || "N/A"}
                  </p>

                  {/* Rate */}
                  <p className="text-sm font-extrabold text-black dark:text-[#F6F0E4]">
                    ${room.hourlyRate}/hr
                  </p>

                  {/* Dynamic Amenities */}
                  <div className="flex flex-wrap gap-1.5 pr-2">
                    {room.amenities && room.amenities.length > 0 ? (
                      room.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-600 dark:text-[#F6F0E4]/80 border border-slate-200/50 dark:border-white/5">
                          <Sparkles className="h-3 w-3 text-[#00775B] dark:text-[#0e9b75]" />
                          {amenity}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs font-medium text-slate-400">
                        No amenities
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => router.push(`/Rooms/${room._id}`)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      onClick={() => handleEditClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#00775B] hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:shadow-none dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteClick(room)}
                      type="button"
                      className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-red-200 bg-white text-red-500 shadow-sm transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:shadow-none dark:hover:bg-red-500 dark:hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 lg:hidden">
              {roomList.map((room) => (
                <div
                  key={room._id}
                  className="relative rounded-[24px] border border-[#00775B]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl">
                  <div className="absolute top-5 right-5 text-center px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50/50 dark:border-[#F6F0E4]/15 dark:bg-[#07111f]/40 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#F6F0E4]/50">
                      Rate
                    </p>
                    <p className="text-sm font-black text-[#00775B] dark:text-[#0e9b75]">
                      ${room.hourlyRate}/hr
                    </p>
                  </div>

                  <div className="flex gap-4 pr-24">
                    {" "}
                    {room.image && (
                      <Image
                        src={room.image}
                        alt={room.roomName || "Room Image"}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-extrabold text-black dark:text-[#F6F0E4]">
                        {room.roomName}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/60">
                        Cap {room.capacity}
                      </p>
                      <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#F6F0E4]/70">
                        <MapPin className="h-4 w-4 text-[#00775B] dark:text-[#0e9b75]" />
                        {room.floor || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#F6F0E4]/40 mb-2">
                      Amenities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities && room.amenities.length > 0 ? (
                        room.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-600 dark:text-[#F6F0E4]/80 border border-slate-200/40 dark:border-white/5">
                            {amenity}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400">
                          None Specified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => router.push(`/Rooms/${room._id}`)}
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    <button
                      onClick={() => handleEditClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#00775B] hover:text-white dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:border-[#0e9b75] dark:hover:bg-[#0e9b75] dark:hover:text-[#07111f]">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteClick(room)}
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-red-200 bg-white px-3 py-3 text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/20 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-57.5 items-center justify-center rounded-[24px] border border-[#00775B]/20 bg-white p-6 text-center shadow-[0_16px_40px_rgba(0,119,91,0.04)] dark:border-[#F6F0E4]/10 dark:bg-[#0b1733]/50 dark:shadow-none dark:backdrop-blur-xl sm:min-h-65">
            <div>
              <p className="text-base font-semibold text-slate-700 dark:text-[#F6F0E4]/80 sm:text-lg">
                You haven&apos;t listed any study rooms yet.
              </p>
              <button
                type="button"
                className="mx-auto mt-5 inline-flex cursor-pointer items-center justify-center gap-2 text-base font-extrabold text-[#00775B] dark:text-[#0e9b75] transition hover:text-[#00634c] dark:hover:text-[#11cda0] sm:text-lg">
                Add your first room
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Edit Modal Component */}
      <EditModalPage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={selectedRoom}
        onUpdate={handleUpdateRoom}
      />

      {/* Custom Center Confirmation Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[24px] border border-red-500/20 bg-white dark:border-red-500/10 dark:bg-[#0b1733] p-6 shadow-2xl transition-colors duration-300 text-[#1f1f1f] dark:text-[#F6F0E4] text-center">
            {/* Close Cross icon */}
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 dark:text-[#F6F0E4]/60 dark:hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>

            {/* Warning Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400">
              <AlertTriangle className="h-7 w-7" />
            </div>

            {/* Modal Contents */}
            <h3 className="text-xl font-black text-slate-900 dark:text-[#F6F0E4]">
              Delete Room?
            </h3>
            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-[#F6F0E4]/70 px-2">
              Are you sure you want to permanently delete{" "}
              <span className="font-extrabold text-red-500 dark:text-red-400">
                `{roomToDelete?.roomName}`
              </span>
              ? This action cannot be undone.
            </p>

            {/* Buttons Layout */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setIsDeleteModalOpen(false)}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-[#F6F0E4]/15 dark:bg-transparent dark:text-[#F6F0E4]/80 dark:hover:bg-white/5 disabled:opacity-50">
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="rounded-2xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 shadow-md shadow-red-500/10 disabled:opacity-50">
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MyListingPage;
