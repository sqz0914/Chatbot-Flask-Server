// static/js/script.js

function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    $.ajax({
        url: '/chat/1x2abc/1',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 
            user_input: userInput,
            message_id: uuidv4(),
            timestamp: Date.now().toLocaleString()
        }),
        success: function(data) {
            $('#chatbox').append('<p><strong>You:</strong> ' + userInput + '</p>');
            $('#chatbox').append('<p><strong>Bot:</strong> ' + data.response + '</p>');
            document.getElementById('userInput').value = ''; // Clear input field
        },
        error: function() {
            alert('Error sending message');
        }
    });
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}