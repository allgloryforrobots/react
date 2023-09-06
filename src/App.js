import React, { useState } from 'react'
import PostList from "./components/PostList"
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description 2' },
  ])

  const addNewPost = (post) => {
    setPosts(posts => [...posts, post])
  }

  const deletePost = (id) => {
    setPosts(posts => posts.filter(post => post.id !== id))
  }

  const selectOptions = [
    // { value: 'by_name', title: 'По названию' },
    { value: 'by_desc', title: 'По описанию' },
  ]

  return (
    <div className="App">

      <PostForm setPosts={setPosts} addNewPost={addNewPost}/>

      <div>
        <MySelect options={selectOptions}  defaultValue={"По названию"} />
      </div>

      <hr style={{margin: '15px 0'}}/>

      {
        posts.length !== 0
        ? <PostList deletePost={deletePost} posts={posts} title={'Список постов'} />
        : <h2>Посты не найдены</h2>
      }
      
    </div>
  )

}

export default App
