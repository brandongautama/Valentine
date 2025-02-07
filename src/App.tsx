import { useState } from "react";
import "./App.css";

class PhraseWithLink {
  phrase: string;
  link: string;
  width: number;
  height: number;
  constructor(phrase, link, width, height) {
    this.phrase = phrase;
    this.link = link;
    this.width = width;
    this.height = height;
  }
}

const phrasesWithLinks = [
  new PhraseWithLink(
    "No",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3R4bzBuYmkzcTRnZjA0YXd2NGJ4N3QwN3hqYjYwYTdhaXJ0ZTZucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5UG0RC6L6oEL7cMZss/giphy.gif",
    270,
    270
  ),
  new PhraseWithLink(
    "Please",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHNkMjJ4NGI0YmN5cTczcGNzMnU3ZTB5aGVwMThlazlsczhoMTFuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ftMof53RYydASArrps/giphy.gif",
    320,
    320
  ),
  new PhraseWithLink(
    "Please??",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJlMzY2a2w5NDlhdTMxc2c2Y3ZxaDFyOWtlcmpreDU1ZGk5NDE0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14oABfwMhnvZfi/giphy.gif",
    220,
    220
  ),
  new PhraseWithLink(
    "If you say no, I'll be very sad",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWw5YnJrdjdpYm1xaHAzNG1wN3FwOW1pZGJudmkwbGtldTBtazJjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AKWXpDjlLgYFe1cZou/giphy.gif",
    220,
    220
  ),
  new PhraseWithLink(
    "I'm not crying...",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG11cTgzM2h4a2NjY2xzYjVmcHMzb3ZnMjhrMHJ6OG9qd2htNG5wciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10tIjpzIu8fe0/giphy.gif",
    280,
    280
  ),
  new PhraseWithLink(
    "I'm still not crying...",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamxxa21kM2U5ZXV0dWNrMjI5Nmg3bTExazFndDU5M2R4ZmJnbGxkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PW24kUmUv3vlm/giphy.gif",
    280,
    280
  ),
];

const strikethroughStyle = {
  textDecoration: "line-through",
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getPhraseWithLink() {
    return phrasesWithLinks[Math.min(noCount, phrasesWithLinks.length - 1)];
  }

  function getLink() {
    return getPhraseWithLink().link;
  }

  function getNoButtonText() {
    const phrase = getPhraseWithLink().phrase;
    if (phrase == "I'm not crying...") {
      return (
        <div>
          <span>I'm </span>
          <span style={strikethroughStyle}>not </span>
          <span> crying...</span>
        </div>
      );
    }
    if (phrase == "I'm still not crying...") {
      return (
        <div>
          <span>I'm still </span>
          <span style={strikethroughStyle}>not </span>
          <span> crying...</span>
        </div>
      );
    }
    return (
      <div>
        <span>{phrase}</span>
      </div>
    );
  }

  function getWidth() {
    return getPhraseWithLink().width;
  }

  function getHeight() {
    return getPhraseWithLink().height;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            // src="https://media1.tenor.com/m/q1_FYZWl46sAAAAC/love-snoopy.gif"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ZzMjQ0ZXU2MG15dGFxbnhscWsyZ3VieHJkb2NoeW55b292YmxwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qCT06WLJURMyfsEi2r/giphy.gif"
            // src="https://media1.tenor.com/m/NK95yJitWlUAAAAC/snoopy-heart.gif"
            // src="https://media1.tenor.com/m/61TCZiX7nQYAAAAC/love-you.gif"
            width={300}
            height={300}
          />
          <div className="text-4xl my-4 text-center">Yay!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src={getLink()}
            width={getWidth()}
            height={getHeight()}
          />
          <h1 className="text-4xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

