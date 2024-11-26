const AddPost = 'AddPost';
const NewPostText = 'NewPostText';

let initialState = {
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
}

const profileReducer = (state = initialState , action) => {

    switch (action.type) {
        case AddPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            }

            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: '',
            }
        }

        case NewPostText:
            return {
                ...state,
                newPostText: action.newText,
            }


        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: AddPost})
export const updateNewPostTextActionCreator = (text) =>
    ({type: NewPostText, newText: text})

export default profileReducer