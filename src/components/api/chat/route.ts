const sendMessage = async (msg) => {
  const res = await fetch("http://127.0.0.1:5000/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ msg }),
  });

  const data = await res.json();
  console.log(data);
};