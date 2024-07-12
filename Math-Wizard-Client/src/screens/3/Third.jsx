import { ScrollView } from 'react-native'
import { Unit } from '../../components/Unit'
import { StyledView, StyledText } from '../../components/StyledComponents'
export function ThirdYear () {
  return (
    <ScrollView>
      <StyledView className='pb-28 ml-4 mr-4'>

        <StyledText className='text-3xl text-center mt-10 font-bold text-violet-800'>Third Year Units</StyledText>
        <Unit
          title='Radicación en R'
          front='https://www.caosyciencia.com/wp-content/uploads/2023/09/raiz-cuadrada.jpg'
          to='/courses/third/radicacion'
        />
        <Unit
          title='Orden en R. Desigualdades e inecuaciones'
          front='https://totumat.files.wordpress.com/2019/11/1-21-inecuaciones-2-de-2.png?w=810'
          to='/courses/third/orden'
        />
        <Unit
          title='El plano Real'
          front='https://s1.significados.com/foto/plano-cartesiano.jpg?class=article'
          to='/courses/third/plano'
        />
        <Unit
          title='Sistemas lineales'
          front='https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          to='/courses/third/sistemas'
        />
        <Unit
          title='Función cuadrática'
          front='https://www.shutterstock.com/image-illustration/formula-bhaskara-illustration-high-school-600nw-2041002368.jpg'
          to='/courses/third/funcion'
        />
        <Unit
          title='Geometría Elemental'
          front='https://definicion.de/wp-content/uploads/2009/02/geometria-1.jpg'
          to='/courses/third/geometria'
        />
        <Unit
          title='Estadística'
          front='https://economipedia.com/wp-content/uploads/Estadistica-2.jpg'
          to='/courses/third/estadistica'
        />
      </StyledView>
    </ScrollView>
  )
}
