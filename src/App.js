
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import School from './components/School'


function App() {
  return (
    <div className="App">
    
    
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/shcool" element={<School/>}/>

   
    </Routes>
   
      
    </div>
  );
}

export default App;
