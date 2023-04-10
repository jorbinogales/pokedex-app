import React, { useState} from 'react';
import {GetStaticPaths, GetStaticProps, NextPage, } from "next";
import {PokemonResponse} from "@/interfaces/PokemonResponse";
import pokeApi from "@/api/pokeApi";
import {Button, Card, Container, Grid, Image, Text} from "@nextui-org/react";
import {Layout} from "@/layouts";
import {getPokemonInfo, localFavorite} from "@/utils";
import confetti from "canvas-confetti";
import {PokemonListResponse} from "@/interfaces/PokemonListResponse";

interface Props {
    pokemon: PokemonResponse
}

const PokemonByPageName: NextPage<Props> = ({pokemon}) => {

    console.log(pokemon);
    const [IsInFavorite, setIsInFavorite] = useState(localFavorite.existPokemonInFavorite(pokemon.id))
    const onToggleFavorite = () => {
        localFavorite.toggleFavorite(pokemon.id)
        setIsInFavorite(!IsInFavorite)
        if (IsInFavorite) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }
    return (
        <Layout title={pokemon.name}>
            <Grid.Container gap={5} css={{marginTop: '5px'}}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                        alt={pokemon.name}
                                        width="100%"
                                        height={200}/>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Grid css={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button
                                    onPress={onToggleFavorite}
                                    color="gradient"
                                    ghost={!IsInFavorite}
                                >
                                    {IsInFavorite ? 'En Favoritos' : 'Guardar en Favoritos'}
                                </Button>
                            </Grid>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
    const pokemonsArray: string[] = data.results.map(pokemon => pokemon.name);
    return {
        paths: pokemonsArray.map(name => ({
            params: {name}
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { name } = params as { name: string }

    return ({
        props: {
            pokemon: await getPokemonInfo(name)
        }
    })

}

export default PokemonByPageName;