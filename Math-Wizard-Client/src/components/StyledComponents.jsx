import { styled } from 'nativewind'
import { Image, Text, View } from 'react-native'
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
