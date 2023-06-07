import {gql} from '@apollo/client'

export const POSTS = gql `
  query posts {
    posts: allPosts {
      id
      title
      views
      user_id
    }
  }
`

export const ADD_POST = gql `
  mutation addPost($title: String!, $views: Int!, $user_id: ID!) {
    newPost: createPost (title: $title, views: $views, user_id: $user_id) {
      id
      title
      views
    }
  }
`

export const UPDATE_POST = gql `
  mutation updatePost ($id: ID!, $title: String!, $views: Int!, $user_id: ID!) {
    updatePost (id:$id, title: $title, views: $views, user_id: $user_id) {
      id
      title
      views
      user_id
    }
  }
`
export const REMOVE_POST = gql `
  mutation removePost ($id: ID!) {
    removePost (id:$id) {
      id
    }
  }
`