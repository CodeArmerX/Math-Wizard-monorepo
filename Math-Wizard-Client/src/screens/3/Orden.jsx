import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledVideo, StyledView } from '../../components/StyledComponents'

export const Orden = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center items-center mt-12 mx-2 pb-32'>
        <StyledText className='text-2xl ml-5 mr-5 text-center'>
          Orden en R. Desigualdades e inecuaciones
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://totumat.files.wordpress.com/2019/11/1-21-inecuaciones-2-de-2.png?w=810' }}
        />
        <StyledText className='ml-5 mr-5'>
          Los números reales distintos de cero se separan en forma adecuada en dos conjuntos, los números reales positivos y los números reales negativos.
        </StyledText>
        <StyledText className='ml-5 mr-5 text-xl'>
          Desigualdades
        </StyledText>

        <StyledText className='mt-2 ml-5 mr-5 mb-2'>
          Es una proposición que relaciona dos expresiones algebraicas cuyos valores son distintos. Los signos de expresión de las desigualdades matemáticas se pueden sintetizar en la siguiente tabla.
        </StyledText>
        <StyledText className='ml-5 mr-5 text-xl'>
          Propiedades de las desigualdades
        </StyledText>
        <StyledText className='mt-2 ml-5 mr-5 mb-2'>
          1. Si los miembros de la expresión son multiplicados por el mismo valor, no cambia el signo de la desigualdad.
        </StyledText>
        <StyledText className='ml-5 mr-5 text-2xl mt-4 mb-4'>
          4x - 2 {'>'} 9
          5(4x - 2) {'>'} 5(9)
        </StyledText>
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/7kpsZCX78Bs?si=uskDhHqc-6xvaWR8'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/gMDAtLLW5lM?si=cEEzw3de9qnZSupe'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/jSZWvCh2PqI?si=2VycnTih6jlaeoxg'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
