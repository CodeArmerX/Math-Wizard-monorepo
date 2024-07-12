import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Multivariable = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-xl mb-2 text-center'>Sistema de ecuaciones lineales con más de dos variables </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2013/05/algebra.jpg' }}
        />
        <StyledText className='mb-2'>
          Un sistema de ecuaciones lineales consiste en dos o más ecuaciones lineales formadas por dos o más variables, de manera que todas las ecuaciones del sistema se consideran simultáneamente.
        </StyledText>
        <StyledText className='mb-2'>
          Para dar con la solución única de un sistema de ecuaciones lineales, debemos hallar un valor numérico para cada variable del sistema que satisfaga todas las ecuaciones del sistema al mismo tiempo. Algunos sistemas lineales pueden no tener solución y otros pueden tener un número infinito de soluciones.
        </StyledText>
        <StyledText className='mb-4'>
          Para que un sistema lineal tenga una solución única, debe haber, al menos, tantas ecuaciones como variables. Aun así, esto no garantiza una solución única.
        </StyledText>
        <StyledImage
          className='w-80 h-60 mt-3 mb-3'
          source={{ uri: 'https://oggisioggino.wordpress.com/wp-content/uploads/2014/01/metodo-grafico-1.jpg' }}
        />
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/9VRGJUpvKaw?si=6E11WsXAKRk9_oTh'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/apPXOlZnRhg?si=-kD6goTqJBvlMTQI'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/gyIw1HKGBFM?si=OkJo7XtGTZr0CPr8'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
