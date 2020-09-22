import React from "react";
import s from "./NewsItem.module.css"

const NewsItem = (props) =>{
    return(
        <div className={s.new}>{props.news}</div>
    )

}

export default NewsItem;