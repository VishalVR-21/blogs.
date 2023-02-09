
import './App.css';
import Posts from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Registration from './pages/Login'
import Main from './pages/Main';
import Mainframe from './Mainframe';
import Form from './pages/Registration';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainframe/>}>
      <Route index element={<Main />
      }/>
      <Route path='/register' element={<Registration />}/>
      <Route path='/login' element={<Form />}/>

      </Route>
    </Routes>
  );
}

export default App;
