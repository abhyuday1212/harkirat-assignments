import crypto from "crypto"

// Encryption
const dataToEncrypt = 'Sensitive information';
const encryptionKey = 'secretKey';
const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
let encryptedData = cipher.update(dataToEncrypt, 'utf-8', 'hex');
encryptedData += cipher.final('hex');
console.log('Encrypted Data:', encryptedData);

// Decryption
const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
decryptedData += decipher.final('utf-8');
console.log('Decrypted Data:', decryptedData);