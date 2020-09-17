import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ]

    let postsElements = postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;