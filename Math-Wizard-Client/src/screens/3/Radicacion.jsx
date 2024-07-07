import { StyledImage, StyledText, StyledView } from '../../components/StyledComponents'

export const Radicacion = () => {
  return (
    <StyledView className='flex-1 justify-center items-center mt-16'>
      <StyledText className='text-3xl'>Radicación en R</StyledText>
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

      <StyledText className='mt-2 ml-5 mr-5 mb-2 text-xl'>
        Radicación
      </StyledText>
      <StyledText className='ml-5 mr-5'>
        Es una operación matemática, dado dos elementos uno llamado Radicando o cantidad sub radical y otro llamado índice, mediante la operación se buscar un tercer elemento llamada Raíz.
      </StyledText>
      <StyledText className='mt-2 ml-5 mr-5 mb-2 text-xl'>
        Propiedades de la radicación
      </StyledText>
      <StyledText className='ml-5 mr-5'>
        Si a--√n  y b√n están bien definidas en los reales, entonces se cumple los siguientes teoremas.
      </StyledText>
    </StyledView>
  )
}
