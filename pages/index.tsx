import { GetStaticProps, NextPage } from 'next'
import {Card, Grid, Row, Text} from "@nextui-org/react";
import { Layout } from '../layouts'
import {PokemonListResponse, SmallPokemon} from "@/interfaces/PokemonListResponse";
import pokeApi from '../api/pokeApi';
import {PokemonCard} from "@/components/pokemon/PokemonCard";

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
       <Layout title='Listado de Pokémon'>
          <Grid.Container gap={2} justify='flex-start'>
              {
                  pokemons.map((pokemon) => (
                      <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
                        <PokemonCard pokemon={pokemon}/>
                      </Grid>
                  ))
              }
          </Grid.Container>
       </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150')
  const pokemons: SmallPokemon[] = data.results.map((poke: SmallPokemon): SmallPokemon => {
      const id: string = poke.url.split("/")[6];
      return {
          name: poke.name,
          url: poke.url,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
          id: id,
      }
  })
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage