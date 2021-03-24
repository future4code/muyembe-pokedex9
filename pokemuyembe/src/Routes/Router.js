import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>        
                <Route exact path="/pokemon-details/:pokeName">
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