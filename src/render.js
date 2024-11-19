import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AddPost} from "./Redux/State";
import {NewPostText} from "./Redux/State";
import {MessageText} from "./Redux/State";
import {NewMessageText} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (State) =>{
    root.render(
        <React.StrictMode>
            <App State={State}
                 addPost={AddPost}
                 NewPostText={NewPostText}
                 MessageText={MessageText}
                 NewMessageText={NewMessageText}/>
        </React.StrictMode>
    );
}

reportWebVitals();