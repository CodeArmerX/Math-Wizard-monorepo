import { styled } from 'nativewind'
import { Text, View, Image } from 'react-native'
import { Link } from 'react-router-native'
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

export function Landing () {
  return (
    <StyledView className='bg-orange-100 flex-1 items-center justify-center -mt-30'>
      <StyledText className='text-4xl text-purple-800'>Math Wizard</StyledText>
      <StyledImage
        source={require('../static/wizard.jpg')}
        className='w-64 h-64'
      />
      <Link to='signin'>
        <StyledView className='bg-purple-800 px-12 py-3 rounded mt-1 mb-3'>
          <StyledText className='text-xl text-orange-100'>Iniciar sesión</StyledText>
        </StyledView>
      </Link>
      <Link to='register'>
        <StyledView className='bg-purple-800 px-16 py-3 rounded mt-3'>
          <StyledText className='text-xl text-orange-100'>Inscribirse</StyledText>
        </StyledView>
      </Link>
      <StyledImage
        source={require('../static/pi-2.png')}
        className='w-12 h-12 rotate-45 absolute top-1 translate-x-12 right-1/4'
      />
      <StyledImage
        source={require('../static/pi-2.png')}
        className='w-12 h-12 rotate-45 absolute right-0'
      />
      <StyledImage
        source={require('../static/pi-2.png')}
        className='w-12 h-12 rotate-45 absolute bottom-4 -translate-x-12 left-24'
      />
      <StyledImage
        source={require('../static/pi.png')}
        className='w-10 h-10 rotate-45 absolute top-32 left-3'
      />
      <StyledImage
        source={require('../static/astronomo.png')}
        className='w-12 h-12 rotate-45 absolute bottom-4 -translate-x-12 right-7'
      />
    </StyledView>
  )
}
