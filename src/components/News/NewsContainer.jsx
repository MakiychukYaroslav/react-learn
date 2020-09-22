import React from "react";
import {addNewsPostActionCreator, updateNewsPostActionCreator} from "../../redux/news-reducer";
import News from "./News";


const NewsContainer = (props) => {
    let state = props.store.getState().newsPage;

    let onSendNews = () =>{
        props.store.dispatch(addNewsPostActionCreator());
    }

    let onSendChange = (text) =>{
        props.store.dispatch(updateNewsPostActionCreator(text));
    }

    return (
        <News onSendNews={onSendNews} onSendChange={onSendChange}
        newsPage={state} />
    )
}

export default NewsContainer;