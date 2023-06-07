import {useMutation, useQuery} from '@apollo/client'
import {POSTS, REMOVE_POST, UPDATE_POST} from '../../../apollo/posts'
import Item from './Item/Item'
import UpdatePost from './UpdatePost/UpdatePost'

const List = () => {
  const {loading, error, data} = useQuery(POSTS)
  const [updatePost, {error: updateError }] = useMutation(UPDATE_POST)
  const [removePost, {error: removeError }] = useMutation(REMOVE_POST, {
    update(cache, {data: {removePost}}) {
      cache.modify({
        fields: {
          allPosts(currentPosts = []) {
            return currentPosts.filter(post => post.__ref !== `Post:${removePost.id}`)
          }
        }
      })
    }
  })

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error || updateError || removeError) {
    return <h3>Error... При получении Posts</h3>
  }

  if (!data.posts.length) {
    return <h3 style={{color: 'red'}}>No new posts</h3>
  }

  return (
    <>
      <h3>Posts list:</h3>
      <ul>
        {data.posts.map((post) => (
          <div key={post.id}>
            <Item
              post={post}
              removePost={removePost}
            />
            <UpdatePost
              updatePost={updatePost}
              {...post}
            />
          </div>
        ))}
      </ul>
    </>
  )
}

export default List