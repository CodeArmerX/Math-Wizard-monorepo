import { styled } from 'nativewind'
import { Link } from 'react-router-native'

const StyledLinkComponent = styled(Link)

export function StyledLink ({ to, children, ...props }) {
  return (
    <StyledLinkComponent underlayColor='transparent' to={to} {...props}>
      {children}
    </StyledLinkComponent>
  )
}
