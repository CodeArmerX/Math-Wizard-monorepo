import { styled } from 'nativewind'
import { Image, Text, View, Linking, TouchableOpacity, TextInput } from 'react-native'
import { Link } from 'react-router-native'

const StyledLinkComponent = styled(Link)
export const StyledView = styled(View)
export const StyledText = styled(Text)
export const StyledImage = styled(Image)

export const StyledButton = styled(TouchableOpacity)
export const StyledInput = styled(TextInput)
export function StyledLink ({ to, children, ...props }) {
  return (
    <StyledLinkComponent underlayColor='transparent' to={to} {...props}>
      {children}
    </StyledLinkComponent>
  )
}
export function StyledVideo ({ source, imageSource, ...props }) {
  return (
    <>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => {
          Linking.openURL(source)
        }}
      >
        <StyledImage
          className='w-48 h-48 mt-3 mb-3 opacity-30 rounded'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2009/02/geometria-1.jpg' }}
          {...props}
        />
        <StyledView
          className='absolute rounded mt-3 left-0 w-48 h-48 bg-violet-200 opacity-70 border-[2px] border-violet-600 justify-center items-center'
          {...props}
        />
        <StyledImage
          className='w-12 h-12 absolute z-10 top-20 left-[72px]'
          source={require('../static/play.png')}
        />
      </TouchableOpacity>
    </>
  )
}
