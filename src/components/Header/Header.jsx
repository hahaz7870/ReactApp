import style from './Header.module.css';
import SocialLogo from './../../img/svg/vk_svg.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className={style.wrapper}>
                <NavLink to='/feed' className={style.LogoContainer}>
                    <img src={SocialLogo} alt="Social Logo" />
                    {/* Запись по типу <span class="LogoContainer__headerText fff">Вкантакли</span> */}
                    <span className={`${style.LogoContainer_headerText} ${style.fff}`}>Вкантакли</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Header