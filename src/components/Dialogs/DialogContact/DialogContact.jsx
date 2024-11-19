import {NavLink} from "react-router-dom";
import s from "./DialogContact.module.css";
import ContactImg from "./ContactImg/ContactImg";

const Contact = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <NavLink to={path} className={s.name}>
            <div className={s.Contact_Container__Dialogue_Block}>
                <ContactImg/>
                <p>{props.name}</p>
            </div>
        </NavLink>
    )
}

export default Contact;