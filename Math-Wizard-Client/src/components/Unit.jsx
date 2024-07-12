import { StyledImage, StyledLink, StyledText, StyledView } from './StyledComponents'

export function Unit ({
  title,
  front,
  to
}) {
  return (
    <StyledLink
      to={to}
    >
      <StyledView
        className='p-2 pt-3 mt-3 items-center'
      >
        <StyledView className='w-20 absolute z-10 mt-5 rounded shadow bg-purple-900'>
          <StyledText className='text-center text-purple-100'>Basic</StyledText>
        </StyledView>
        <StyledView
          className='border-violet-800 border-2 rounded p-2 pt-3 mt-3 items-center'
        >
          <StyledImage source={{ uri: front }} className='w-32 h-32 rounded' />
        </StyledView>
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-xl mt-1 text-center text-violet-800'>{title}</StyledText>
        </StyledView>
      </StyledView>
    </StyledLink>
  )
}
