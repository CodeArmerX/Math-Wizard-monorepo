import { ScrollView } from 'react-native'
import { Unit } from '../../components/Unit'
import { StyledView, StyledText } from '../../components/StyledComponents'
export function FifthYear () {
  return (
    <ScrollView>
      <StyledView className='pb-28'>
        <StyledText className='text-2xl text-center mt-10'>Fifth Year Units</StyledText>
        <Unit
          title='Ecuaciones Multivariable'
          front='https://definicion.de/wp-content/uploads/2013/05/algebra.jpg'
          to='/courses/third/multivariable'
        />
        <Unit
          title='Polinomios'
          front='https://definicion.de/wp-content/uploads/2013/05/polinomio-1.jpg'
          to='/courses/third/polinomios'
        />
        <Unit
          title='Inecuaciones'
          front='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMosYqTGApN8diW2cmw-OPw0bZrtC4tNVxwQ&s'
          to='/courses/third/inecuaciones'
        />
        <Unit
          title='Estudio de Cónicas'
          front='https://dibujotecni.com/wp-content/uploads/2013/01/desarrollos9_cono_transformada.png'
          to='/courses/third/conicas'
        />
        <Unit
          title='Límite de una función'
          front='https://www.funciones.xyz/wp-content/uploads/2021/04/limite-de-una-funcion.png?ezimgfmt=rs:367x368/rscb1/ng:webp/ngcb1'
          to='/courses/third/limite'
        />
        <Unit
          title='Derivadas de una función'
          front='https://definicion.de/wp-content/uploads/2011/03/gradiente.jpg'
          to='/courses/third/derivadas'
        />
      </StyledView>
    </ScrollView>
  )
}
