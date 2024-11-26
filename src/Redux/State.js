import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    getState() {
        return this._State;
    },
    Subscribe(observer) {
        this._callSubscriber = observer // наблюдатель (observer)
    },

    dispatch(action) {
        this._State.profilePage = profileReducer(this._State.profilePage, action);
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action);
        this._State.sidebar = sidebarReducer(this._State.sidebar, action);

        this._callSubscriber(this._State);
    },
}


window.store = store;
export default store;