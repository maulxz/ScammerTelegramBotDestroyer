const { default: axios } = require("axios");

const message = "EMANG BOLEH ?!";

//change the url to your scammer bot
const url = `https://api.telegram.org/bot6680557007:AAGmHtzlEVGXJxKxxF62tUPFx9kmYeqk5QQ/sendMessage?parse_mode=markdown&chat_id=6465082908&text=${message}`;

async function sendMessage() {
    try {
        const response = await axios.get(url);
        if (response.status == 200) {
            console.log(response.statusText);
        } else {
            console.log("Message failed!");
        }
    } catch (error) {
        if (error.response && error.response.status == 404) {
            console.log("Error 404, retrying...");
            await sendMessage(); // Retry sending the message
        } else {
            console.error("Error:", error.message);
        }
    }
}

// Define the number of messages to send
const numberOfMessages = 10000;

// Function to send messages repeatedly
async function sendMessagesRepeatedly(count) {
    for (let i = 0; i < count; i++) {
        await sendMessage();
    }
}

// Call the function to send messages repeatedly
sendMessagesRepeatedly(numberOfMessages);
