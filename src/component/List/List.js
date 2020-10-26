import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./list.css";

export default function List({
  name,
  stage,
  todos,
  onDragEnter,
  onDragEnd,
  onDeleteList,
}) {
  const [mouseIsHovering, setMouseIsHovering] = useState(false);

  useEffect(() => {
    setMouseIsHovering(false);
  }, [mouseIsHovering]);

  const generateTodoCards = () => {
    return todos.slice(0).map((todo) => {
      return <Card todo={todo} key={todo.name} onDragEnd={onDragEnd} />;
    });
  };
  return (
    <div
      className={`${"columnStyle"} ${
        mouseIsHovering ? "mouseIsHovering" : "mouseNotHovering"
      }`}
      onDragEnter={(e) => {
        setMouseIsHovering(true);
        onDragEnter(e, stage);
      }}
      onDragExit={(e) => {
        setMouseIsHovering(false);
      }}
    >
      <div>
        <h4>{name}</h4>
        {todos.length ? (
          <button onClick={(e) => onDeleteList(e, stage)}>Delete List</button>
        ) : null}
      </div>
      {generateTodoCards()}
      <br />
    </div>
  );
}
