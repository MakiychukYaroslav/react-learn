import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.state.postData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;