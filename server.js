const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// For each section in this lab, you will create an Express route that accepts requests 
// at a specific URL and responds with res.send.

// 1. Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

// Response: Include the username from the URL in the response, such as “Hello there, Christy!” 
// or “What a delight it is to see you once more, Mathilda.”

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
})


// 2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// Examples: Matches routes like /roll/6 or /roll/20.

// Validation: If the parameter is not a number, respond with “You must specify a number.” For 
// instance, /roll/potato should trigger this response.

// Functionality: If a valid number is provided, respond with a random whole number between 0 
// and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”

app.get('/roll/:itemNumber', (req, res) => {
    const max = parseInt(req.params.itemNumber);
    if (isNaN(max) || max < 0) {
        return res.send('You must specify a number.');
    }
    const roll = Math.floor(Math.random() * max) + 1;
    res.send(`You rolled a ${roll}.`);
});

// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.

// Examples: Matches routes such as /collectibles/2 or /collectibles/0.

// Data Array:





app.listen(3000, () => {
    console.log('Listening on port 3000')
})