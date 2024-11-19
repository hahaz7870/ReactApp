let rerenderEntireTree = () =>{

};

let State = {
    profilePage: {
        PostData: [
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue nisl eros. Mauris ultrices, massa.", likes: 10},
            {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend nisl ac sollicitudin gravida. Duis aliquet faucibus nisi, commodo posuere est porta sed. Aenean a viverra nulla. Integer dignissim rhoncus.", likes: 30},
            {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa eu lorem condimentum congue. Ut tortor turpis, ultrices vel.", likes: 5},
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
        messageText: '',
    },
    sidebar: {
        friendsOnline: [
            {id: 1, name: 'Богдан'},
            {id: 2, name: 'Артем'},
            {id: 3, name: 'Спанч Боб'},
        ]
    },
}

window.State = State;

export const AddPost = () => {

    let newPost = {
        id: 5,
        message: State.profilePage.newPostText,
        likes: 0,
    }

    State.profilePage.PostData.push(newPost);
    State.profilePage.newPostText = "";
    rerenderEntireTree(State);
}

export const NewPostText = (newText) => {
    State.profilePage.newPostText = newText;
    rerenderEntireTree(State);
}

export const SendText = () =>{

    let newMessage = {
        id: 9,
        message: State.dialogsPage.messageText,
        username: 'Вы',
    }

    State.dialogsPage.MessagesData.push(newMessage);
    State.dialogsPage.messageText = '';
    rerenderEntireTree(State);
}

export const NewMessageText = (MessageText) =>{
    State.dialogsPage.messageText = MessageText;
    rerenderEntireTree(State);
}



export const Subscribe = (observer) => {
    rerenderEntireTree = observer // наблюдатель (observer)
}


export default State;