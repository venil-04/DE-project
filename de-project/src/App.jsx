import { useState } from 'react'
import Navbar from './components/Navbar'
// import GoogleSignIn from './components/GoogleSignin'
import surat from './assets/surat.jpg'
import { Route,Routes } from 'react-router-dom'
import RegisterUser from './pages/RegisterUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Routes>
          <Route exact path='/' element={<><Navbar/><div className="image h-screen w-screen"> <img src={surat} alt="" srcset="" className='h-screen w-screen'/></div></>} />
          <Route exact path="/register" element={<RegisterUser/>}/>
          <Route exact path="/complain" element={<RegisterUser/>}/>

        </Routes>
        
        
    </>
  )
}

export default App
