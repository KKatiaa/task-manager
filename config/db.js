import mongoose from 'mongoose';

const URI = 'mongodb+srv://Kateryna:qwerty123@cluster0.rhyinoa.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI).then(() => {
    console.log('connected to mongooseDB');
}).catch((e) => {
    console.error(e);
});