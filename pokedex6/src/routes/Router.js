import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <HomePage/>}/>
            <Route exact path="/details/:id" element={<DetailsPage/>}/>
            <Route exact path="/pokedex/:id" element={  <PokedexPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;

