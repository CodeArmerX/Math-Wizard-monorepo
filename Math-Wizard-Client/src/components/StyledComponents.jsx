import { styled } from 'nativewind'
import { Image, Text, View, Linking, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

const StyledLinkComponent = styled(Link)
export const StyledView = styled(View)
export const StyledText = styled(Text)
export const StyledImage = styled(Image)

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
        onPress={() => {
          Linking.openURL(source)
        }}
      >
        <StyledImage
          className='w-48 h-48 mt-3 mb-3 opacity-30 rounded'
          source={{ uri: imageSource }}
          {...props}
        />
        <StyledView
          className='absolute rounded mt-3 left-0 w-48 h-48 bg-violet-200 opacity-70 justify-center items-center'
          {...props}
        />
        <StyledImage
          className='w-12 h-12 absolute top-20 ml-16'
          source={require('../static/play.png')}
        />
      </TouchableOpacity>
    </>
  )
}
