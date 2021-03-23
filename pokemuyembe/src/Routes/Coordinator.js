export const goToHomePage = (history) => {
    history.push("/");
};

export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goToPokemonDetailPage = (history) => {
    history.push("/pokemon-details/id")
};

export const goToPreviousPage = (history) => {
    history.goBack();
};