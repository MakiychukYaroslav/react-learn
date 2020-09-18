import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'It\'s my first post', likeCount: 20},
            {id: 3, message: 'my first post', likeCount: 2},
            {id: 4, message: 'rick the best', likeCount: 7},
        ],
    },

    dialogPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your mind'},
            {id: 3, message: 'Ohhhhyyy'},
            {id: 4, message: 'Ohhhhyyy'},
            {id: 5, message: 'Ohhhhyyy'},
        ],
        dialogsData: [
            {id: 1, name: 'Rick'},
            {id: 2, name: 'Tom'},
            {id: 3, name: 'Jerry'},
            {id: 4, name: 'Sophi'},
            {id: 5, name: 'Will'},
            {id: 6, name: 'Nick'},
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0,
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;