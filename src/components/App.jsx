import React from "react";
import Tcard from "./Terms";
import emojipedia from "../emojipedia";

function createTerm(term) {
  return (
    <Tcard
      key={term.id}
      emoji={term.emoji}
      dd={term.meaning}
      emojiTitle={term.name}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createTerm)}</dl>
    </div>
  );
}

export default App;
