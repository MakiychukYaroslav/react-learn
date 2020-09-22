import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";


const News = (props) => {
    let state = props.newsPage;

    let newsElements = state.newsData.map(news => <NewsItem news={news.news}/>);
    let newNewsBody = state.newNewsText;

    let sendNews = () =>{
        props.onSendNews();
    }

    let sendChange = (e) =>{
        let text = e.target.value;
        props.onSendChange(text);
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