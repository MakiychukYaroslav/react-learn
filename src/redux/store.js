// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'Hi, how are you?', likeCount: 12},
//                 {id: 2, message: 'It\'s my first post', likeCount: 20},
//                 {id: 3, message: 'my first post', likeCount: 2},
//                 {id: 4, message: 'rick the best', likeCount: 7},
//             ],
//             newPostText: '',
//         },
//
//         dialogPage: {
//             messagesData: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your mind'},
//                 {id: 3, message: 'Ohhhhyyy'},
//                 {id: 4, message: 'Ohhhhyyy'},
//                 {id: 5, message: 'Ohhhhyyy'},
//             ],
//             newMessageText: '',
//
//             dialogsData: [
//                 {id: 1, name: 'Rick'},
//                 {id: 2, name: 'Tom'},
//                 {id: 3, name: 'Jerry'},
//                 {id: 4, name: 'Sophi'},
//                 {id: 5, name: 'Will'},
//                 {id: 6, name: 'Nick'},
//             ],
//         },
//         sidebar: {},
//     },
//     _callSubscriber() {
//         console.log('State was changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//
//     }
// }
//
//
// export default store;
// window.store = store;
