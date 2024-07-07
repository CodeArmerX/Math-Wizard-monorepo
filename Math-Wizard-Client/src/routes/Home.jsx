import { StyledImage, StyledLink, StyledText, StyledView } from '../components/StyledComponents'

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
      <StyledLink replace href='signin'>
        <StyledView className='bg-purple-800 px-20 py-3 rounded mt-3 mb-1'>
          <StyledText className='text-xl text-white'>Sign In</StyledText>
        </StyledView>
      </StyledLink>
      <StyledLink href='register'>
        <StyledView className='bg-purple-800 px-20 py-3 rounded mt-1'>
          <StyledText className='text-xl text-white'>Sign Up</StyledText>
        </StyledView>
      </StyledLink>
    </StyledView>
  )
}
