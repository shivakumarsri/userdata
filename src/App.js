
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import User from './components/Users/User';
import About from './components/Pages/About';
import Contact from './components/Pages/ContactUs';


function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} ></Route>
            <Route path="/About" element={<About />} ></Route>
            <Route path="/Contact" element={<Contact />} ></Route>
            <Route path="/users/add" element={<AddUser />} ></Route>
            <Route path="/users/edit/:id" element={<EditUser />} ></Route>
            <Route path="/users/:id" element={<User />} ></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
