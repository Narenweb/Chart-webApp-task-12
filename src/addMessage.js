    //Adding msg functionality
    const inputBox = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const msgWrapper = document.getElementById('msg-wrapper');
    const typerName = document.querySelector('.typing');
    const dotsContainer = document.getElementById('dots');
   
   
    sendButton.addEventListener('click', sendMessage);
    inputBox.addEventListener('input', handleInput);
    inputBox.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    });
    function handleInput() {
        // Show or hide the typing indicator and dots based on input
        if (inputBox.value.trim() === '') {
            typerName.style.display = "none";
            dotsContainer.style.display = 'none';
        } else {
            typerName.style.display = "flex";
            dotsContainer.style.display = 'flex';
        }
    }

    function sendMessage() {
        const messageText = inputBox.value.trim();
        if (messageText !== '') {

            addMessage(messageText);
            inputBox.value = '';
            msgWrapper.scrollTop = msgWrapper.scrollHeight;
            typerName.style.display = "none";
            dotsContainer.style.display = 'none';
        }
    }

    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('msg');
        messageElement.textContent = message;
        messageElement.setAttribute('data-time', getCurrentTime());

        msgWrapper.appendChild(messageElement);

        if (msgWrapper.scrollHeight > msgWrapper.clientHeight) {
            msgWrapper.scrollTop = msgWrapper.scrollHeight;
        }
    }

    function getCurrentTime() {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }
    const svgIcon = document.querySelector('#themeToggleSvg');
    const pageWrapper = document.querySelector('#pageWrapper');

    svgIcon.addEventListener('click', () => {
        pageWrapper.classList.toggle('dark-theme');
    });