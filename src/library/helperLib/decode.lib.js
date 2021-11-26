const crypto = require("crypto");
const { Buffer } = require("buffer");
const { ENCRYPTION } = require("../../config/config.json");

const algorithm = "aes-256-cbc";
const key = ENCRYPTION.ENCRYPTION_KEY; //KEY used for decryption and encryption
const secretiv = ENCRYPTION.ENCRYPTION_IV; //IV used for decryption and encryption

class decryptLib {
  decryptText(encrypted) {
    try {
      let buff = Buffer.from(encrypted, "base64");
      let text = buff.toString("ascii");

      let keystringBuffer = crypto
        .createHash("sha256")
        .update(String(key))
        .digest("hex")
        .substr(0, 32);
      let ivvBuffer = crypto
        .createHash("sha256")
        .update(String(secretiv))
        .digest("hex")
        .substr(0, 16);

      let decipherBuffer = crypto.createDecipheriv(
        algorithm,
        keystringBuffer,
        ivvBuffer
      );

      let decBuffer = decipherBuffer.update(text, "base64", "utf8");
      decBuffer += decipherBuffer.final();
      return decBuffer;
    } catch {
      try {
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

        let decipher = crypto.createDecipheriv(algorithm, keystring, ivv);

        let dec = decipher.update(encrypted, "base64", "utf8");
        dec += decipher.final();
        try {
          return JSON.parse(dec);
        } catch {
          return dec;
        }
      } catch (e) {
        return encrypted;
      }
    }
  }
}

module.exports = decryptLib;
