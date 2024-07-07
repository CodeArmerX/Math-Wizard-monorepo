import { StyledImage, StyledText, StyledView } from '../../components/StyledComponents'

export const Orden = () => {
  return (
    <StyledView className='flex-1 justify-center items-center mt-12'>
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
    </StyledView>
  )
}
