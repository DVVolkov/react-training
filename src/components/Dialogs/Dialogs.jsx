import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map( (d) => {
        return (
            <Dialog name={d.name} id={d.id} />
        )
    });

    let messagesElements = props.state.messages.map( (m) => {
        return (
            <Message message={m.message} id={m.id} />
        )
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;