import React from 'react';
import logo from './logo.svg';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

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

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ]

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path={"/profile"} render={() => <Profile postData={postData}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
