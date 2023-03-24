import React, {Component, FunctionComponent} from 'react';
import {SmallPokemon} from "@/interfaces/PokemonListResponse";
import {Card, Row, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

interface Props{
    pokemon: SmallPokemon
}

export const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
       <Card isHoverable isPressable onClick={onClick}>
           <Card.Body css={{ p: 1}}>
               <Card.Image src={pokemon.image} width="100%" height={140}/>
           </Card.Body>
           <Card.Footer>
               <Row justify="space-between">
                   <Text transform='capitalize'>{pokemon.name}</Text>
                   <Text>#{pokemon.id}</Text>
               </Row>
           </Card.Footer>
       </Card>
   )
}