// export const rooms = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/rooms", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data from backend");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// roomsData.js

// 1. Gen All Rooms Data Fetch function :
// export const rooms = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/rooms", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data from backend");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// // 2. Gen Single Room Details Fetch function :
// export const getRoomDetails = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return null;
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching room details from backend:", error);
//     return null;
//   }
// };

// // 3. Create/Add New Room Function (POST Request)
// export const createRoom = async (roomData) => {
//   try {
//     const res = await fetch("http://localhost:8000/addRooms", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roomData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to add new room to backend");
//     }

//     const data = await res.json();
//     console.log("Room created successfully:", data);
//     return data;
//   } catch (error) {
//     console.error("Error creating room:", error);
//     return null;
//   }
// };

//==============================
// roomsData.js
// 1. Gen All Rooms Data Fetch function :
// export const rooms = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/rooms", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data from backend");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// // 2. Gen Single Room Details Fetch function :
// export const getRoomDetails = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return null;
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching room details from backend:", error);
//     return null;
//   }
// };

// // 3. Create/Add New Room Function : POST Request
// export const createRoom = async (roomData) => {
//   try {
//     const res = await fetch("http://localhost:8000/addRooms", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roomData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to add new room to backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error creating room:", error);
//     return null;
//   }
// };

// // 4. Update Existing Room : PUT Request
// export const updateRoom = async (roomId, updatedData) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to update room in backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error updating room:", error);
//     return null;
//   }
// };

// // 5. Delete Room Function : DELETE Request
// export const deleteRoom = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to delete room from backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error deleting room:", error);
//     return null;
//   }
// };

//=========================
// 1. Get All Rooms
// export const rooms = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/rooms", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data from backend");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// // 2. Get Single Room Details
// export const getRoomDetails = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return null;
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching room details from backend:", error);
//     return null;
//   }
// };

// // 3. Create/Add New Room
// export const createRoom = async (roomData) => {
//   try {
//     const res = await fetch("http://localhost:8000/addRooms", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roomData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to add new room to backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error creating room:", error);
//     return null;
//   }
// };

// // 4. Update Existing Room
// export const updateRoom = async (roomId, updatedData) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to update room in backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error updating room:", error);
//     return null;
//   }
// };

// // 5. Delete Room Function
// export const deleteRoom = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to delete room from backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error deleting room:", error);
//     return null;
//   }
// };

// // Booking Function : Create Booking
// export const createBooking = async (bookingData) => {
//   try {
//     const res = await fetch("http://localhost:8000/bookings", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(bookingData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to create booking in backend");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     return null;
//   }
// };

//============================
// // 1. Get All Rooms
// export const rooms = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/rooms", {
//       cache: "no-store",
//     });
//     if (!res.ok) throw new Error("Failed to fetch data from backend");
//     return await res.json();
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// // 2. Get Single Room Details
// export const getRoomDetails = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching room details from backend:", error);
//     return null;
//   }
// };

// // 3. Create/Add New Room
// export const createRoom = async (roomData) => {
//   try {
//     const res = await fetch("http://localhost:8000/addRooms", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(roomData),
//     });
//     if (!res.ok) throw new Error("Failed to add new room to backend");
//     return await res.json();
//   } catch (error) {
//     console.error("Error creating room:", error);
//     return null;
//   }
// };

// // 4. Update Existing Room
// export const updateRoom = async (roomId, updatedData) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedData),
//     });
//     if (!res.ok) throw new Error("Failed to update room in backend");
//     return await res.json();
//   } catch (error) {
//     console.error("Error updating room:", error);
//     return null;
//   }
// };

// // 5. Delete Room Function
// export const deleteRoom = async (roomId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
//       method: "DELETE",
//     });
//     if (!res.ok) throw new Error("Failed to delete room from backend");
//     return await res.json();
//   } catch (error) {
//     console.error("Error deleting room:", error);
//     return null;
//   }
// };

// // 6. Get All Bookings for a Specific User : Booking Data
// export const getAllBookings = async (userId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/bookings?userId=${userId}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) throw new Error("Failed to fetch bookings from backend");
//     return await res.json();
//   } catch (error) {
//     console.error("Error getting bookings:", error);
//     return [];
//   }
// };

// // 7. Cancel Booking In Backend (PATCH Method)
// export const cancelBooking = async (bookingId, userId) => {
//   try {
//     const res = await fetch(
//       `http://localhost:8000/bookings/${bookingId}/cancel`,
//       {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId }),
//       },
//     );
//     if (!res.ok) throw new Error("Failed to cancel booking");
//     return await res.json();
//   } catch (error) {
//     console.error("Error cancelling booking in backend:", error);
//     return null;
//   }
// };

//===========================
// 1. Get All Rooms
export const rooms = async () => {
  try {
    const res = await fetch("http://localhost:8000/rooms", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch data from backend");
    return await res.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// 2. Get Single Room Details
export const getRoomDetails = async (roomId) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching room details from backend:", error);
    return null;
  }
};

// 3. Create/Add New Room
export const createRoom = async (roomData) => {
  try {
    const res = await fetch("http://localhost:8000/addRooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomData),
    });
    if (!res.ok) throw new Error("Failed to add new room to backend");
    return await res.json();
  } catch (error) {
    console.error("Error creating room:", error);
    return null;
  }
};

// 4. Update Existing Room
export const updateRoom = async (roomId, updatedData) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) throw new Error("Failed to update room in backend");
    return await res.json();
  } catch (error) {
    console.error("Error updating room:", error);
    return null;
  }
};

// 5. Delete Room Function
export const deleteRoom = async (roomId) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete room from backend");
    return await res.json();
  } catch (error) {
    console.error("Error deleting room:", error);
    return null;
  }
};

// 6. Get All Bookings for a Specific User
export const getAllBookings = async (userId) => {
  try {
    const res = await fetch(`http://localhost:8000/bookings?userId=${userId}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch bookings from backend");
    return await res.json();
  } catch (error) {
    console.error("Error getting bookings:", error);
    return [];
  }
};

// 7. Cancel Booking In Backend (PATCH Method)
export const cancelBooking = async (bookingId, userId) => {
  try {
    const res = await fetch(
      `http://localhost:8000/bookings/${bookingId}/cancel`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      },
    );
    if (!res.ok) throw new Error("Failed to cancel booking");
    return await res.json();
  } catch (error) {
    console.error("Error cancelling booking in backend:", error);
    return null;
  }
};
