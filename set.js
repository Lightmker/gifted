// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐛𝐲 𝐋𝐀𝐃𝐘𝐁𝐔𝐆-𝐕𝟐❤️ 𝐁𝐘 𝐌𝐑 𝐍𝐓𝐀𝐍𝐃𝐎 𝐎𝐅𝐂💙*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.my.id"; // DO NOT Change this...
global.session = "https://pair1.giftedtech.my.id"; // DO NOT Change this....
global.footer = "*ᴾᵒʷᵉʳᵉᵈ ᵇʸ ᴺᵗᵃⁿᵈᵒ ᵀᵉᶜʰ*"; // Input Yours custom...(Maintain font for Flow)
global.myName = process.env.API_KEY;
global.myDb = "https://giftedmd.giftedtech.my.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.my.id";
global.pluginsdb = "https://cmds.giftedtech.my.id"; // DO NOT Change this...

 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "❤️", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ᴺᵗᵃⁿᵈᵒ ⱽ¹💙!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "263714138336 ", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐍𝐭𝐚𝐧𝐝𝐨 𝐓𝐞𝐜𝐡", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐍𝐭𝐚𝐧𝐝𝐨 𝐓𝐞𝐜𝐡", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "©𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐛𝐲 𝐋𝐀𝐃𝐘𝐁𝐔𝐆-𝐕𝟐❤️ 𝐁𝐘 𝐌𝐑 𝐍𝐓𝐀𝐍𝐃𝐎 𝐎𝐅𝐂💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "L",
API_KEY: process.env.API_KEY || "https://api.giftedtech.my.id", // Replace with your unlimited api key
// ANTIDELETE: process.env.ANTIDELETE || "false", // Still under development
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Activated by Gifted-Md. 📵 No Calls Allowed Dude!_*",
AUTO_REACT: process.env.AUTO_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝐋𝐀𝐃𝐘𝐁𝐔𝐆-𝐕𝟐❤️", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://i.ibb.co/XFqmWhs/file-5885.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
