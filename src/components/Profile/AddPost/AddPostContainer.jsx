import AddPost from './AddPost'
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const AddPostContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }


    return (<AddPost NewPostText={onPostChange}
                     AddPost={addPost}
                     newPostText={state.profilePage.newPostText}/>);
};

export default AddPostContainer;
