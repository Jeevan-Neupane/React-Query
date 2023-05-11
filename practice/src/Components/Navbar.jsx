import { NavLink, Outlet } from "react-router-dom"

function Navbar() {
    const activeStyle=({isActive})=>{

        return {
            textDecoration:isActive?"underline":"",
            fontWeight:isActive?"800":"",
        }

    }
  return (
    <main className="bg-slate-400 font-semibold text-lg">
    <nav className="flex px-10 py-1 justify-between items-center bg-slate-700 text-white">
        <div className="text-3xl font-bold ">
            React Router

        </div>
        <ul className="flex gap-5 text-xl font-semibold">
            <li>
                <NavLink to='/'  style={activeStyle}>Home</NavLink>
            </li>
            <li>
                <NavLink to='super-heros' style={activeStyle}>React Query</NavLink>
            </li>
            <li>
                <NavLink></NavLink>
            </li>
            <li>
                <NavLink></NavLink>
            </li>
        </ul>
    </nav>
    <div className="px-10 py-4">
        <Outlet/>

    </div>
    </main>
  )
}

export default Navbar
