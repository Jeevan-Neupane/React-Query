import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import { QueryClientProvider,QueryClient } from "react-query"
import {ReactQueryDevtools} from 'react-query/devtools'

import SuperHeroPage from "./Components/SuperHeroPage"
import RQSuperHero from "./Components/RQSuperHero"
import HomePage from "./Components/HomePage"
import Home from "./Components/Home"
import ButtonClick from "./Components/ButtonClick"

const queryClient=new QueryClient();

function App() {


  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage/>}>
        <Route index element={<Home/>}/>
        <Route path="traditional" element={<SuperHeroPage/>}/>
        <Route path="rq-modern" element={<RQSuperHero/>}/>
        <Route path="self" element={<ButtonClick/>}/>
      </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} ></RouterProvider>
    <ReactQueryDevtools initialIsOpen ={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
