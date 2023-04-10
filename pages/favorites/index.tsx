import {useEffect, useState} from 'react';
import {NextPage} from "next";
import {Layout} from "@/layouts";
import {Card, Container, Grid, Image, Text} from "@nextui-org/react";
import NoFavorites from "@/components/ui/NoFavorites";
import {localFavorite} from "@/utils";
import Favorite from "@/components/ui/Favorite";

const FavoritePage: NextPage = (props) => {

    const [favoritePokemonsIds, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() =>{
        setFavoritePokemon(localFavorite.pokemons())
    }, []);


        return (
            <>
            <Layout title={'pokemon'}>
                {
                    favoritePokemonsIds.length === 0 ?
                        (<NoFavorites />)
                        :
                        (<Favorite pokemons={favoritePokemonsIds}/>)
                }
            </Layout>
            </>
        );
}

export default FavoritePage;