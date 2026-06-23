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
