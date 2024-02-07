import { Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import './ComeBackButton'

const ComeBackButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <Link
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      to="/"
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        position: 'absolute',
        left: '50px',
        top: '20px',
        display: 'inline-flex',
        justifyContent: 'center',
        backgroundColor: '#FBD38D',
        width: '90px',
        borderRadius: '5px',
        padding: '10px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Icon color="#000000" fontSize="24px" as={ArrowLeftIcon} />
    </Link>
  )
}

export default ComeBackButton
