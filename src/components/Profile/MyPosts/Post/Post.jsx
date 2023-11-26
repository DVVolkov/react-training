import React from "react";
import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://i.redd.it/wtc3gq9qhe041.jpg" alt="" />
            {props.postText}
            <div></div>
            <span>like {props.likesCount}</span>
        </div>
    )
}

export default Post;