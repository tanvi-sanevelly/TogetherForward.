let messages = [];
const reactions = ['👍', '❤️', '😊', '😁'];

let listenerID = "UNIQUE_LISTENER_ID";



function sendMessage() {
    const input = document.getElementById('messageInput');
    const fileInput = document.getElementById('fileInput');
    const message = input.value.trim();
    const file = fileInput.files[0];

    if (message || file) {
        const newMessage = {
            text: message,
            file: file ? file.name : null,
            reactions: {},
            timestamp: new Date().getTime()
        };
        
        messages.push(newMessage);
        renderMessages();
        input.value = '';
        fileInput.value = '';
    }
}

function toggleReaction(messageIndex, reactionType) {
    const message = messages[messageIndex];
    if (message.reactions[reactionType]) {
        delete message.reactions[reactionType];
    } else {
        message.reactions[reactionType] = true;
    }
    renderMessages();
}

function renderMessages() {
    const container = document.getElementById('messageContainer');
    container.innerHTML = '';
    
    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message-bubble';
        
        let content = message.text;
        if (message.file) {
            content += `<br><small>📎 ${message.file}</small>`;
        }
        messageElement.innerHTML = content;
        
        const reactionsPanel = document.createElement('div');
        reactionsPanel.className = 'reactions-panel';
        
        reactions.forEach(reaction => {
            const button = document.createElement('button');
            button.className = `reaction-btn ${message.reactions[reaction] ? 'active-reaction' : ''}`;
            button.textContent = reaction;
            button.onclick = () => toggleReaction(index, reaction);
            reactionsPanel.appendChild(button);
        });
        
        messageElement.appendChild(reactionsPanel);
        container.appendChild(messageElement);
    });
    
    container.scrollTop = container.scrollHeight;
}


    const chatHistory = document.getElementById('chatHistory');
    const chatMessage = document.getElementById('chatMessage');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    // Function to toggle Send button based on input field
    function toggleSendButton() {
        sendMessageBtn.disabled = chatMessage.value.trim() === '';
    }

    // Function to append a new message to chat
    function addMessage(messageText, type) {
        const message = document.createElement('div');
        message.classList.add('message');
        message.classList.add(type);  // 'sent' or 'received'
        message.textContent = messageText;
        chatHistory.appendChild(message);
        chatHistory.scrollTop = chatHistory.scrollHeight;  // Scroll to the bottom
    }

// Event listeners
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('fileInput').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        sendMessage();
    }
});

// Initialize with a sample message
messages.push({
    text: "Welcome to the chat!",
    reactions: {},
    timestamp: new Date().getTime()
});
renderMessages();

let reactionCount = 0;

reactionButton.addEventListener("click", () => {
  reactionCount++;
  // Update the UI to reflect the new reaction count
});




// JavaScript for search functionality
function searchTopics() {
    const searchValue = document.getElementById('searchBox').value.toLowerCase();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling.textContent.toLowerCase();
        checkbox.closest('td').style.display = label.includes(searchValue) ? 'table-cell' : 'none';
    });
}

// Initializing the chat history from localStorage or as an empty array if not present
let = JSON.parse(localStorage.getItem('chatHistory'))


// Function to save the chat history in localStorage
function saveChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
}
{

    if (messageText || file) {
        const newMessage = {
            text: messageText,
            file: file ? file.name : null,
            reactions: {},
            timestamp: new Date().getTime()
        };
        
        messages.push(newMessage);
        renderMessages();
        saveChatHistory(); // Save the chat history to localStorage
        input.value = '';  // Clear the message input
        fileInput.value = ''; // Clear the file input
    }
}

// Function to toggle reactions
function toggleReaction(messageIndex, reactionType) {
    const message = messages[messageIndex];
    if (message.reactions[reactionType]) {
        delete message.reactions[reactionType];
    } else {
        message.reactions[reactionType] = true;
    }
    renderMessages();
    saveChatHistory(); // Save the updated chat history to localStorage
}

// Function to render all messages
function renderMessages() {
    const container = document.getElementById('messageContainer');
    container.innerHTML = '';
    
    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message-bubble';
        
        // Message text and file attachment
        let content = `<div>${message.text || ''}</div>`;
        if (message.file) {
            content += `<br><small>📎 ${message.file}</small>`;
        }
        messageElement.innerHTML = content;
        
        // Reactions panel
        const reactionsPanel = document.createElement('div');
        reactionsPanel.className = 'reactions-panel';
        
        reactions.forEach(reaction => {
            const button = document.createElement('button');
            button.className = `reaction-btn ${message.reactions[reaction] ? 'active-reaction' : ''}`;
            button.textContent = reaction;
            button.onclick = () => toggleReaction(index, reaction);
            reactionsPanel.appendChild(button);
        });
        
        messageElement.appendChild(reactionsPanel);
        container.appendChild(messageElement);
    });
    
    // Scroll to the bottom of the chat container
    container.scrollTop = container.scrollHeight;
}

// Load messages from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    renderMessages();
});

// Event listeners for sending messages with Enter key or file upload
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('fileInput').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        sendMessage();
    }
});

// Initialize with a welcome message if there are no saved messages
if (messages.length === 0) {
    messages.push({
        text: "Welcome to the chat!",
        reactions: {},
        timestamp: new Date().getTime()
    });
    saveChatHistory(); // Save the initial message to localStorage
    renderMessages();
}







