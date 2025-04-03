const backendURL = "https://website-practice01.onrender.com"; // Replace with Render's URL

fetch(`${backendURL}/store-message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message }),
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));

const emailinput = document.getElementById("email_input");
const textinput = document.getElementById("text_box");
const submitbutton = document.getElementById("submit");
const output = document.getElementById("output");

submitbutton.addEventListener("click", async function () {
    const email = emailinput.value;
    const message = textinput.value;

    if (!email || !message) {
        alert("Please enter both an email and a message.");
        return;
    }

    // Send data to backend
    try {
        const response = await fetch("https://website-practice01.onrender.com/save-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, message })
        });

        const result = await response.json();

        if (result.success) {
            output.innerText = "Message saved successfully!";
            emailinput.value = "";
            textinput.value = "";
        } else {
            output.innerText = "Error saving message: " + result.error;
        }
    } catch (error) {
        console.error("Error:", error);
        output.innerText = "Failed to connect to server.";
    }
});

