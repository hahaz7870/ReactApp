import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.post}>
            <h3 className={s.postTitle}>{props.post}</h3>
            <p className={s.postContent}>{props.message}</p>
            <hr />
            <div className={s.likeContainer}>
                    <button className={s.likeButton}>❤️</button>
                    <span className={s.likeCount}>{props.likes}</span>
                </div>
        </div>
    )
}

export default Post