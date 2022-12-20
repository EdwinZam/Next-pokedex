import { Container, Text, Image, Grid, Card } from '@nextui-org/react';

import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])
  

  return (
    <Layout title='Pokes - Favoritos'>
      {
        favoritePokemons.length === 0
        ? <NoFavorites /> 
        :( <FavoritePokemons pokemons={favoritePokemons} />)
      }
      
    </Layout>
  )
}

export default FavoritesPage