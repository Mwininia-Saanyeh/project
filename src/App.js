import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';


function App() {
  return (
    <div className="App">
    
    
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
   
    </Routes>
   
      
    </div>
  );
}

export default App;
