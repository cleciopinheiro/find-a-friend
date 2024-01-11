import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import CreateAccount from "./pages/CreateAccount";
import CreateOrganization from './pages/CreateOrganization';
import DashBoard from './pages/DashBoard';
import CreateUser from './pages/CreateUser';
import CreatePet from './pages/CreatePet';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/create' element={<CreateAccount />}/>
      <Route path='/create/organization' element={<CreateOrganization />}/>
      <Route path='/create/user' element={<CreateUser />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/create/pet' element={<CreatePet />}/>
    </Routes>
  )
}

export default App
