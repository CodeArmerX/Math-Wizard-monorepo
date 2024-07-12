import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledView, StyledVideo } from '../../components/StyledComponents'

export const Funcion = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center items-center mt-10 pb-32 ml-5 mr-5'>
        <StyledText className='text-2xl ml-5 mr-5 mb-5 text-center'>
          Funcion Cuadrática
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-5'
          source={{ uri: 'https://www.shutterstock.com/image-illustration/formula-bhaskara-illustration-high-school-600nw-2041002368.jpg' }}
        />
        <StyledText className='mb-5'>
          Una función cuadrática es un tipo de función matemática donde la variable principal se eleva al cuadrado, es decir, se multiplica por sí misma. En términos más simples, en esta función, la variable principal aparece con un exponente 2.
        </StyledText>
        <StyledText className='mb-5 mr-2 ml-2'>
          Este tipo de función también es conocida como función de segundo grado, debido a que el mayor exponente de la variable es dos.
        </StyledText>
        <StyledImage
          className='w-80 h-36 mt-3 mb-5'
          source={{ uri: 'https://economipedia.com/wp-content/uploads/Funcio%CC%81n-y-ecuacio%CC%81n-1.png' }}
        />

        <StyledText className=' text-xl mb-5'>
          Propiedades de la función cuadrática
        </StyledText>
        <StyledText className='mb-5'>
          Siempre estará comprendida en el primer y cuarto cuadrante de una gráfica. Esto es debido a que para cualquier valor de X introducido a la función, esta devolverá un valor positivo siempre.
        </StyledText>
        <StyledText className='mb-5 mr-2 ml-2'>
          La función cuadrática forma una parábola simétrica con el eje vertical.
        </StyledText>
        <StyledText className='mb-5 mr-2 ml-2'>
          El signo del elemento que contiene el grado indica si se trata de una función convexa o cóncava.
        </StyledText>
        <StyledText className='mb-5 mr-2 ml-2'>
          El signo del elemento que contiene el grado indica si se trata de una función convexa o cóncava.
        </StyledText>
        <StyledText className='mb-5 mr-2 ml-2'>
          El signo del elemento que contiene el grado indica si se trata de una función convexa o cóncava.
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/Cx_4GgJNCwg?si=FiNBFLdKcKHyVb_U'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/BxrJmKdPHRs?si=eKBC-BBMjbQp1P2s'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/6JQw45YO3Fs?si=gAOrq8ZBjpLgezx7'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
