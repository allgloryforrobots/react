import React, { useState, useMemo } from 'react'
import PostList from "./components/PostList"
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'


function App() {

  const initPosts = [
    { id: 1, title: 'Javascript', body: 'яяя 3' },
    { id: 2, title: 'Typescript', body: 'ввв 2' },
    { id: 3, title: 'Webpack', body: 'ааа 1' },
  ]

  const [posts, setPosts] = useState(initPosts)

  const addNewPost = (post) => {
    setPosts(posts => [...posts, post])
  }

  const deletePost = (id) => {
    setPosts(posts => posts.filter(post => post.id !== id))
  }

  const [ filter, setFilter ] = useState({
    sort: '',
    query: ''
  })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

 
  return (
    <div className="App">

      <PostForm setPosts={setPosts} addNewPost={addNewPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: '15px 0' }} />

      {
        sortedAndSearchedPosts.length !== 0
          ? <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
          : <h2>Посты не найдены</h2>
      }

    </div>
  )

}

export default App
