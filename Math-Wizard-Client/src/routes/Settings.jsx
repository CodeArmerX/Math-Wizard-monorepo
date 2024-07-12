import { StyledView, StyledText, StyledLink } from '../components/StyledComponents'
export function Settings () {
  return (
    <StyledView className='flex-1 items-center justify-center mt-60'>
      <StyledText className='text-2xl text-violet-600'>
        This issue is in
      </StyledText>
      <StyledText className='text-4xl text-violet-600 font-bold mb-4'>
        Comming soon...
      </StyledText>
      <StyledLink to='/courses'>
        <StyledView className='bg-violet-200 border-[2px] border-violet-600 px-20 py-3 rounded mt-1'>
          <StyledText className='text-xl text-violet-600'>Go to Courses</StyledText>
        </StyledView>
      </StyledLink>
    </StyledView>
  )
}
