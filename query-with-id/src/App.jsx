import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./Components/HomePage";
import SuperHeroes from "./Components/SuperHeroes";
import SuperHero from "./Components/SuperHero";
import ParallelQuiries from "./Components/ParallelQuiries";
import DyanamicParallel from "./Components/DyanamicParallel";
import DependentQuiries from "./Components/DependentQuiries";
import Pagination from "./Components/Pagination";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route path="superheroes" element={<SuperHeroes />} />
        <Route path="superheroes/:heroId" element={<SuperHero />} />
        <Route path="parallel" element={<ParallelQuiries/>}/>
        <Route path="dynamic-parallel" element={<DyanamicParallel heroIds={[1,3]}/>}/>
        <Route path="dependent" element={<DependentQuiries email="jeevan.neupane03@gmail.com"/>}/>
        <Route path="pagination" element={<Pagination/>}/>
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
