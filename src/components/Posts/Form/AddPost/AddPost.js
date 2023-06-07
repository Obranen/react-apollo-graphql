import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_POST, POSTS} from '../../../../apollo/posts'

const AddPost = () => {
  const [form, setForm] = useState({title: '', views: ''})
  const [addPost, {error}] = useMutation(ADD_POST, {
    update(cache, {data: {newPost}}) {
      const {posts} = cache.readQuery({query: POSTS})

      cache.writeQuery({
        query: POSTS,
        data: {
          posts: [...posts, newPost]
        }
      })
    }
  })

  const titleChange = (e) => {
    setForm({...form, title: e.currentTarget.value})
  }

  const viewsChange = (e) => {
    setForm({...form, views: e.currentTarget.value})
  }

  const addPostClick = () => {
    if (form.title.trim().length && form.views.trim().length) {
      addPost({
        variables: {
          title: form.title,
          views: Number(form.views),
          user_id: 123
        }
      })
      setForm({title: '', views: ''})
    }
  }

  if (error) {
    return <h3>Error... Not create new post</h3>
  }

  return (
    <div>
      <h3>Add post</h3>
      <input type="text" onChange={titleChange} placeholder={'title: string'} value={form.title}/>
      <input type="text" onChange={viewsChange} placeholder={'views number'} value={form.views}/>
      <button onClick={addPostClick}>Добавить пост</button>
    </div>
  )
}

export default AddPost