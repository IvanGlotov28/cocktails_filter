import { Flex, Heading } from '@chakra-ui/react'

const TextBlock = ({ title, children }) => {
  return (
    <Flex
      p="15px"
      border="4px solid #FBD38D"
      flexDirection="column"
      alignItems="start"
      gap="15px"
    >
      <Heading as="h3">{title}</Heading>
      {children}
    </Flex>
  )
}

export default TextBlock
