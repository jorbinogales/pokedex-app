import pokeApi from "@/api/pokeApi";
import {PokemonResponse} from "@/interfaces/PokemonResponse";

export const getPokemonInfo = async (nameOrId: string) => {
    const {data} = await pokeApi.get<PokemonResponse>(`/pokemon/${nameOrId}`);
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}