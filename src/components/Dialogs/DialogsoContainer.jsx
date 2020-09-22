import React from "react";
import {sendMessActionCreator, updateNewSendMessActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let onSendMess = () => {
        props.store.dispatch(sendMessActionCreator());
    }

    let onSendChange = (text) => {

        props.store.dispatch(updateNewSendMessActionCreator(text));
    }

    return (
        <Dialogs onSendMess={onSendMess} onSendChange={onSendChange}
         dialogPage={state}/>
    );
}

export default DialogsContainer;