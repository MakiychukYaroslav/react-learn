import React from "react";
import {sendMessActionCreator, updateNewSendMessActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        onSendMess: () => {
            dispatch(sendMessActionCreator());
        },
        onAddSendChange: (text) => {
            dispatch(updateNewSendMessActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;