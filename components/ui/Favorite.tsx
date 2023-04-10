import React, {Component, FunctionComponent} from 'react';
import {Card, Grid} from "@nextui-org/react";
import {PokemonResponse} from "@/interfaces/PokemonResponse";
import {SmallPokemon} from "@/interfaces/PokemonListResponse";
import FavoritePokemonCard from "@/components/pokemon/FavoritePokemonCard";

interface FavoriteProps{
    pokemons: number[];
}

const Favorite:FunctionComponent<FavoriteProps> =({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            {
                pokemons.map(id =>(
                    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                        <FavoritePokemonCard pokemon_id={id}></FavoritePokemonCard>
                    </Grid>
                ))
            }
        </Grid.Container>
    );
}

export default Favorite;