const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L론허바드",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다.",
    author: "터키속담",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "앙드레 말로",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지니라",
    author: "하버드",
  },
  {
    quote:
      "성공의 비결은 단 한가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
    author: "쇼펜하우어",
  },
  {
    quote:
      "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    author: "조 지라드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
