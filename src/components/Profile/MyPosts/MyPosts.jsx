import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let posts = props.posts.map( (p) => {
        return (
            <Post postText={p.postText} likesCount={p.likesCount} />
        )
    })

    let newPostElement = React.createRef();
    function addPost() {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updatePostText('');
    };

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;