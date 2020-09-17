import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Rick'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'Jerry'},
        {id: 4, name: 'Sophi'},
        {id: 5, name: 'Will'},
        {id: 6, name: 'Nick'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your mind'},
        {id: 3, message: 'Ohhhhyyy'},
        {id: 4, message: 'Ohhhhyyy'},
        {id: 5, message: 'Ohhhhyyy'},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(messageG => <Message message={messageG.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;