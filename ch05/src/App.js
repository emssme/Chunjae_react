//Router > Routes > Route
import './App.css';
import React, {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
          <Route path="/articles" element={<Articles/>}>
            <Route path=":id" element={<Article/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/mypage" element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
