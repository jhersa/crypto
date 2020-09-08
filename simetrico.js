const crypto = require("crypto");
const key = "secret";
const message = process.env.MESSAGE || "Hola Mundo";

function encode(message, key) {
  const mykey = crypto.createCipher("aes-128-cbc", key);

  let mystr = mykey.update(message, "utf8", "hex");

  mystr += mykey.final("hex");

  return mystr;
}

function decode(message, key) {
  const mykey = crypto.createDecipher("aes-128-cbc", key);

  let mystr = mykey.update(message, "hex", "utf8");

  mystr += mykey.final("utf8");

  return mystr;
}

let value = encode(message, key);
console.log("########## Simétrico ##########");
console.log(`Mensaje: ${message}`);
console.log(`Cifrado: ${value}`);

value = decode(value, key);
console.log(`Descifrado: ${value}`);
console.log("---------------------------------");
