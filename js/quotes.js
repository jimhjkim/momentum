const quotes = [
    {
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
        author: "Amanda Gorman"
    },
    {
        quote: "Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.",
        author: "Gabrielle Union"
    },
    {
        quote: "Don't sit down and wait for the opportunities to come. Get up and make them.",
        author: "Madam C.J Walker"
    },
    {
        quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.",
        author: "Michelle Obama"
    },
    {
        quote: "When your dreams are bigger than the places you find yourself in, sometimes you need to seek out your own reminders that there is more. And there is always more waiting for you on the other side of fear.",
        author: "Elaine Welteroth"
    },
    {
        quote: "All dreams are within reach. All you have to do is keep moving towards them.",
        author: "Viola Davis"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote['quote'];
author.innerText = todaysQuote['author'];