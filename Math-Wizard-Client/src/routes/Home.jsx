import { StyledImage, StyledLink, StyledText, StyledView } from '../components/StyledComponents'

export function Home () {
  return (
    <StyledView
      className='flex-1 items-center justify-center mt-20'
    >
      <StyledText className='text-2xl text-center text-violet-600'>
        Welcome to
      </StyledText>
      <StyledText className='text-4xl font-bold text-center text-violet-800'>
        Math Wizard!
      </StyledText>
      <StyledImage
        source={require('../static/pinguino.png')}
        className='w-64 h-56'
      />
      <StyledLink to='/signin'>
        <StyledView className='bg-violet-200 border-[2px] border-violet-600 px-20 py-3 rounded mt-3 mb-1'>
          <StyledText className='text-xl text-violet-600 '>Sign In</StyledText>
        </StyledView>
      </StyledLink>
      <StyledLink to='/register'>
        <StyledView className='bg-violet-200 border-[2px] border-violet-600 px-20 py-3 rounded mt-1'>
          <StyledText className='text-xl text-violet-600'>Sign Up</StyledText>
        </StyledView>
      </StyledLink>
    </StyledView>
  )
}
