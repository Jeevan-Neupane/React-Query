import { Outlet } from "react-router-dom"
import Navbar from "../Self Made/Navbar"

function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="mt-16 py-6 px-6">

        <Outlet/>
        </div>
    
    </div>
  )
}

export default HomePage
