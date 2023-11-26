import React from "react";
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;