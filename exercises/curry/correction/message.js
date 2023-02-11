// Exemple POC
// Cas d'application en imaginant que l'on souhaite envoyer un même message à plusieurs utilisateurs

import { curry } from "./curry.js";

const sendMessage = (message, email) => {
  // Send message to mailing API
  console.log(`Sending message "${message}" to ${email}...`);
};

const curriedSendMessage = curry(sendMessage);
const sendPromotionMessage = curriedSendMessage("Promotions sur les saucisses !");

// On peut aussi l'écrire en une ligne directement :

// const sendPromotionMessage = curry(sendMessage)("Promotions sur les saucisses");

sendPromotionMessage("jadoreles@example.com");
// Sending message "Promotions sur les saucisses !" to jadoreles@example.com...
sendPromotionMessage("saucisses@example.com");
// Sending message "Promotions sur les saucisses !" to saucisses@example.com...
