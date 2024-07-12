import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Derivadas = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-10 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl text-center mb-2'>Derivada de una Función</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-4'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2011/03/segunda-derivada.jpg' }}
        />
        <StyledText className='mb-2'>
          La derivada de una función es un concepto local, es decir, se calcula como el límite de la rapidez de cambio media de la función en cierto intervalo, cuando el intervalo considerado para la variable independiente se torna cada vez más pequeño.  Por eso se habla del valor de la derivada de una función en un punto dado.
        </StyledText>
        <StyledText className='mb-2'>
          En términos matemáticos, la derivada de una función puede expresarse de la siguiente forma:
        </StyledText>
        <StyledImage
          className='w-72 h-20 mt-3 mb-3'
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-eu0xN1ySp-s5-TAcMtY-FGX2WuBE3NxTA&s' }}
        />
        <StyledText className='mb-2'>
          En la fórmula, x es el punto en el que la variable toma el valor de x. Asimismo, h es cualquier número. Este luego se igualará a cero pues, como vemos en la imagen superior, debemos calcular el límite de la función cuando h se acerca a cero.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/U7onW7mMzLM?si=Ansvo1TuXVXv9m-Z'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/m_5-WS9Nd68?si=AbxoCpQhkIBGSN4A'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/0dKlkb3GhuU?si=XKs5FDcM-P1LSIGC'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
