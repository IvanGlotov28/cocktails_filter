import { useContext } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { CocktailContext } from '../../App'
import TextBlock from './TextBlock'
import ComeBackButton from './ComeBackButton/ComeBackButton'
import getItemList from '../../utils/getAllItems'

const CocktailPage = () => {
  const { cocktailInfo } = useContext(CocktailContext)
  const allIngredients = getItemList(cocktailInfo, 'strIngredient')
  const allMeasures = getItemList(cocktailInfo, 'strMeasure')
  return (
    <Flex
      color="black"
      fontSize="24px"
      margin="15px auto"
      flexDirection="column"
      backgroundColor="#FAECD0"
      width="900px"
      borderRadius="5px"
      padding="50px"
      gap="40px"
      position='relative'
    >
        <ComeBackButton />
        <Heading >{cocktailInfo.strDrink}</Heading>

      <Flex gap="40px">
        <Box>
          <Image
            borderRadius="5px"
            width="250px"
            src={cocktailInfo.strDrinkThumb}
          ></Image>
        </Box>
        <UnorderedList textAlign="left">
          <ListItem marginBottom="15px">
            Beverage category: {cocktailInfo.strCategory}
          </ListItem>
          <ListItem marginBottom="15px">
            Presence of alcohol: {cocktailInfo.strAlcoholic}
          </ListItem>
          <ListItem marginBottom="10px">
            Glass: {cocktailInfo.strGlass}
          </ListItem>
        </UnorderedList>
      </Flex>

      <TextBlock
        title={'Ingredients:'}
        children={
          <UnorderedList textAlign="left">
            {allIngredients.map((ingr, id) => (
              <ListItem key={id}>
                {ingr} — {allMeasures[id] || 'to taste'}
              </ListItem>
            ))}
          </UnorderedList>
        }
      />

      <TextBlock
        title={'Instructions:'}
        children={<Text textAlign="left">{cocktailInfo.strInstructions}</Text>}
      />
    </Flex>
  )
}

export default CocktailPage
