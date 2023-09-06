import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ addNewPost }) => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const createPost = (e) => {
        e.preventDefault()
        addNewPost({ title: post.title, body: post.body, id: Date.now() })
        setPost({
            title: '',
            body: ''
        })
    }

    return (
        <form>

            <MyInput
                type="text"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                placeholder='Название поста'
            />

            <MyInput
                type="text"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                placeholder='Описание поста'
            />

            <MyButton onClick={createPost}>Создать пост</MyButton>

        </form>
    );
};

export default PostForm;