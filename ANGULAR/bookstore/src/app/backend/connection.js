const mongoose = require('mongoose');

const url = 'mongodb://localhost/bookstore';
const db = mongoose.connection;
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.once('open', () =>{
    console.log('connected to database: ', url);
})

db.on('error', (err) =>{
    console.log('error: ', err);
})
