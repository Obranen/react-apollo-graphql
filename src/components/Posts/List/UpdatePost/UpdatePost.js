import {useState} from 'react'

const UpdatePost = ({updatePost, id}) => {
  const [form, setForm] = useState({title: '', views: '', userId: ''})

  const titleChange = (e) => {
    setForm({...form, title: e.currentTarget.value})
  }

  const viewsChange = (e) => {
    setForm({...form, views: e.currentTarget.value})
  }

  const userIdChange = (e) => {
    setForm({...form, userId: e.currentTarget.value})
  }

  const addPostClick = () => {
    if (form.title.trim().length && form.views.trim().length) {
      updatePost({
        variables: {
          id,
          title: form.title,
          views: Number(form.views),
          user_id: form.userId
        }
      })
      setForm({title: '', views: '', userId: ''})
    }
  }

  return (
    <div>
      <h3>Edit post</h3>
      <input type="text" onChange={titleChange} placeholder={'title: string'} value={form.title}/>
      <input type="text" onChange={viewsChange} placeholder={'views number'} value={form.views}/>
      <input type="text" onChange={userIdChange} placeholder={'user_id number'} value={form.userId}/>
      <button onClick={addPostClick}>Edit post</button>
    </div>
  )
}

export default UpdatePost