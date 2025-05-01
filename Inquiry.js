// script.js
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatBody = document.getElementById("chatBody");

    if (userInput.trim() !== "") {
        // Add user message
        const userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = userInput;
        chatBody.appendChild(userMessage);

        // Simulate bot response
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.textContent = "Thank you for your inquiry! We will get back to you shortly.";
        chatBody.appendChild(botMessage);

        // Clear input field
        document.getElementById("userInput").value = "";

        // Scroll to the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}


