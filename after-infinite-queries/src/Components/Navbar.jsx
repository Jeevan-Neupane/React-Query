import { NavLink } from "react-router-dom";

function Navbar() {
    const linkStyle=({isActive})=>{
        return {
            fontWeight:isActive?"bold":"",
        }
    }
  return (
    <nav className="flex justify-between px-10 bg-teal-700 py-2 text-white items-center">
      <h2 className="text-3xl font-bold ">React-Query</h2>
      <ul className="flex gap-4 text-xl">
        <li>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="infinite" style={linkStyle}>Infinite</NavLink>
        </li>
        <li>
          <NavLink to="mutation" style={linkStyle}>Mutation</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
