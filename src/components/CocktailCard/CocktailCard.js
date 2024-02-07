import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { CocktailContext } from '../../App'
import CocktailLink from './CocktailLink'
import getItemList from '../../utils/getAllItems'

const CocktailCard = ({ selectedData }) => {
  const { drink } = selectedData || {}

  const { setCocktailID, setCocktailInfo } = useContext(CocktailContext)
  const idDrink = drink.idDrink
  useEffect(() => {
    setCocktailID(idDrink)
    setCocktailInfo(drink)
  }, [idDrink])

  const allIngredients = getItemList(drink, 'strIngredient')

  return (
    <Flex
      fontSize="24px"
      margin="15px auto"
      flexDirection="column"
      backgroundColor="#FAECD0"
      width="400px"
      borderRadius="5px"
      padding="20px"
      color="black"
      gap='15px'
    >
      <Heading as="h2">{drink.strDrink}</Heading>

      <Box>
        <Image
          borderRadius="5px"
          width="200px"
          src={drink.strDrinkThumb}
        ></Image>
      </Box>

      <Accordion allowMultiple>
        <AccordionItem mb="15px">
          {({ isExpanded }) => (
            <>
              <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="24px">Ingredient</Box>
                <AccordionButton
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                  width="50px"
                  margin="10px"
                  backgroundColor="#FBD38D"
                >
                  {isExpanded ? (
                    <Icon fontSize="30px" as={ChevronUpIcon} />
                  ) : (
                    <Icon fontSize="30px" as={ChevronDownIcon} />
                  )}
                </AccordionButton>
              </Flex>

              <AccordionPanel p="15px" border="2px solid #FBD38D">
                <UnorderedList textAlign="left">
                  {allIngredients.map((ingredient, i) => (
                    <ListItem key={i}>{ingredient}</ListItem>
                  ))}
                </UnorderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="24px">Instructions</Box>
                <AccordionButton
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                  width="50px"
                  margin="10px"
                  backgroundColor="#FBD38D"
                >
                  {isExpanded ? (
                    <Icon fontSize="30px" as={ChevronUpIcon} />
                  ) : (
                    <Icon fontSize="30px" as={ChevronDownIcon} />
                  )}
                </AccordionButton>
              </Flex>

              <AccordionPanel
                textAlign="left"
                p="15px"
                border="2px solid #FBD38D"
              >
                <Text>{drink.strInstructions}</Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Box>
        <CocktailLink idDrink={idDrink} />
      </Box>
    </Flex>
  )
}

export default CocktailCard
