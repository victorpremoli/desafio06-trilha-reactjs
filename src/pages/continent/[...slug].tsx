import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { Header } from '../../components/Header';
import dbFile from '../../../db.json'

export default function Continent() {
  const router = useRouter();
  const { slug } = router.query

  function getContinentBySlug(slug) {
    return dbFile.countries.filter(
      function (data) { return data.id == slug }
    );
  }

  const continent = getContinentBySlug(slug);


  return (
    <>
      <Header />
      { continent.map((data) => (
        <>
          <Flex
            marginX='auto'
            maxWidth={1440}
          >
            <Image
              objectFit='cover'
              position='relative'
              height={500}
              width='100%'
              src={data.image}
            />
            <Box position='absolute' color='#F5F8FA' fontSize={48} left={400} top={480}>{data.name}</Box>
          </Flex>

          <Grid gridTemplateColumns='1fr 1fr' maxWidth={1240} marginX='auto' marginY='80px' >
            <GridItem>
              <Text fontSize={24} textAlign='justify'>
                {data.bio}
              </Text>
            </GridItem>
            <GridItem marginY='auto' >
              <Grid gridTemplateColumns='1fr 1fr 1fr' >
                <GridItem textAlign='center' marginY='auto'>
                  <Text color='#FFBA08' fontSize={48}>{data.countrys}</Text>
                  <Text color='#47585B' fontSize={24}>paises</Text>
                </GridItem>
                <GridItem textAlign='center'>
                  <Text color='#FFBA08' fontSize={48}>{data.languages}</Text>
                  <Text color='#47585B' fontSize={24}>líguas</Text>
                </GridItem>
                <GridItem textAlign='center'>
                  <Text color='#FFBA08' fontSize={48}>{data.cityes}</Text>
                  <Text color='#47585B' fontSize={24}>cidades +100</Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>

          <Box maxWidth={1240} marginX='auto'> 
            <Text fontSize='36px' color='#47585B' >Cidades +100</Text>

          </Box>
        </>
      ))}
    </>
  );
}