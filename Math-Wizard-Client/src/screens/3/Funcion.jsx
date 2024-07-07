import { ScrollView } from 'react-native'
import { StyledText, StyledView } from '../../components/StyledComponents'

export const Funcion = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center items-center mt-16'>
        <StyledText className='text-2xl ml-5 mr-5 text-center'>
          Orden en R. Desigualdades e inecuaciones
        </StyledText>
        <StyledText className='ml-5 mr-5'>
          Los números reales distintos de cero se separan en forma adecuada en dos conjuntos, los números reales positivos y los números reales negativos.
        </StyledText>
        {/* <StyledImage
        source={{ uri: 'https://enciclopediaiberoamericana.com/wp-content/uploads/2023/05/Screenshot-2023-05-23-at-13.35.02.png' }}
        className='w-80 h-48 mt-3 mb-3'
      /> */}
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
      </StyledView>
    </ScrollView>
  )
}
