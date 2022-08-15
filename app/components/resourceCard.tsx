import { Box, Image } from '@chakra-ui/react'

type ResourceProps = {
  name: string
  image: string
}

export const ResourceCard = ({ name, image }: ResourceProps) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} alt={name} />
      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {name}
        </Box>
      </Box>
    </Box>
  );
}