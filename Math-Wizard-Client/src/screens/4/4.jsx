import { ScrollView } from 'react-native'
import { Unit } from '../../components/Unit'
import { StyledView, StyledText } from '../../components/StyledComponents'
export function FourthYear () {
  return (
    <ScrollView>
      <StyledView className='pb-28'>
        <StyledText className='text-3xl text-center mt-10 font-bold text-violet-800'>Fourth Year Units</StyledText>
        <Unit
          title='Funciones Reales'
          front='https://definicion.de/wp-content/uploads/2017/12/funcion-lineal.png'
          to='/courses/third/reales'
        />
        <Unit
          title='Funciones Logarítmicas'
          front='https://definicion.de/wp-content/uploads/2018/11/logaritmo-1.jpg'
          to='/courses/third/logaritmicas'
        />
        <Unit
          title='Razones Trigonométricas'
          front='https://definicion.de/wp-content/uploads/2010/04/trigonometria-1.jpg'
          to='/courses/third/razones'
        />
        <Unit
          title='Circunferencia Trigonométrica'
          front='https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          to='/courses/third/circunferencia'
        />
        <Unit
          title='Funciones Trigonométricas'
          front='https://i.pinimg.com/564x/23/1c/34/231c3482d772bd560052e6f0e03c8161.jpg'
          to='/courses/third/trigonometricas'
        />
        <Unit
          title='Numeros Complejos'
          front='https://definicion.de/wp-content/uploads/2009/05/numeros-complejos-1.jpg'
          to='/courses/third/complejos'
        />
        <Unit
          title='Progresiones Aritméticas'
          front='https://definicion.de/wp-content/uploads/2013/08/operacion-1.jpg'
          to='/courses/third/progresiones'
        />
      </StyledView>
    </ScrollView>
  )
}
