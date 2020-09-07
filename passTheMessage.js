const messageOutput = document.getElementById('messageOutput');
const errorMessage = document.getElementById('errorMessage');

//function takes and displays input or displays error message
function takeInput() {
    var messageInput = document.getElementById('messageInput').value;
    var error = 'Please enter a value to pass.';
    input = messageInput;
    output = messageOutput;

    if (input === '') {
      output.textContent = error;
    } else {
      output.textContent = input;
    }
};



subBtn.addEventListener('click', takeInput);
