import { useState } from 'react'
import { Flex, Checkbox, Heading } from '@chakra-ui/react'

const CheckboxFilters = ({ onCheckedBox }) => {
  const [checkedValue, setCheckedValue] = useState(null)
  const [hiddenCheckboxes, setHiddenCheckboxes] = useState([])

  const filterСriteria = ['c', 'g', 'i', 'a']

  const handleCheckboxChange = (value) => {
    if (value === checkedValue) {
      setCheckedValue(null)
      setHiddenCheckboxes([])
      onCheckedBox(null)
    } else {
      setCheckedValue(value)
      setHiddenCheckboxes(filterСriteria.filter((item) => item !== value))
      onCheckedBox(value)
    }
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
      {filterСriteria.map((value) => (
        <Checkbox
          key={value}
          isChecked={checkedValue === value}
          onChange={() => handleCheckboxChange(value)}
          backgroundColor="#FBD38D"
          width="200px"
          spacing="15px"
          fontSize="24px"
          padding="7px"
          borderRadius="5px"
          value={value}
          display={hiddenCheckboxes.includes(value) ? 'none' : 'block'}
        >
          {value === 'c'
            ? 'Categories'
            : value === 'g'
            ? 'Glasses'
            : value === 'i'
            ? 'Ingredients'
            : 'Alcoholic'}
        </Checkbox>
      ))}
    </Flex>
  )
}

export default CheckboxFilters
