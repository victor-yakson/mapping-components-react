import React from "react";
function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emojiTitle}</span>
      </dt>
      <dd>{props.dd}</dd>
    </div>
  );
}
export default Term;
