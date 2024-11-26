const UpdateNewMessageBody = 'UpdateNewMessageBody';
const SendMessage = 'SendMessage';

let initialState = {
    MessagesData: [
        {id: 1, message: "Привет", username: 'Иван'},
        {id: 2, message: 'Привет', username: 'Вы'},
        {id: 3, message: 'Как дела?', username: 'Иван'},
        {id: 4, message: 'норм', username: 'Вы'},
        {id: 5, message: 'а у тебя?', username: 'Вы'},
        {id: 6, message: 'у меня тоже нормально', username: 'Иван'},
        {id: 7, message: 'абоба', username: 'Иван'},
        {id: 8, message: 'один два три', username: 'Иван'},
    ],
    DialogsData: [
        {id: 1, name: "Артем"},
        {id: 2, name: 'Иван'},
        {id: 3, name: 'Никита'},
        {id: 4, name: 'Богдан'},
        {id: 5, name: 'Илья'},
        {id: 6, name: 'Спанч Боб'},
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UpdateNewMessageBody:
            return {
                ...state,
                newMessageBody: action.body,
            }

        case SendMessage: {
            let body = {
                id: 9,
                message: state.newMessageBody,
                username: 'Иван'
            }

            return {
                ...state,
                MessagesData: [...state.MessagesData, body],
                newMessageBody: '',
            }

        }


        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SendMessage})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UpdateNewMessageBody, body: body})

export default dialogsReducer