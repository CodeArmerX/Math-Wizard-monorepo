import { StyledText, StyledView } from '../components/StyledComponents'

export function Register () {
  return (
    <StyledView className='flex-1'>
      <StyledView className='flex-1 mt-8'>
        <StyledText className='text-2xl text-center mt-10'>Welcome to
          Math Wizard!
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
