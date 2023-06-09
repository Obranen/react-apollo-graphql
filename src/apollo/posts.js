import {gql} from '@apollo/client'

export const POSTS = gql `
  query Posts {
    posts: allPosts {
      id
      title
      views
      user_id
    }
  }
`

export const ADD_POST = gql `
  mutation AddPost($title: String!, $views: Int!, $user_id: ID!) {
    newPost: createPost (title: $title, views: $views, user_id: $user_id) {
      id
      title
      views
    }
  }
`

export const UPDATE_POST = gql `
  mutation UpdatePost ($id: ID!, $title: String!, $views: Int!, $user_id: ID!) {
    updatePost (id:$id, title: $title, views: $views, user_id: $user_id) {
      id
      title
      views
      user_id
    }
  }
`
export const REMOVE_POST = gql `
  mutation RemovePost ($id: ID!) {
    removePost (id:$id) {
      id
    }
  }
`