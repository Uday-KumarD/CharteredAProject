import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs';
import DetailsPage from './pages/DetailsPage'
import Accounts from './pages/Accounts'

function App() {
 
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/account' element={<Accounts/>}/>
       <Route path='/details/:id' element={<DetailsPage/>}/>
       <Route path='/about'element={<AboutUs/>}/>
       <Route path='/contact'element={<ContactUs/>}/>
     </Routes>
    </Router>
  )
}

export default App