import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledVideo, StyledView } from '../../components/StyledComponents'

export const Radicacion = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center ml-8 mr-8 mt-4 pb-32'>
        <StyledText className='text-3xl text-center'>Radicación en R</StyledText>
        <StyledText className='ml-5 mr-5'>
          Es un conjunto de definiciones y teoremas que tratan el estudio de los exponentes y las relaciones que se dan entre ellos.
        </StyledText>
        <StyledImage
          source={{ uri: 'https://enciclopediaiberoamericana.com/wp-content/uploads/2023/05/Screenshot-2023-05-23-at-13.35.02.png' }}
          className='w-80 h-48 mt-3 mb-3'
        />
        <StyledText className='ml-5 mr-5'>
          La radicación es la operación inversa de la potenciación, es decir, si se tiene un número elevado a una potencia, la radicación nos permite encontrar el número original.
        </StyledText>

        <StyledText className='mt-2 ml-5 mr-5 mb-2 text-xl text-center'>
          Radicación
        </StyledText>
        <StyledText className='ml-5 mr-5'>
          Es una operación matemática, dado dos elementos uno llamado Radicando o cantidad sub radical y otro llamado índice, mediante la operación se buscar un tercer elemento llamada Raíz.
        </StyledText>
        <StyledText className='mt-2 ml-5 mr-5 mb-2 text-xl text-center'>
          Propiedades de la radicación
        </StyledText>
        <StyledText className='ml-5 mr-5'>
          Si a--√n  y b√n están bien definidas en los reales, entonces se cumple los siguientes teoremas.
        </StyledText>
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/BgFWUQ33EG4?si=GfOnEZTYGeN-xmqi'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/XLkvJjeo9Gg?si=yWoi_O4SGZhRiz8q'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/kUF5hTw0Vy8?si=ihUBQLsMLoij5Nyo'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
