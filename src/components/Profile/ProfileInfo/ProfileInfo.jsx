import s from './ProfileInfo.module.css'
import User from "../../../img/avatar3.jpg";

const ProfileInfo = (props) => {
    return (
        <div className={s.main_container__user_container}>
            <img src={User} alt='user_img' width="190px" height="190px"></img>
            <div className={s.profile_info}>
                <p className={s.Bold_Text}>{props.name}</p>
                <p className={`${s.Small_Text} ${s.fff}`}>{props.status}</p>
                <div className={s.info_profile}>
                    <p className={s.Small_Text}>Город: {props.city}</p>
                    <p className={s.Small_Text}>Место работы: {props.workLocation}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;