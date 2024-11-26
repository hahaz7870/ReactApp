import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (<Dialogs UpdateNewMessageBody={onNewMessageChange}
                     SendMessage={onSendMessageClick}
                     state={state}/>
    )
}

export default DialogsContainer;