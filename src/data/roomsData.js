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
export const rooms = async () => {
  try {
    const res = await fetch("http://localhost:8000/rooms", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from backend");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// 2. Gen Single Room Details Fetch function :
export const getRoomDetails = async (roomId) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching room details from backend:", error);
    return null;
  }
};

// 3. Create/Add New Room Function : POST Request
export const createRoom = async (roomData) => {
  try {
    const res = await fetch("http://localhost:8000/addRooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roomData),
    });

    if (!res.ok) {
      throw new Error("Failed to add new room to backend");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating room:", error);
    return null;
  }
};

// 4. Update Existing Room : PUT Request
export const updateRoom = async (roomId, updatedData) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error("Failed to update room in backend");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating room:", error);
    return null;
  }
};

// 5. Delete Room Function : DELETE Request
export const deleteRoom = async (roomId) => {
  try {
    const res = await fetch(`http://localhost:8000/rooms/${roomId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete room from backend");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting room:", error);
    return null;
  }
};
