const main = require('./main');

const key = '{REPLACE-ME}';
const salt = '{REPLACE-ME}'
const decryptedTattoo = '{REPLACE-ME}';
const encryptetTattoo = '{REPLACE-ME}';

test('encrypt my tattoos', () => {
  const encrypted = main.encrypt(key, salt, decryptedTattoo);
  console.debug('encryptedTattoo', encrypted);
  expect(encrypted).toStrictEqual(encryptetTattoo);
});

test('decrypt my tattoos', () => {
  const decrypted = main.decrypt(key, salt, encryptetTattoo);
  console.debug('decryptedTattoo', decrypted);
  expect(decrypted).toStrictEqual(decryptedTattoo);
});