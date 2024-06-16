import { Text, View } from 'react-native'
import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)

export function Register () {
  return (
    <StyledView className='flex-1 items-center justify-center'>
      <StyledText className='text-3xl'>
        Register
      </StyledText>
    </StyledView>
  )
}
