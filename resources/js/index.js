// ✅ 1. Create references to the HTML elements
const nameInput = document.getElementById("my-name-input");
const messageInput = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

// ✅ 2. Define the server URL
const serverURL = `https://it3049c-chat.fly.dev/messages`;

// ✅ 3. Function to fetch messages from the server
function fetchMessages() {
    return fetch(serverURL)
        .then(response => response.json());
}

// ✅ 4. Formatter function for messages
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

// ✅ 5. Create updateMessagesInChatBox() function as described
async function updateMessagesInChatBox() {
    const messages = await fetchMessages();

    // Debug log to check structure (can be commented out if not needed)
    // console.log(messages);

    let formattedMessages = "";
    messages.forEach(message => {
        formattedMessages += formatMessage(message, nameInput.value);
    });

    chatBox.innerHTML = formattedMessages;
}

// ✅ 6. Create sendMessages() function
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

// ✅ 7. Add event listener to Send button
sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    const sender = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (sender && message) {
        sendMessages(sender, message)
            .then(updateMessagesInChatBox); // Refresh chat after sending
    }

    messageInput.value = ""; // Clear input field
});

// ✅ 8. Set interval to update chatbox every 10 seconds
const MILLISECONDS_IN_TEN_SECONDS = 10000;
setInterval(updateMessagesInChatBox, MILLISECONDS_IN_TEN_SECONDS);

// ✅ 9. Call the function once immediately
updateMessagesInChatBox();
