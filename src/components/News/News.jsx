import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";
import {addNewsPostActionCreator, updateNewsPostActionCreator} from "../../redux/news-reducer";


const News = (props) => {

    let newsElements = props.state.newsData.map(news => <NewsItem news={news.news}/>);
    let newNewsBody = props.state.newNewsText;

    let sendNews = () =>{
        props.dispatch(addNewsPostActionCreator());
    }

    let sendChange = (e) =>{
        let text = e.target.value;
        props.dispatch(updateNewsPostActionCreator(text));
    }

    return (
        <div>
            News of the World!
            <div className={s.news}>
                <div className={s.newsItem}>
                    {newsElements}
                </div>
                <div>
                    <textarea onChange={sendChange} value={newNewsBody}/>
                </div>
                <div>
                    <button onClick={sendNews}>Add News</button>
                </div>
            </div>
        </div>
    )
}

export default News;