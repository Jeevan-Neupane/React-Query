import { Outlet } from "react-router-dom"
import Navbar from "../Self Made/Navbar"
import styled from "styled-components"

const OutletDiv=styled.div`
background-color:#B04759;
padding: 80px 5% 0px;
height:100vh;
color:white;
font-size:30px;
    
`



function HomePage() {
  return (
    <div>
        <Navbar/>
        <OutletDiv>
            <Outlet/>
        </OutletDiv>
        
      
    </div>
  )
}

export default HomePage
