import { StyledImage, StyledLink, StyledText, StyledView } from '../components/StyledComponents'

export const NotFound = ({ title }) => {
  return (
    <StyledView className='flex-1 justify-center items-center'>
      <StyledText className='text-2xl text-center mt-10 ml-5 mr-5'>The "{title}" content is coming soon...
      </StyledText>
      <StyledImage
        source={{ uri: 'https://midu.dev/images/this-is-fine-404.gif' }}
        className='w-80 h-48 mt-3 mb-3'
      />
      <StyledLink
        to='/courses'
        className='mt-5'
      >
        <StyledText className='text-xl underline'>
          Go back to another content
        </StyledText>
      </StyledLink>
    </StyledView>
  )
}
