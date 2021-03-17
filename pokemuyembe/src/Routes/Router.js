import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomeButton from "../Components/HomeButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Router() {
    return(
        <BrowserRouter>
            <HomeButton />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokemon-details">
                    <PokemonDetailPage/>
                </Route>
                <Route exact path="/pokedex">
                    <PokedexPage/>
                </Route>
                <Route exact path="/error-page">
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}