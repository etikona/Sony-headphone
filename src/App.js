
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home> </Home>}></Route>
     <Route path='/header' element={<Header/>}></Route>
     <Route path='/review' element={<Reviews/>} ></Route>
     <Route path='/blogs' element={<Blogs/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='*' element={<NotFound/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
