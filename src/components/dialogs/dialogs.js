import React from "react";
import { NavLink } from "react-router-dom";
import "./dialogs.css";
import DialogsItem from "./dialogsItem/dialogsItem";
import Message from "./messages/Message";

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialog">
        <DialogsItem name={"Иван Иванов"} id={"1"} />
        <DialogsItem name={"Илон Маск"} id={"2"} />
        <DialogsItem name={"Билл Гейтс"} id={"3"} />
      </div>
      <div className="messages">
        <Message message={"Привет"} />
        <Message message={"Го на Марс"} />
        <Message message={"Где мой чип?"} />
        <input placeholder="Enter the message" type="text" />
        <button>Отправить</button>
      </div>
    </div>
  );
}
export default Dialogs;
