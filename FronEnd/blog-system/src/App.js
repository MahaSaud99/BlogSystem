import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddBlog from './pages/AddBlog';
import BlogDetails from './pages/BlogDetails';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/addBlog' element={<AddBlog/>}/>
       <Route path='/blogDetails/:id' element={<BlogDetails/>}/>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
