import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const Nav = styled.nav`
  padding: 2px 5%;
`;

function Navbar() {
  const activeLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      fontSize: "20px",
      textDecoration: isActive ? "underline" : "",
    };
  };
  return (
    <Main>
      <Nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            React Query
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" style={activeLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="traditional" style={activeLinkStyle}>
                Traditional Superheroes
              </NavLink>
            </li>
            <li>
              <NavLink to="rq-modern" style={activeLinkStyle}>
                RQ superheroes
              </NavLink>
            </li>
            <li>
              <NavLink to="self" style={activeLinkStyle}>
                Self
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </Main>
  );
}

export default Navbar;
