await fetch("http://127.0.0.1:8000/update-status",{
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