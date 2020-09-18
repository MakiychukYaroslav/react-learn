import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

    // let postData = [
    //     {id: 1, message: 'Hi, how are you?', likeCount: 12},
    //     {id: 2, message: 'It\'s my first post', likeCount: 20},
    // ]

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.postData} />
        </div>
    );
}

export default Profile;