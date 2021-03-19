export const goToHomePage = (history) => {
    history.push("/");
};

export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goToPokemonDetailPage = (history,id) => {
    history.push("/pokemon-details/" + id);
};

export const goToPreviousPage = (history) => {
    history.goBack();
};