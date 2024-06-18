import { StyledImage, StyledLink, StyledView, StyledText } from '../components/StyledComponents'
const isLoggedIn = true
export function Layout ({ isLoggedIn, children }) {
  isLoggedIn = true
  return (
    <>
      <StyledView className='flex-1 items-center justify-center w-full h-full bg-purple-50'>
        {isLoggedIn && <Header />}
        {children}
        {/* {isLoggedIn && <NavBar />} */}
      </StyledView>
    </>
  )
}
function NavButton ({ to, children }) {
  return (
    <StyledLink className='w-1/3' to={to}>
      <StyledView className='bg-purple-900 h-20 fixed'>
        <StyledText className=''>
          {children}
        </StyledText>
      </StyledView>

    </StyledLink>
  )
}

function NavBar () {
  return (
    <StyledView className='flex-row bg-purple-900 h-5 fixed'>
      <NavButton to='/'>Home</NavButton>
      <NavButton to='/courses'>Courses</NavButton>
      <NavButton to='/'>Home</NavButton>
    </StyledView>
  )
}

function Header () {
  const homeLink = isLoggedIn ? '/courses' : '/'
  return (
    <>
      <StyledView className='bg-purple-800 h-20 w-screen overflow-hidden border-purple-900 border-b-2'>
        <StyledImage
          source={require('../static/math-bg-purple-2.png')}
          className='self-center w-full h-64 -mt-24'
        />
      </StyledView>
      <StyledView className='w-20 h-20 bg-white border-purple-900 border-2 absolute rounded-full top-10 left-10 z-10'>
        <StyledLink to={homeLink}>
          <StyledImage
            source={require('../static/gunterIcon.png')}
            className='w-16 h-16 mt-2 ml-2'
          />
        </StyledLink>
      </StyledView>
    </>
  )
}
