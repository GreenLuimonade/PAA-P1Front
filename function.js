        function sendMessage() {
            var message = document.getElementById('messageInput').value;

            fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            }).then(response => {
                if (response.ok) {
                    alert('Message sent successfully');
                    loadLastMessage();
                } else {
                    alert('Failed to send message');
                }
            });
        }

        function loadLastMessage() {
            fetch('/api/messages/latest')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('lastMessage').textContent = data.content;
                });
        }

        // Load the latest message when the page loads
        window.onload = loadLastMessage;
