import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Polinomios = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl mb-2 text-center'>Polinomios</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2013/05/polinomio-1.jpg' }}
        />
        <StyledText className='mb-2'>
          Un polinomio es una expresión algebraica construida a partir de sumas y productos de términos conocidos como monomios. Cada monomio está compuesto por un coeficiente numérico multiplicado por una variable elevada a una potencia no negativa.
        </StyledText>
        <StyledText className='mb-2'>
          El termino de un polinomio es una expresión algebraica conformada por una variable, un exponente y un coeficiente.
        </StyledText>
        <StyledImage
          className='w-80 h-28 mt-3 mb-3'
          source={{ uri: 'https://polinomiosweb.com/wp-content/uploads/2021/08/TERMINO-POLINOMIO.jpg' }}
        />
        <StyledText className='mb-4'>
          Los términos pueden ser semejantes en dos o mas polinomios cuando coinciden en la variable y el exponente independientemente que los coeficientes sean diferentes.
        </StyledText>
        <StyledText className='mb-2 text-center text-lg'>
          Elementos de un polinomio
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://www.edu.xunta.gal/centros/cafi/aulavirtual/pluginfile.php/31862/mod_imscp/content/1/dibujo_polinomio.gif' }}
        />
        <StyledText className='mb-2 mt-2'>
          Polinomio nulo: Se caracteriza por tener todos los coeficientes de sus términos iguales a cero.
        </StyledText>
        <StyledText className='mb-2 mt-2'>
          Polinomio multivariable: En sus términos se identifican dos o mas variables diferentes
        </StyledText>
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/Yng9FbUK2MY?si=yicpUgmJiY-OIqzK'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/Y7rvipk5NO4?si=0VGek-WSNhGIaYKD'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/f2Gzfua7z9s?si=ybo09xVdZdd99tmX'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
