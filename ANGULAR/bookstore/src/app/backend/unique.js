require('./connection');
const User = require('./models/User');

async function main() {
    const user = new User({
        username: 'Omar',
        password: '123'
    })
    
    const userSaved = await user.save();
    return userSaved;
}

main().then(userSaved => console.log(userSaved)).catch(err => console.log(err));