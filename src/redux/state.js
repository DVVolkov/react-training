import {rerenderEntireTree} from '../render'

let state = {
  profilePage: {
    posts: [
      {id: 1, postText: 'Post 1', likesCount: '30'},
      {id: 2, postText: 'Post 2', likesCount: '35'},
      {id: 3, postText: 'Post 3', likesCount: '40'},
      {id: 4, postText: 'Post 4', likesCount: '45'},
      {id: 5, postText: 'Post 5', likesCount: '50'},
      {id: 6, postText: 'Post 6', likesCount: '55'},
      {id: 7, postText: 'Post 7', likesCount: '60'},
      {id: 8, postText: 'Post 8', likesCount: '65'},
      {id: 9, postText: 'Post 9', likesCount: '80'},
      {id: 10, postText: 'Post 10', likesCount: '75'},
      {id: 11, postText: 'Post 11', likesCount: '80'},
    ],
    newPostText: ''
  },
  dialogsPage: {
    messages: [
      {id: 1, message: 'Message 1'},
      {id: 2, message: 'Message 2'},
      {id: 3, message: 'Message 3'},
      {id: 4, message: 'Message 4'},
      {id: 5, message: 'Message 5'},
      {id: 6, message: 'Message 6'},
    ],
    dialogs: [
      {id: 1, name: 'Name 1'},
      {id: 2, name: 'Name 2'},
      {id: 3, name: 'Name 3'},
      {id: 4, name: 'Name 4'},
      {id: 5, name: 'Name 5'},
      {id: 6, name: 'Name 6'},
    ]
  }
}

window.state = state;

export function addPost(postMessage){
  let newPost = {
    id: 5,
    postText: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export function updatePostText(newText) {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;