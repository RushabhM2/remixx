import { Box, Heading, Button, ListItem, UnorderedList } from '@chakra-ui/react'
import { Film } from '../routes/films/index'
import { getIdFromUrl } from '../utils'

type FilmCardProps = {
  film: Film
}

export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <>
        <Heading as='h1' size='l' noOfLines={1} m="20px">{film.title}</Heading>
        <Box
          m='1'
          p='2'
          as='p'
          lineHeight='tight'
        >
          {film.opening_crawl}
        </Box>
        <Heading as='h5' noOfLines={1} m="8px">Characters</Heading>
          {film.characters.map((character: string) => (
            <Button colorScheme='teal' size='lg' m='1'>
              {getIdFromUrl(character)}
            </Button>
          ))}
      </>
    </Box>
  );
}