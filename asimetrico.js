const nodeRSA = require("node-rsa");
const rsa = new nodeRSA({ b: 512 });
const message = process.env.MESSAGE || "Hola Mundo";

rsa.generateKeyPair();

const key = {
  public: rsa.exportKey("public"),
  private: rsa.exportKey("private"),
};

const encrypt = rsa.encrypt(message, "base64");
const decrypt = rsa.decrypt(encrypt, "utf8");

console.log("########## Asimétrico ##########");
console.log(`Mensaje: ${message}`);

console.log(`Cifrado en bas64:\n${encrypt}`);

console.log(`Descifrado: ${decrypt}`);
console.log("---------------------------------");