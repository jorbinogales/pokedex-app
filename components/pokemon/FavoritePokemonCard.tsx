import React, {Component, FunctionComponent} from 'react';
import {Card} from "@nextui-org/react";
import {SmallPokemon} from "../../interfaces/PokemonListResponse";
import {useRouter} from "next/router";

interface FavoriteCardProps {
    pokemon_id: number
}

const FavoritePokemonCard: FunctionComponent<FavoriteCardProps> = ({pokemon_id}) => {

    const router = useRouter();


    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemon_id}`)
    }

    return (
        <Card isHoverable isPressable onClick={onFavoriteClicked} css={{
            padding: '10px'
        }}>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon_id}.svg`}
                width={`100%`}
                height={140}></Card.Image>
        </Card>
    );
}

export default FavoritePokemonCard;