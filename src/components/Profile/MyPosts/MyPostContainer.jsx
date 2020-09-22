import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


// const MyPostContainer = (props) => {
//     let state = props.store.getState().profilePage;
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextCreator(text);
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPost updateNewPostText={onPostChange} addPost={addPost} postData={state.postData}
//         newPostText={state.newPostText}/>
//     );
// }

const mapStateToProps = (state) =>{
    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;