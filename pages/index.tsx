import {Button, Card, Grid, Row, Text} from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { PokemonListResponse, SamllPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SamllPokemon[];
}

const Home: NextPage<Props>= ({pokemons}) => {
  
  return (
      <Layout title="Listado de Pokes">
        {/* <Button color="gradient">Hello word</Button> */}
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map(( pokemon ) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))  
          }          
        </Grid.Container>
      </Layout>   
  )
}
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151',{
    headers: {'accept-encoding': '*'}
  });
  
  //console.log(data);
  const pokemons: SamllPokemon[] = data.results.map( (poke, i) =>
    ({...poke,
      id: i + 1,
      img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i+1 }.svg`
    }) )
  
  return {
    props: {
      pokemons
    }
  }
}

