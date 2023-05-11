import { QueryClientProvider, QueryClient } from "react-query";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import SuperHeroes from "./Components/SuperHeroes";
import SingleHero from "./Components/SingleHero";
import { superHeroData } from "./Hooks/useSingleData";



const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="super-heros" element={<SuperHeroes />} >
          <Route path=":id" element={<SingleHero/>} loader={superHeroData}/>
        </Route>
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
