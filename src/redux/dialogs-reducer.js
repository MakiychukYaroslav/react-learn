const SEND_MESS = 'SEND-MESS';
const UPDATE_NEW_SEND_MESS = 'UPDATE-NEW-SEND-MESS';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your mind'},
        {id: 3, message: 'Ohhhhyyy'},
        {id: 4, message: 'Ohhhhyyy'},
        {id: 5, message: 'Ohhhhyyy'},
    ],
    newMessageText: '',

    dialogsData: [
        {id: 1, name: 'Rick'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'Jerry'},
        {id: 4, name: 'Sophi'},
        {id: 5, name: 'Will'},
        {id: 6, name: 'Nick'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESS:
            let newMessages = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: newMessages});
            return state;
        case UPDATE_NEW_SEND_MESS:
            state.newMessageText = action.newMess;
            return state;
        default:
            return state;
    }

    // if (action.type === SEND_MESS) {
    //     // let newMessages = {
    //     //     id: 6,
    //     //     message: this._state.dialogPage.newMessageText,
    //     // };
    //     let newMessages = state.newMessageText;
    //     state.newMessageText = '';
    //     state.messagesData.push({id: 6, message: newMessages});
    // } else if (action.type === UPDATE_NEW_SEND_MESS) {
    //     state.newMessageText = action.newMess;
    // }
}

export const sendMessActionCreator = () => ({type: SEND_MESS})
export const updateNewSendMessActionCreator = (text) => ({type: UPDATE_NEW_SEND_MESS, newMess: text})

export default dialogsReducer;