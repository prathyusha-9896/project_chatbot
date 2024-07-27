var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var user = { message: "" };
var arrayOfPossibleMessage = [
    { message: "hi", response: "hello" },
    { message: "Hi", response: "Hello" },
    { message: "good morning", response: "hello, good morning," },
    { message: "how are you?", response: "fine, how about you?" },
    { message: "what are you doing?", response: "Hey, I am waiting for you reply" },
    { message: "where are you?", response: "Iam here with you, My love.." },
];

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right';
    messageElement.style.margin = '30px';

    messageElement.innerHTML = "<span> you: </span>" + "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage) {
    var chatbotmessage = "";

  if (userMessage == "how are you?" || userMessage == "Hi" ) {
        chatbotmessage = "I'm great";
    } else if (userMessage.length > 5) {
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));
        if (result.length > 0) {
            var response = result[0].response;
            chatbotmessage = response;
        } else{
            chatbotmessage = "please send another message";
        }
    }else{
        chatbotmessage = "please send a different message"
    }

    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" + "<span>" + chatbotmessage + "</span>";
    setTimeout(() =>{
        messageElement.animate([{easing:"ease-in", opacity: 0.4}, {opacity: 1}], {duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000)
}

sendBtn.addEventListener('click', function(e) {
    var userMessage = textbox.value;
    if (userMessage == "") {
        alert('please type in a message');
    } else {
        let userMessageText = userMessage.trim();
        userMessage = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});
