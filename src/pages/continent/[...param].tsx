import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

interface ContinentProps {
  results: Array<{
    id: string;
    name: string;
    image: string;
    bio: string;
    countrys: string;
    cityes: string;
    languages: string;
  }>
}


export default function Continent({ data }) {
  const router = useRouter();
  const { query } = router
  const param = query.param[0].toString()
  console.log(param)

  return (
    <h1>
      { data.map(continent => {
        if (continent.id === param) {
          return (
            <>
              <Header />
              <Flex
                marginX='auto'
                maxWidth={1440}
              >
                <Image
                  objectFit='cover'
                  position='relative'
                  height={500}
                  width='100%'
                src={continent.image}
                />
                <Box position='absolute' color='#ffffff' fontWeight='bold' fontSize={48} left={20} top={400}>
                  {continent.name}
                </Box>
              </Flex>

              <Grid gridTemplateColumns='1fr 1fr' maxWidth={1240} marginX='auto' marginY='80px' >
                <GridItem>
                  <Text fontSize={24} textAlign='justify'>
                    {continent.bio}
                  </Text>
                </GridItem>
                <GridItem marginY='auto' >
                  <Grid gridTemplateColumns='1fr 1fr 1fr' >
                    <GridItem textAlign='center' marginY='auto'>
                      <Text color='#FFBA08' fontSize={48}>
                        {continent.countrys}
                      </Text>
                      <Text color='#47585B' fontSize={24}>paises</Text>
                    </GridItem>
                    <GridItem textAlign='center'>
                      <Text color='#FFBA08' fontSize={48}>
                        {continent.languages}
                      </Text>
                      <Text color='#47585B' fontSize={24}>líguas</Text>
                    </GridItem>
                    <GridItem textAlign='center'>
                      <Text color='#FFBA08' fontSize={48}>
                        {continent.cityes}
                      </Text>
                      <Text color='#47585B' fontSize={24}>cidades +100</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>

              <Box maxWidth={1240} marginX='auto'>
                <Text fontSize='36px' color='#47585B' >Cidades +100</Text>
              </Box>
                );
            </>
          );
        }
      })}
    </h1>
  );


}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3333/continent`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

