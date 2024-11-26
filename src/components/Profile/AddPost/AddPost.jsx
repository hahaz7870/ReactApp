import React from "react";
import ap from './AddPost.module.css'
import User from './../../../img/avatar3.jpg'
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const AddPost = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }


    return (
        <div className={ap.main_container__newPost_wrapper}>
            <div className={ap.container}>
                <img src={User} className={ap.img} alt="User"/>
                    <input
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                        type="text"
                        className={ap.input}
                        placeholder="Что у вас нового?"
                    />
                    <button className={ap.button} onClick={addPost}>Опубликовать</button>
            </div>
        </div>
    );
};

export default AddPost;
