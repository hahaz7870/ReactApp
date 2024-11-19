import messageImg from "../../../img/zImg.jpg";
import s from './FriendsOnline.module.css'

const FriendsOnline = (props) => {
    return (
        <div className={s.friendsOnline_Container}>
            <img src={messageImg} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

export default FriendsOnline;