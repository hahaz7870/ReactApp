import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import State from "./Redux/State";

rerenderEntireTree(State);

reportWebVitals();
