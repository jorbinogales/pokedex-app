export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    id: string;
    image: string;
    name: string;
    url:  string;
}
