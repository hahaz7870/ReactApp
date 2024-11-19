import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className='App'>
                <Header/>
                <div className='container'>
                    <Sidebar state={props.State.sidebar}/>
                    <div className='main_container'>
                        <Routes>
                            <Route path='/' element={<Navigate to='/feed'/>}/>
                            <Route path='/dialog/*' element={<Dialogs state={props.State.dialogsPage}
                                                                      MessageText={props.MessageText}
                                                                      NewMessageText={props.NewMessageText}/>}
                            />
                            <Route path='/profile' element={<Profile state={props.State.profilePage}
                                                                     addPost={props.addPost}
                                                                     NewPostText={props.NewPostText}/>}//>}
                            />
                            <Route path='/feed' element={<Feed/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
