//async validation

async function asyncValidateEmail(email) {
    return new Promise((resolve, reject) => {
     
        setTimeout(() => {
            const isValid = email.endsWith('@example.com');
            resolve(isValid);
        }, 1000); 
    });
}

// Async validator function
async function validateEmailAsync(email) {
    try {
        const isValid = await asyncValidateEmail(email);
        return isValid;
    } catch (error) {
        console.error('Error during validation:', error);
        return false;
    }
}


const emailToValidate = 'user@example.com';

validateEmailAsync(emailToValidate)
    .then((isValid) => {
        if (isValid) {
            console.log('Email is valid');
        } else {
            console.log('Email is not valid');
        }
    })
    .catch((error) => {
        console.error('Validation error:', error);
    });


//using array of sub documents in modeling relationship
const mongoose = require('mongoose');

// Define a subdocument schema
const commentSchema = new mongoose.Schema({
    text: String,
    user: String,
});

// Define the main schema with an array of subdocuments
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [commentSchema],
});

// Create models
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

// Example usage
const newPost = new Post({
    title: 'Sample Post',
    content: 'This is a sample post content.',
    comments: [
        { text: 'Great post!', user: 'User1' },
        { text: 'Nice content!', user: 'User2' },
    ],
});

newPost.save((err, post) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Post saved:', post);
    }
});
