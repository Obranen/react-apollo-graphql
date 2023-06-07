const Item = ({post, removePost}) => {
  const removePostClick = () => {
    removePost({
      variables: {
        id: post.id
      }
    })
  }

  return (
    <>
      <li key={post.id} style={{border: '1px solid #000'}}>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Views: {post.views}</p>
        <p>UserId: {post.user_id}</p>
        <button onClick={removePostClick}>Remove</button>
      </li>
    </>
  )
}

export default Item