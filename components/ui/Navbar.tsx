import { Navbar as Nav, Text, useTheme, Link, Button } from '@nextui-org/react'
import NextLink from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {

    const {theme} = useTheme()

  return (

    <Nav isBordered variant="sticky" css={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        //justifyContent:'start',
        //padding: '0px 20px',
    }}>
      
      <Nav.Content variant="underline" gap={0} >      
        <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${200}.png`}
              alt="icono de la app"
              width={90}
              height={90}
        />
        <Nav.Link href="/">Pokedex de Maria Victoria </Nav.Link>
        </Nav.Content>
        <Nav.Content>
          <Nav.Item>
            <Button color="gradient" auto ghost as={Link} href="/favorites">
              Favoritos
            </Button>
          </Nav.Item>
        </Nav.Content>


    
    {/* <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray600.value
        }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="icono de la app"
            width={70}
            height={70}
        />
        <NextLink legacyBehavior href="/" passHref>
          <Link>    
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>

        </NextLink>

        <Spacer css={{flex:1}}/>

        <NextLink legacyBehavior href="/favorites" passHref>
          <Link>
            <Text color="white" h3>Favoritos</Text>
          </Link>
        </NextLink>
        

    </div> */}
    </Nav>


  )
}
