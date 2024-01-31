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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const CocktailCard = ({ selectedData }) => {
  const { drink } = selectedData || {}
  console.log(selectedData)

  const ingredientsList = (drink) => {
    let currentIngredientNum = 1
    const allIngredients = []
    let currentIngredient = `strIngredient${currentIngredientNum}`

    while (drink[currentIngredient]) {
      allIngredients.push(drink[currentIngredient])
      currentIngredientNum++
      currentIngredient = `strIngredient${currentIngredientNum}`
    }

    console.log(allIngredients)
    return allIngredients
  }

  return (
    <Flex
      color="black"
      fontSize="24px"
      margin="15px auto"
      flexDirection="column"
      backgroundColor="#FAECD0"
      width="400px"
      borderRadius="5px"
      padding="20px"
    >
      <Flex color="black" flexDirection="column">
        <Heading as="h2">{drink.strDrink}</Heading>

        <Box >
          <Image borderRadius="5px" width="200px" src={drink.strDrinkThumb}></Image>
        </Box>

        <Accordion allowMultiple >
          <AccordionItem mb="15px">
            {({ isExpanded }) => (
              <>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box fontSize="24px">Ingredient</Box>
                  <AccordionButton
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
                    {ingredientsList(drink).map((ingredient, i) => (
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
      </Flex>
    </Flex>
  )
}

export default CocktailCard
