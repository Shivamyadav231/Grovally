const BACKEND = (import.meta as any).env.VITE_BACKEND_URL || "https://grovally-backend-10.onrender.com";

const sendMessage = async (msg: string) => {
  const res = await fetch(`${BACKEND}/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ msg }),
  });

  const data = await res.json();
  console.log(data);
};
