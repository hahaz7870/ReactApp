import React from "react";
import s from './Dialogs.module.css'
import Contact from "./DialogContact/DialogContact";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/State";



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let DialogsElements =
        state.DialogsData.map(dialog =>
            <Contact id={dialog.id} name={dialog.name} key={dialog.id}/>
        )

    let MessagesElements =
        state.MessagesData.map(message =>
            <Message id={message.id} text={message.message} username={message.username} key={message.id}/>
        )

    let NewMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }



    return (
        <div className={s.Messages}>
            <div className={s.Contact_Container}>
                {DialogsElements}
            </div>
            <hr/>
            <div className={s.Message_Container}>
                <div className={s.companion_name}>
                    Иван
                </div>
                <div className={s.Message_wrapper}>
                    {MessagesElements}
                </div>
                <div className={s.InputBlock}>
                    <input
                        onChange={onNewMessageChange}
                        value={NewMessageBody}
                        type="text"
                        placeholder="Напишите сообщение..."
                        className={s.MessageInput}
                    />
                    <button onClick={onSendMessageClick} className={s.SendButton}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;