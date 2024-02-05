import { useState } from 'react'
import { Flex, Checkbox, Heading } from '@chakra-ui/react'

const CheckboxFilters = ({ onCheckedBox }) => {
  const [checkedValue, setCheckedValue] = useState(null)

  const handleCheckboxChange = (value) => {
    console.log(value)
    if (value === checkedValue) {
      setCheckedValue(null)
    } else {
      setCheckedValue(value)
    }
    onCheckedBox(value)
  }

  return (
    <Flex
      margin="15px"
      width="350px"
      borderRadius="5px"
      backgroundColor="#FAECD0"
      alignItems="center"
      flexDirection="column"
      gap="20px"
      padding="20px 0"
    >
      <Heading>Select a filter</Heading>
      <Checkbox
        isChecked={checkedValue === 'c'}
        onChange={() => handleCheckboxChange('c')}
        backgroundColor="#FBD38D"
        width="200px"
        spacing="15px"
        fontSize="24px"
        padding="7px"
        borderRadius="5px"
        value="c"
      >
        Categories
      </Checkbox>
      <Checkbox
        isChecked={checkedValue === 'g'}
        onChange={() => handleCheckboxChange('g')}
        backgroundColor="#FBD38D"
        spacing="15px"
        width="200px"
        fontSize="24px"
        padding="7px"
        borderRadius="5px"
        value="g"
      >
        Glasses
      </Checkbox>
      <Checkbox
        isChecked={checkedValue === 'i'}
        onChange={() => handleCheckboxChange('i')}
        spacing="15px"
        backgroundColor="#FBD38D"
        width="200px"
        fontSize="24px"
        padding="7px"
        borderRadius="5px"
        value="i"
      >
        Ingredients
      </Checkbox>
      <Checkbox
        isChecked={checkedValue === 'a'}
        onChange={() => handleCheckboxChange('a')}
        spacing="15px"
        backgroundColor="#FBD38D"
        width="200px"
        fontSize="24px"
        padding="7px"
        borderRadius="5px"
        value="a"
      >
        Alcoholic
      </Checkbox>
    </Flex>
  )
}

export default CheckboxFilters
