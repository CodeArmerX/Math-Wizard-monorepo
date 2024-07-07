import { ScrollView } from 'react-native'
import { StyledView, StyledText, StyledLink, StyledImage } from '../../components/StyledComponents'
export function FourthYear () {
  return (
    <ScrollView>
      <StyledView className='pb-28'>

        <StyledText className='text-2xl text-center mt-10'>Fourth Year Units</StyledText>
        <Unit
          title='Radicación en R'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/radicacion'
        />
        <Unit
          title='Orden en R. Desigualdades e inecuaciones'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/orden'
        />
        <Unit
          title='El plano Real'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/plano'
        />
        <Unit
          title='Sistemas lineales'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/sistemas'
        />
        <Unit
          title='Función cuadrática'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/funcion'
        />
      </StyledView>
    </ScrollView>
  )
}
function Unit ({
  title,
  front,
  to
}) {
  return (
    <StyledLink
      to={to}
    >
      <StyledView
        className='p-2 pt-3 mt-3 items-center'
      >
        <StyledView className='w-20 absolute z-10 mt-5 rounded shadow bg-purple-900'>
          <StyledText className='text-center text-purple-100'>Basic</StyledText>
        </StyledView>
        <StyledView>
          <StyledImage source={{ uri: front }} className='w-32 h-32 rounded' />
        </StyledView>
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-xl mt-1 text-center ml-5 mr-5'>{title}</StyledText>
        </StyledView>
      </StyledView>
    </StyledLink>
  )
}
