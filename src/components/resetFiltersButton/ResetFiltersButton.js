import { Button } from '@chakra-ui/react'
const ResetFiltersButton = ({ onResetFilterButtonChange }) => {
  const handleOnClick = () => {
    onResetFilterButtonChange(true)
  }

  return (
    <Button
      backgroundColor="#FAECD0"
      margin="15px"
      width="350px"
      borderRadius="5px"
      padding="20px 0"
      fontSize="26px"
      fontWeight="700"
      onClick={handleOnClick}
      _hover={{
        backgroundColor: '#FBD38D',
      }}
      _active={{
        backgroundColor: '#FAECD0',

      }}
    >
      Reset filters
    </Button>
  )
}

export default ResetFiltersButton
