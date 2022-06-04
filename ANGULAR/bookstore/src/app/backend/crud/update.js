require('../connection');
const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({username:'Juanito'});
    user.password = '123asdf';
    user.save();
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username:'Juanito'},{name:'Juan'}, {new: true});
    console.log(user);
}

async function updateUsers(){
    const user = await User.update({username:'Juan'},{username:'Juanito'});
    console.log(user);
}

// updateUsers();
// someFunction();
otherFunction();