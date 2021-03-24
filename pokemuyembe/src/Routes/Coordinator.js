export const goToHomePage = (history) => {
    history.push("/");
};

export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goToPokemonDetailPage = (history) => {
    history.push("/pokemon-details/pokeName")
};

export const goToPreviousPage = (history) => {
    history.goBack();
};