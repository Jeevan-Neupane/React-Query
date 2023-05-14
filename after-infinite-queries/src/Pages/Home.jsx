import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>

      
    </div>
  )
}

export default Home
