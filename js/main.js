var quotes = [{
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde",
}, {
    "quote": "So many books, so little time.",
    "author": "Frank Zappa",
}, {
    "quote": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero",
}, {
    "quote": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West",
}, {
    "quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi",
}, {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost",
}, {
    "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson",
}, {
    "quote": "I have not failed. I've just found 10,000 ways that won't work.",
    "author": "Thomas A. Edison",
}, {
    "quote": "It is never too late to be what you might have been.",
    "author": "George Eliot",
}, {
    "quote": "A friend is someone who knows all about you and still loves you.",
    "author": "Elbert Hubbard",
}, {
    "quote": "Always forgive your enemies; nothing annoys them so much.",
    "author": "Oscar Wilde",
}, {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi",
}, {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston S. Churchill",
}, {
    "quote": "Without music, life would be a mistake.",
    "author": "Friedrich Nietzsche",
}, {
    "quote": "We accept the love we think we deserve.",
    "author": "Stephen Chbosky",
}, {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
}, {
    "quote": "The only thing we have to fear is fear itself.",
    "author": "Franklin D. Roosevelt",
}, {
    "quote": "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "author": "Edmund Burke",
}
];

let usedQuotes = [];

function generateQuote() {
    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }

    let randomQuote;

    do {
        randomQuote = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomQuote));

    usedQuotes.push(randomQuote);


    document.getElementById('quote').innerHTML = `"${quotes[randomQuote].quote}"`;
    document.getElementById('author').innerHTML = `- ${quotes[randomQuote].author}`;
}