const AddPost = 'AddPost';
const NewPostText = 'NewPostText';
const UpdateNewMessageBody = 'UpdateNewMessageBody';
const SendMessage = 'SendMessage';

let store = {
    _State: {
        profilePage: {
            PostData: [
                {
                    id: 1,
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue nisl eros. Mauris ultrices, massa.",
                    likes: 10
                },
                {
                    id: 2,
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend nisl ac sollicitudin gravida. Duis aliquet faucibus nisi, commodo posuere est porta sed. Aenean a viverra nulla. Integer dignissim rhoncus.",
                    likes: 30
                },
                {
                    id: 3,
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa eu lorem condimentum congue. Ut tortor turpis, ultrices vel.",
                    likes: 5
                },
                {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", likes: 100},
            ],
            newPostText: '',
        },
        dialogsPage: {
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

        },
        sidebar: {
            friendsOnline: [
                {id: 1, name: 'Богдан'},
                {id: 2, name: 'Артем'},
                {id: 3, name: 'Спанч Боб'},
            ]
        },
    },
    _callSubscriber() {
        console.log('Rerender Entire');
    },

    getState(){
      return this._State;
    },
    Subscribe(observer) {
        this._callSubscriber = observer // наблюдатель (observer)
    },

    dispatch(action) {
        if (action.type === AddPost) {
            let newPost = {
                id: 5,
                message: this._State.profilePage.newPostText,
                likes: 0,
            }

            this._State.profilePage.PostData.push(newPost);
            this._State.profilePage.newPostText = "";
            this._callSubscriber(this._State);
        }
        else if (action.type === NewPostText) {
            this._State.profilePage.newPostText = action.newText;
            this._callSubscriber(this._State);
        }
        else if (action.type === UpdateNewMessageBody) {
            this._State.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._State);
        }
        else if (action.type === SendMessage) {
            let body = this._State.dialogsPage.newMessageBody;
            this._State.dialogsPage.newMessageBody = ''
            this._State.dialogsPage.MessagesData.push({id: 9, message: body, username: 'Вы'});
            this._callSubscriber(this._State);
        }
    },
}



export const addPostActionCreator = () => ({type: AddPost})
export const updateNewPostTextActionCreator = (text) =>
    ({type: NewPostText, newText: text})

export const sendMessageCreator = () => ({type: SendMessage})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UpdateNewMessageBody, body: body})




window.store = store;
export default store;