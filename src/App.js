import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
