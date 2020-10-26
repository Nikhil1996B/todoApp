import React, { useState, useEffect } from "react";
import List from "./component/List/List";
import AddCard from "./component/AddCard/AddCard";
import { todoList, columns } from "./model";
import "./App.css";

export default function ToDoBoard() {
  return (
    <div className={"app"}>
      <h1>To Do App</h1>
      <Board />
    </div>
  );
}

function Board() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodo] = useState([]);
  const [draggedOverCol, setDraggedOverCol] = useState(0);
  const [lists, setList] = useState(columns);
  // set todos to component state on component mount
  useEffect(() => {
    setLoading(false);
    setTodo(todoList);
  }, []);

  //this is called when a card is dragged over a column (called by column)
  const handleOnDragEnter = (e, stageValue) => {
    setDraggedOverCol(stageValue);
  };

  //this is called when a card dropped over a column (called by card)
  const handleOnDragEnd = (e, project) => {
    const updatedtodo = todos.slice(0);
    updatedtodo.find((todoObj) => {
      return todoObj.name === project.name;
    }).project_stage = draggedOverCol;
    setTodo(updatedtodo);
  };

  //Delete List
  const deleteList = (e, stage) => {
    let updatedtodo = todos.slice(0);
    updatedtodo = updatedtodo.filter(
      (todoObj) => todoObj.project_stage !== stage
    );
    setTodo(updatedtodo);
  };
  //Add New card to the list
  const addCard = () => {
    const newTodos = [];
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {lists.map((list) => {
        return (
          <>
            <List
              name={list.name}
              stage={list.stage}
              todos={todos.filter((todo) => {
                return parseInt(todo.project_stage, 10) === list.stage;
              })}
              onDragEnter={handleOnDragEnter}
              onDragEnd={handleOnDragEnd}
              onDeleteList={deleteList}
              key={list.stage}
            />
          </>
        );
      })}
    </div>
  );
}
