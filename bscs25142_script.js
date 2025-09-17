function stock(id) {
    let x = document.getElementById(id).textContent;
    if (x.includes('In Stock')) {
        alert("In Stock");
    } else {
        alert("Out of Stock");
    }
}





document.getElementById("date").innerText = new Date().getFullYear();

function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("myText").value.trim();
    const contact = document.getElementById("myText2").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^(?:\+92|0092|0)?3[0-9]{9}$/;

    if (email === "" || contact === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phonePattern.test(contact)) {
        alert("Please enter a valid Pakistani phone number (e.g., 03001234567).");
        return false;
    }

    alert("Thank you for reaching us!");
    return true;
}


function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello there! How can I help you today?";
  } else if (input.includes("how are you")) {
    return "I'm just a program, but thanks for asking! I'm doing great.";
  } else if (input.includes("what is your name")) {
    return "I don't have a name. I'm a simple chatbot created with JavaScript.";
  } 
  
  else if (input.includes("products") || input.includes("bikes") || input.includes("motorcycles") || input.includes("sell")) {
    return "We specialize in a wide range of new and pre-owned Kawasaki motorcycles. Our collection includes the popular Ninja series, street bikes, and more. You can view all our bikes on the Products page!";
  }
  
  else if (input.includes("bye") || input.includes("goodbye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "Sorry, I don't understand that. Can you ask something else?";
  }
}
function sendMessage() {
  let input = document.getElementById("user-input").value;
  let chatLog = document.getElementById("chat-log");

  if (input.trim() === "") {
    return;
  }

  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  userMsg.classList.add("user-message");
  chatLog.appendChild(userMsg);

  document.getElementById("user-input").value = "";

  setTimeout(() => {
    let botResponse = getBotResponse(input);
    let botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + botResponse;
    botMsg.classList.add("bot-message");
    chatLog.appendChild(botMsg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 500); 
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});