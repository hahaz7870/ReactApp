import s from './Dialogs.module.css'
import Contact from "./DialogContact/DialogContact";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.state

    let DialogsElements =
        state.DialogsData.map(dialog =>
            <Contact id={dialog.id} name={dialog.name} key={dialog.id}/>
        )

    let MessagesElements =
        state.MessagesData.map(message =>
            <Message id={message.id} text={message.message} username={message.username} key={message.id}/>
        )


    let onSendMessageClick = () => {
        props.SendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.UpdateNewMessageBody(body)

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
                        value={state.newMessageBody}
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