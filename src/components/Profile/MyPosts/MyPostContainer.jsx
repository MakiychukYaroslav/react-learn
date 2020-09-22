import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPost updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostContainer;