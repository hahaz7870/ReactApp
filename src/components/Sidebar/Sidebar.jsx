import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import profileLogo from './../../img/svg/profile_icon.svg'
import messageLogo from './../../img/svg/message_icon.svg'
import feedLogo from './../../img/svg/feed_icon.svg'
import musicLogo from './../../img/svg/music_icon.svg'
import settingsLogo from './../../img/svg/settings_icon.svg'
import FriendsOnline from "./FriendsOnline/FriendsOnline";

const Sidebar = (props) => {
    let Status =
        props.state.friendsOnline.map(name =>
        <FriendsOnline key={name.id} name={name.name}/>
    )

    return (
        <div className={s.sidebar_container}>
            <ul>
                <li><NavLink to='/profile' className={({isActive}) => isActive ? s.active : ''}>
                    <img src={profileLogo} alt=""/>Профиль
                </NavLink>
                </li>
                <li><NavLink to='/dialog' className={({isActive}) => isActive ? s.active : ''}>
                    <img src={messageLogo} alt=""/>Мессенджер
                </NavLink>
                </li>
                <li><NavLink to='/feed' className={({isActive}) => isActive ? s.active : ''}>
                    <img src={feedLogo} alt=""/>Лента
                </NavLink>
                </li>
                <li><NavLink to='/music' className={({isActive}) => isActive ? s.active : ''}>
                    <img src={musicLogo} alt=""/>Музыка
                </NavLink>
                </li>
                <li className={s.settings}><NavLink to='/settings' className={({isActive}) => isActive ? s.active : ''}>
                    <img src={settingsLogo} alt=""/>Настройки
                </NavLink>
                </li>
                <div className={s.online_container}>
                    <h1>Онлайн:</h1>
                    {Status}
                </div>
            </ul>
        </div>
    )
}

export default Sidebar;
