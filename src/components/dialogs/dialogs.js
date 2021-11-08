import React from "react";
import { NavLink } from "react-router-dom";
import "./dialogs.css";
import DialogsItem from "./dialogsItem/dialogsItem";
import Message from "./messages/Message";

let dialogNames = [
  { name: "Иван Иванов", id: 1 },

  { name: "Илон Маск", id: 2 },

  { name: "Билл Гейтс", id: 3 },
];

let messageItems = [
  { message: "Привет", id: 1 },
  { message: "Го на Марс", id: 2 },
  { message: "Где мой чип?", id: 3 },
];

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialog">
        {dialogNames.map((e) => (
          <DialogsItem name={e.name} id={e.id} />
        ))}
      </div>
      <div className="messages">
        {messageItems.map((e) => (
          <Message message={e.message} id={e.id} />
        ))}
        <input placeholder="Enter the message" type="text" />
        <button>Отправить</button>
      </div>
      {
        //<div className="dialog">
        // <DialogsItem name={dialogNames[0].name} id={dialogNames[0].id} />
        // <DialogsItem name={dialogNames[1].name} id={dialogNames[1].id} />
        //  <DialogsItem name={dialogNames[2].name} id={dialogNames[2].id} />
        //  </div>
        //  <div className="messages">
        //   <Message message={messageItems[0].message} id={messageItems[0].id} />
        //   <Message message={messageItems[1].message} id={messageItems[1].id} />
        //   <Message message={messageItems[2].message} id={messageItems[2].id} />
        //
        //  </div>
      }
    </div>
  );
}
export default Dialogs;
