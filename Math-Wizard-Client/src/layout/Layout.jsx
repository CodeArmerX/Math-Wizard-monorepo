import { StyledView } from '../components/StyledComponents'
import { Navigation } from '../components/Navigation'

export function Layout ({ isLoggedIn, children }) {
  // const [isLogged, setIsLogged] = useState(true)
  return (
    <>
      <StyledView className='flex-1 items-center justify-center w-full h-full bg-violet-50'>
        <Navigation />
        <StyledView
          className='-mt-10 pb-32 pt-5'
        >
          {children}
        </StyledView>
      </StyledView>
    </>
  )
}
