import './Profile.css'
import logo from './../../img/nature.jpg'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPostContainer from "./AddPost/AddPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let City = "Новосибирск";
let WorkLocation = "Завод";
let Status = "Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит."
let Name = "Иван Иванович"

const Profile = (props) => {
    return (
        <>
            <div className='main_container__user_wrapper'>
                <div className='main_container__image_container'>
                    <img src={logo} alt='profile_img'></img>
                </div>
                    <ProfileInfo name={Name} status={Status} city={City} workLocation={WorkLocation}/>
            </div>

            <AddPostContainer store={props.store}/>
            <MyPostsContainer store={props.store}/>
        </>
    )
}

export default Profile