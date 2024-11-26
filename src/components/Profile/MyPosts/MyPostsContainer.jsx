import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    return (<MyPosts PostData={state.profilePage.PostData}/>)

}

export default MyPostsContainer