import { Text, View } from 'react-native'
import { styled } from 'nativewind'
import { Background } from '../components/Background'
import { StyledLink } from '../components/StyledLink'

const StyledView = styled(View)
const StyledText = styled(Text)
export function Layout ({ isLoggedIn, children }) {
  isLoggedIn = true
  return (
    <StyledView className='flex-1 items-center justify-center'>
      <Background />
      {children}
      {isLoggedIn && <NavBar />}
    </StyledView>
  )
}
function NavButton ({ to, children }) {
  return (
    <StyledLink underlayColor='transparent' to={to}>
      <StyledText className='bg-red-950'>
        {children}
      </StyledText>
    </StyledLink>
  )
}

function NavBar () {
  return (
    <StyledView>
      <NavButton to='/'>Home</NavButton>
      <NavButton to='/'>Home</NavButton>
      <NavButton to='/'>Home</NavButton>
    </StyledView>
  )
}
