const bcrypt = require('bcryptjs');

let password = 'ping-password';

let salt = '$2a$10$dXIUVa.20.ZzICuQjoaZo.';
let hash = bcrypt.hashSync(password, salt);

console.log('salt', salt);
console.log('hash', hash);
console.log('match?', bcrypt.compareSync(password, hash));
