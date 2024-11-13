
<script>
    function toggleChat() 
        const iframe = document.querySelector('.chatbot-iframe');
        const button = document.querySelector('.chat-button');

        if (iframe.style.display === 'none') 
            iframe.style.display = 'block';
            button.textContent = 'Close AI Chat';
         else 
            iframe.style.display = 'none';
            button.textContent = 'Open AI Chat';
         
  
</script>
