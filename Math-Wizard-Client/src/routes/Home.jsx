import { Text, View, Image } from 'react-native'
import { styled } from 'nativewind'
import { StyledLink } from '../components/StyledLink'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

export function Home () {
  return (
    <StyledView
      className='flex-1 items-center justify-center'
    >
      <StyledText className='text-4xl text-purple-800'>Math Wizard</StyledText>
      <StyledImage
        source={require('../static/pinguino.png')}
        className='w-64 h-56'
      />
      <StyledLink to='signin'>
        <StyledView className='bg-purple-800 px-20 py-3 rounded mt-1 mb-3'>
          <StyledText className='text-xl text-white'>Sign In</StyledText>
        </StyledView>
      </StyledLink>
      <StyledLink to='register'>
        <StyledView className='bg-purple-800 px-20 py-3 rounded mt-3'>
          <StyledText className='text-xl text-white'>Sign Up</StyledText>
        </StyledView>
      </StyledLink>
    </StyledView>
  )
}
