import { Image } from 'react-native'
import { styled } from 'nativewind'

const StyledImage = styled(Image)

export function Background () {
  return (
    <StyledImage
      source={require('../static/cuadritos-4.png')}
      className='w-full h-full absolute'
    />
  )
}
