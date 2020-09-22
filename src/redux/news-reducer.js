const ADD_NEWS_POST = 'ADD-NEWS-POST';
const UPDATE_NEWS_POST = 'UPDATE-NEWS-POST';

let initialState = {
    newsData: [
        {id: 1, news: ' Nigger war!!!'},
        {id: 2, news: 'Nigger war2!!!'},
    ],
    newNewsText: '',
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS_POST:
            let newNews = state.newNewsText;
            state.newNewsText = '';
            state.newsData.push({id: 3, news: newNews})
            return state;
        case UPDATE_NEWS_POST:
            state.newNewsText = action.newNews;
            return state;
        default:
            return state;

    }
}

export const addNewsPostActionCreator = () =>({type: ADD_NEWS_POST})
export const updateNewsPostActionCreator = (text) =>({type: UPDATE_NEWS_POST, newNews: text})

export default newsReducer;