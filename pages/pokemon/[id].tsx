import React, {Component, useEffect} from 'react';
import {Layout} from "@/layouts";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import pokeApi from "@/api/pokeApi";
import {PokemonListResponse} from "@/interfaces/PokemonListResponse";
import {PokemonResponse} from "@/interfaces/PokemonResponse";
import {Button, Card, Container, Divider, Grid, Image, Text} from "@nextui-org/react";
import Link from "next/link";
import NextLink from "next/link";
interface Props {
    pokemon: PokemonResponse
}
const  PokemonPage: NextPage<Props> = ({pokemon}) => {

    return (
        <Layout>
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
                        <Card.Header css={{display:'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Grid css={{display:'flex', justifyContent: 'space-between'}}>

                                    <Link href={'/'}>
                                        <Button
                                            css={{marginRight:'25px'}}
                                            color="gradient">
                                            Regresar
                                        </Button>
                                    </Link>
                                <Button
                                    color="gradient"
                                    ghost>
                                    Guardar en favoritos
                                </Button>
                            </Grid>

                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction='row'  display='flex' gap={0}>
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

    const pokemonsArray = [...Array(151)].map((value, index)=> `${ index + 1}`);

    return {
        paths: pokemonsArray.map(id => ({
            params: { id }
        })),
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { id } = params as { id: string}
    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`)
    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage