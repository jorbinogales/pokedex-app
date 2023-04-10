import { Image, Spacer, Text, useTheme } from '@nextui-org/react'
import React from 'react'
import Link from "next/link"

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray50.value,
    }}>

      <Image 
      src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
      alt="Icono del pokémon" 
      width={70}
      height={80}/>
            <Link href={'/'} style={{display: 'flex'}} >
                <Text color='white' h2>P</Text>
                <Text color='white' h3 style={{
                    marginTop: '15px'
                }}>okémon</Text>
            </Link>
      <Spacer css={{
        flex: 1
      }} />
        <Link href={'/favorites'}>
            <Text color="white" style={{
                marginTop: '22px'
            }}>Favoritos</Text>
        </Link>
    </div>
  )
}
