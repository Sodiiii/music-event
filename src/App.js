import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { Routes, Route} from "react-router-dom";
import MainScreen from './components/MainScreen';
import Comment from './components/comment/Comment'

function App() {


  return (
      <div>
      <Header/>
      <Routes>
          <Route path="/" element={<MainScreen/>}/> 
          <Route path="/Profile/:id" element={<Profile/>}/> 
          <Route path="/Profile/comment" element={<Comment/>}/> 
      </Routes>
      </div>
  );
}

export default App;
