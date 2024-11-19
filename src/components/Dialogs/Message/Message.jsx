import s from "./Message.module.css";
import messageImg from "../../../img/messageImg.jpg";

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={messageImg} alt="Avatar"/>
            <div className={s.messageContent}>
                <span className={s.username}>{props.username}</span>
                <span className={s.text}>{props.text}</span>
            </div>
        </div>
    )
}

export default Message;