import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(messageG => <Message message={messageG.message}/>);
    let newMessageBody = state.newMessageText;
    // let newSendElements = React.createRef();

    let sendMess = () => {
        props.onSendMess();
    }

    let sendChange = (e) => {
        let text = e.target.value;
        props.onAddSendChange(text);
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