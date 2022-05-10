import { Routes, Route } from 'react-router-dom'
import './App.css';
import Visa1 from './components/visa1'
import Visa2 from './components/visa2'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Visa1 />} />
        <Route path='/Visa2' element={<Visa2 />} />
      </Routes>
    </>
  );
}

export default App;
