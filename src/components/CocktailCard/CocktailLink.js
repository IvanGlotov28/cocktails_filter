import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const CocktailLink = ({ idDrink }) => {
  return (
    <Box
      textDecoration="none"
      width="200px"
      borderRadius="5px"
      margin="15px auto"
      fontSize="24px"
      padding="10px"
      backgroundColor="#FBD38D"
      cursor="pointer"
      _hover={{
        textDecoration: 'underline',
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: '#000000',
        }}
        to={idDrink}
      >
        See more info
      </Link>
    </Box>
  ) 
}

export default CocktailLink
