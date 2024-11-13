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

function renderMessages() {
    const container = document.getElementById('messageContainer');
    container.innerHTML = '';
}
    
    messages.forEach(message, index) 
        const messageElement = document.createElement('div');
        messageElement.className = 'message-bubble';

        
        let content = message.text; {
        if (message.file) 
            content += `<br><small>📎 ${message.file}</small>`;
        }