import React from "react";
import s from './News.module.css'

const News = (props) => {

    let newsElements = props.state.newsData.map(news => )

    return (
        <div>
            News of the World!
            <div className={s.news}>
                <div className={s.newsItem}>
                    sfdfdfdf
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add News</button>
                </div>
            </div>
        </div>
    )
}

export default News;