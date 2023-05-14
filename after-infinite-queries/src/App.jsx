import { QueryClientProvider, QueryClient } from "react-query";
import InfiniteQueries from "./Components/infiniteQueries";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Mutation from "./Components/Mutation";


const queryClient = new QueryClient();

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        <Route path="infinite" element={<InfiniteQueries/>}/>
        <Route path="mutation" element={<Mutation/>}/>
        
      </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>

      </RouterProvider>
     
    </QueryClientProvider>
  );
}

export default App;
