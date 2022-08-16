import { Box, Heading, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { Person } from '../routes/people/index'
import { getIdFromUrl } from '../utils'

type PersonCardProps = {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <>
        <Heading as='h1' size='l' noOfLines={1} m="20px">{person.name}</Heading>
      </>
    </Box>
  );
}