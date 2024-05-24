import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './Components/User';
import Create from './Components/Create';
import Update from './Components/Update';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<User/>} />
  <Route path='/create' element={<Create/>} />
  <Route path='/update/:id' element={<Update/>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
