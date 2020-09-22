import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updateNewPostText(text);

    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;