
import { Routes, Route } from 'react-router-dom';
import './bootstrap.min (4).css'
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import School from './components/School';
import Addeatry from './screens/Addeatery';
import Addschool from './screens/Addschool';
import Addcommercial from './screens/Addcommercial';
import Addhospital from './screens/Addhospital';
import Addhotel from './screens/Addhotel';
import About from './screens/About';

function App() {
  return (
    <div>
    
    
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/shcool" element={<School/>}/>
       <Route path="/addeatery" element={<Addeatry/>}/>
       <Route path="/addschool" element={<Addschool/>}/>
       <Route path="/addcommercial" element={<Addcommercial/>}/>
       <Route path="/addhospital" element={<Addhospital/>}/>
       <Route path="/school" element={<School/>}/>
       <Route path="/addhotel" element={<Addhotel/>}/>
       <Route path="/addhotel" element={<Addhotel/>}/>
       <Route path="/addhotel" element={<Addhotel/>}/>

   
    </Routes>
   
      
    </div>
  );
}

export default App;
