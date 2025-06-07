// Get references to HTML elements
const nameInput = document.getElementById("my-name-input");
const messageInput = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

// Server URL
const serverURL = `https://it3049c-chat.fly.dev/messages`;

// Fetch messages from the server
function fetchMessages() {
    return fetch(serverURL)
        .then(response => response.json());
}

// Format a message into HTML
function formatMessage(message, myNameInput) {
    const time = new Date(message.timestamp);
    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

    if (myNameInput === message.sender) {
        return `
        <div class="mine messages">
            <div class="message">
                ${message.text}
            </div>
            <div class="sender-info">
                ${formattedTime}
            </div>
        </div>
        `;
    } else {
        return `
        <div class="yours messages">
            <div class="message">
                ${message.text}
            </div>
            <div class="sender-info">
                ${message.sender} ${formattedTime}
            </div>
        </div>
        `;
    }
}

// This function updates the chat box with the latest messages
async function updateMessagesInChatBox() {
    const messages = await fetchMessages();

    // Optional debug
    // console.log("Messages fetched:", messages);

    let formattedMessages = "";
    messages.forEach(message => {
        formattedMessages += formatMessage(message, nameInput.value);
    });

    chatBox.innerHTML = formattedMessages;
}

// Send a message to the server
function sendMessages(username, text) {
    const newMessage = {
        sender: username,
        text: text,
        timestamp: new Date()
    };

    return fetch(serverURL, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    });
}

// Handle Send button click
sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    const sender = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (sender && message) {
        sendMessages(sender, message)
            .then(updateMessagesInChatBox); // Refresh chat after sending
    }

    messageInput.value = "";
});

// Call update on page load and every 10 seconds
const MILLISECONDS_IN_TEN_SECONDS = 10000;
updateMessagesInChatBox(); // Initial call
setInterval(updateMessagesInChatBox, MILLISECONDS_IN_TEN_SECONDS);
