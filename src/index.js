import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AddPost, NewPostText} from "./Redux/State";
import {NewMessageText, SendText} from "./Redux/State";
import State, {Subscribe} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (State) =>{
    root.render(
        <React.StrictMode>
            <App State={State}
                 addPost={AddPost}
                 NewPostText={NewPostText}
                 SendText={SendText}
                 NewMessageText={NewMessageText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(State);

Subscribe(rerenderEntireTree)

reportWebVitals();