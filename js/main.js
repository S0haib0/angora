var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var writer = document.getElementById("writer");
var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    writer: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    writer: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    writer: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    writer: "― Marcus Tullius Cicero",
  },

  ,
  ,
];

var temp = quotes;
var clone = temp;
btn.addEventListener("click", function () {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[randomQuote].quote;
  writer.innerHTML = quotes[randomQuote].writer;
});
