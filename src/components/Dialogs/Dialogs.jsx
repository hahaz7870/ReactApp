import React from "react";
import s from './Dialogs.module.css'
import Contact from "./DialogContact/DialogContact";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let DialogsElements =
        props.state.DialogsData.map(dialog =>
            <Contact id={dialog.id} name={dialog.name} key={dialog.id}/>
        )

    let MessagesElements =
        props.state.MessagesData.map(message =>
            <Message id={message.id} text={message.message} username={message.username} key={message.id}/>
        )

    let sendMessageElement = React.createRef()

    let sendMessage = () => {
        props.MessageText();
    }

    let NewMessageText = () => {
        let text = sendMessageElement.current.value;
        props.NewMessageText(text);
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
                        onChange={NewMessageText}
                        value={props.state.newMessageText}
                        ref={sendMessageElement}
                        type="text"
                        placeholder="Напишите сообщение..."
                        className={s.MessageInput}
                    />
                    <button onClick={sendMessage} className={s.SendButton}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;