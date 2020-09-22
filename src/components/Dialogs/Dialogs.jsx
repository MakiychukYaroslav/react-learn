import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessActionCreator, updateNewSendMessActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(messageG => <Message message={messageG.message}/>);
    let newMessageBody = props.state.newMessageText;
    // let newSendElements = React.createRef();

    let sendMess = () => {
        props.dispatch(sendMessActionCreator());
    }

    let sendChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewSendMessActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea placeholder={'Enter your message'} onChange={sendChange}
                              value={newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={sendMess}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;