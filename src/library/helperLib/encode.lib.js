const crypto = require("crypto");
const { ENCRYPTION } = require("../../config/config.json");

let algorithm = "aes-256-cbc";  
let key = ENCRYPTION.ENCRYPTION_KEY;  //KEY used for encryption and decryption. Defined in config.json
let secretiv = ENCRYPTION.ENCRYPTION_IV; //IV used for encryption and decryption. Defined in config.json

class encryptLib {
  encryptText(text) {
    let keystring = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("hex")
      .substr(0, 32);

    let ivv = crypto
      .createHash("sha256")
      .update(String(secretiv))
      .digest("hex")
      .substr(0, 16);

    const cipher = crypto.createCipheriv(algorithm, keystring, ivv);
    const encrypted =
      cipher.update(text, "utf8", "base64") + cipher.final("base64");

    return new URLSearchParams({ data: encrypted }).toString().replace("data=",'');
  }
}

module.exports = encryptLib;
