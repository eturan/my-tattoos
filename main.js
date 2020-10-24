const aesjs = require('aes-js');
const pbkdf2 = require('pbkdf2');

module.exports.encrypt = (key, salt, tattoo) => {
  const keyBytes = pbkdf2.pbkdf2Sync(key, salt, 1, 256 / 8, 'sha512');
  const tattooBytes = aesjs.utils.utf8.toBytes(tattoo);
  const aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes);
  const encryptedTattooBytes = aesCtr.encrypt(tattooBytes);
  const encryptedTattoo = aesjs.utils.hex.fromBytes(encryptedTattooBytes);

  return encryptedTattoo;
}

module.exports.decrypt = (key, salt, tattoo) => {
  const keyBytes = pbkdf2.pbkdf2Sync(key, salt, 1, 256 / 8, 'sha512');
  const encryptedTattoo = aesjs.utils.hex.toBytes(tattoo);
  const aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes);
  const decryptedTattooBytes = aesCtr.decrypt(encryptedTattoo);
  const decryptedTattoo = aesjs.utils.utf8.fromBytes(decryptedTattooBytes);
  
  return decryptedTattoo;
}