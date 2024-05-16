console.log("JavaScript file loaded successfully!");

var changeBtn = document.getElementById("changeBtn");
var quoteOutput = document.getElementById("quoteOutput");
var authorOutput = document.getElementById("authorOutput");

var quotes = [
    { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    { quote: "“So many books, so little time.”", author: "― Frank Zappa" },
    { quote: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
    { quote: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
    { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" },
    { quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”", author: "― Ralph Waldo Emerson" },
    { quote: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },
    { quote: "“Without music, life would be a mistake.”", author: "― Friedrich Nietzsche" },
    { quote: "“We accept the love we think we deserve.”", author: "― Stephen Chbosky" },
    { quote: "“It is never too late to be what you might have been.”", author: "― George Eliot" }
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    quoteOutput.textContent = randomQuote.quote;
    authorOutput.textContent = randomQuote.author;
}

changeBtn.addEventListener("click", generateQuote);



