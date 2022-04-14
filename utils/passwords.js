import CryptoJS from "crypto-js";
import generator from "generate-password";

export const generateHashedPassword = (password) => {
  var generatedPassword = password
    ? [password]
    : generator.generateMultiple(1, {
        length: 10,
        uppercase: true,
        numbers: true,
      });

  console.log(password, generatedPassword);

  var cipher = CryptoJS.AES.encrypt(
    generatedPassword[0].toString(),
    process.env.CRYPTO_JS_KEY
  );
  var hashedPassword = cipher.toString();

  return hashedPassword;
};

export const decryptPassword = (password) => {
  let decryptedPassword = CryptoJS.AES.decrypt(
    password,
    process.env.CRYPTO_JS_KEY
  );
  decryptedPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
};