const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://grovally-backend-14.onrender.com";

await fetch(`${BACKEND}/update-status`,{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify ({
        email:profile.email,
        name: profile.name,
        status: steps[currentStep]

    })
})