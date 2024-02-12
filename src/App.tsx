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
    "https://media.tenor.com/qO8LJB0jccwAAAAi/snoopy-magic.gif",
    270,
    270,
  ),
  new PhraseWithLink(
    "Please",
    "https://media1.tenor.com/m/4_s-yZ_95nkAAAAC/snoopy-please.gif",
    180,
    180,
  ),
  new PhraseWithLink(
    "Please??",
    "https://stickershop.line-scdn.net/stickershop/v1/sticker/377795678/android/sticker.png;compress=true",
    180,
    180,
  ),
  new PhraseWithLink(
    "If you say no, I'll be very sad",
    "https://media1.tenor.com/m/cf-IrIoYWsUAAAAC/snoopy-cry.gif",
    150,
    150,
  ),
  new PhraseWithLink(
    "I'm not crying...",
    "https://stickerly.pstatic.net/sticker_pack/i41LErkjFwwtEvgrNji4A/DT4T3T/31/-1624520412.png",
    230,
    230,
  ),
  new PhraseWithLink(
    "I'm still not crying...",
    "https://stickerly.pstatic.net/sticker_pack/i41LErkjFwwtEvgrNji4A/DT4T3T/31/-1624520412.png",
    230,
    230,
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
            src="https://media1.tenor.com/m/MEPesrvyAwkAAAAC/snoopy-laughing.gif"
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
