
const PostItem = ({ post, number, deletePost }) => {

    const { id, title, body } = post;

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {title}</strong>
                <div>{body}</div>
            </div>
            <div className="post__btns">
                <button onClick={() => deletePost(id)}>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem

// rsc