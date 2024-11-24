import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (State) =>{
    root.render(
        <React.StrictMode>
            <App State={State} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.Subscribe(rerenderEntireTree)

reportWebVitals();