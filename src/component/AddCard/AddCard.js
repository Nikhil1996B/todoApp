import React, { useState } from "react";
import "./addcard.css";
export default function AddCard() {
  const [cardInput, setCardInput] = useState(null);
  const [cardDescription, setCardDescription] = useState(
    "Click to ammend the description"
  );
  const [onfocus, setOnFocus] = useState(false);

  const handleDescription = (e) => {
    e.preventDefault();
    setCardDescription(e.target.value);
  };
  return (
    <div className={"add-card-form"}>
      <div className={"form-area"}>
        <h4>Card Title</h4>
        <form action="" id="card details">
          <div className={"text-area"}>
            {onfocus ? (
              <textarea
                value={cardDescription}
                autoFocus
                name={"description"}
                onChange={handleDescription}
                onBlur={() => setOnFocus(false)}
              ></textarea>
            ) : (
              <div
                className={"display-section"}
                onClick={() => setOnFocus(!onfocus)}
              >
                {cardDescription}
              </div>
            )}

            <button className={"button-container"}>Delete card</button>
          </div>
          <div className={"text-area"}>
            <AddComments />
          </div>
        </form>
      </div>
    </div>
  );
}
function AddComments() {
  const [cardComment, setComment] = useState([]);
  let newCardComment = [];

  const handleComment = (e) => {
    let value = e.target.value;
    let timeStamp = e.timeStamp;
    if (!value) return;
    newCardComment.push({
      comment: value,
      created: new Date(timeStamp),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment(newCardComment);
  };
  return (
    <div>
      {
        <textarea
          placeholder={"default comment feild"}
          name={"add-comments"}
          onChange={handleComment}
        ></textarea>
      }
      <button onClick={handleSubmit}> Add Comment</button>
      <ul>
        {cardComment
          ? cardComment.map((comment, index) => (
              <li key={index}>
                <span aria-label={`comment - ${comment.comment}`}>
                  {comment.comment}
                </span>
                <span aria-label={`commented on - ${comment.created}`}>
                  {`${comment.created}`}
                </span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
