import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let PostElements =
        props.PostData.map((p) =>
            <Post key={p.id} post={p.title} likes={p.likes} message={p.message}/>
        )
    return (
        <div className={s.main_container__Posts_wrapper}>
            {PostElements}
        </div>
    )
}

export default MyPosts