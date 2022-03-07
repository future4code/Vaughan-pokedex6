import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/details/Details";
import HomePage from "../pages/home/Home";
import PokedexPage from "../pages/pokedex/Pokedex";

const Router = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route exact path="/" element={ <HomePage/>}/>
            <Route exact path="/details/:id" element={<DetailsPage/>}/>
            <Route exact path="/pokedex" element={  <PokedexPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router; 