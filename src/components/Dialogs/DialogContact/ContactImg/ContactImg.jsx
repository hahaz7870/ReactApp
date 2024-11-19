import s from "./ContactImg.module.css";
import messageImg from "../../../../img/messageImg.jpg";

const ContactImg = () => {
    return (
        <div className={s.Contact_imgContainer}>
            <img src={messageImg} alt=""/>
        </div>
    )
}

export default ContactImg;