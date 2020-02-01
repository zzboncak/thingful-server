const bcrypt = require('bcryptjs');

let password = 'ping-password';

// let salt = bcrypt.genSaltSync(1);
// let hash = bcrypt.hashSync(password, salt);

bcrypt.hash(password, 12, function(err, hash) {
    console.log('hash', hash);
    console.log('match?', bcrypt.compareSync(password, hash));
});
