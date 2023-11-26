import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { updatePostText } from './redux/state';

export function rerenderEntireTree(state) {
  let root = null;
  root = ReactDOM.createRoot(document.getElementById('root'));
  if (root) {
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>
      </React.StrictMode>
    );
  }
}