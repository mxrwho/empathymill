document.addEventListener("DOMContentLoaded", () => {
    const prompts = [
        "Someone has been laughed at. How can you support them?",
        "A friend feels like a failure. What would you say to them?",
        "A friend achieved something great. How would you encourage them?",
        "Someone has been rejected. How can you lift their spirits?",
        "A child feels happy for no particular reason. How do you share their happiness?",
        "An animal comes to you for company. What do you do?"
    ];

    const images = [
        "images/branch1.png", 
        "images/branch2.png",
        "images/branch3.png",
        "images/branch4.png",
        "images/branch5.png",
        "images/branch6.png",
        "images/branch7.png",
        "images/branch8.png",
        "images/branch9.png",
        "images/branch10.png",
        "images/branch11.png",
        "images/branch12.png",
        "images/branch13.png"
    ];

    const promptContainer = document.getElementById("prompt");
    const inputField = document.getElementById("user-input");
    const submitButton = document.getElementById("submit-button");
    const visualContainer = document.getElementById("visual-container");

    let currentPromptIndex = 0;

 
    function displayPrompt() {
        promptContainer.textContent = prompts[currentPromptIndex];
    }

    function addImage(userInput) {
        const image = document.createElement("img");
        image.src = images[Math.floor(Math.random() * images.length)];
        image.alt = userInput; 
        image.classList.add("visual-item");

        // Random position inside the container
        const randomX = Math.random() * (visualContainer.clientWidth - 200); 
        const randomY = Math.random() * (visualContainer.clientHeight - 200);
        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;

        visualContainer.appendChild(image);

        // Fade-in effect
        setTimeout(() => {
            image.style.opacity = 1;
        }, 50);
    }

    // Handle user input
    submitButton.addEventListener("click", () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            addImage(userInput);
            inputField.value = "";

         
            currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
            displayPrompt();
        }
    });

    displayPrompt();
});
