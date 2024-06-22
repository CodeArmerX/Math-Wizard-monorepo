import { withExpoSnack } from 'nativewind'
import { StyledText, StyledView } from '../src/components/StyledComponents'

const App = () => {
  return (
    <StyledView
      className='flex-1 justify-center items-center'
    >
      <StyledText>
        Hello, world!
      </StyledText>
    </StyledView>
  )
}
export default withExpoSnack(App)
