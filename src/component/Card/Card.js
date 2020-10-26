import React, { useState } from "react";
import "./card.css";

export default function Card({ todo, onDragEnd }) {
  return (
    <div
      className={"cardStyle"}
      draggable={true}
      onDragEnd={(e) => {
        onDragEnd(e, todo);
      }}
    >
      <div>
        <h4>{todo.name}</h4>
      </div>
      <div>
        <strong>Description: </strong>
        {todo.description}
        <br />
      </div>
    </div>
  );
}
