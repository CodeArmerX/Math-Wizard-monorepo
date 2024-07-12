import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Inecuaciones = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl mb-2 text-center'>Inecuaciones</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://dibujotecni.com/wp-content/uploads/2013/01/desarrollos9_cono_transformada.png' }}
        />
        <StyledText className='mb-2'>
          {'Las inecuaciones son expresiones algebraicas que se relacionan a partir de desigualdades. Dichas relaciones se expresan mediante los signos > (mayor que), < (menor que), ≥ (mayor o igual que) o ≤ (menor o igual que). Las inecuaciones se conforman por valores conocidos y desconocidos. Estos últimos son llamados incógnitas.'}
        </StyledText>
        <StyledText className='mb-2'>
          La clasificación común de las inecuaciones se da de acuerdo a dos criterios principales: el número de incógnitas y la potencia de la incógnita.
        </StyledText>
        <StyledText className='mb-4'>
          Inecuaciones según el número de incógnitas
          Inecuaciones de una incógnita,
          Inecuaciones de dos incógnitas,
          Inecuaciones de tres incógnitas
        </StyledText>
        <StyledText className='mb-2'>
          Dentro de la clasificación de las inecuaciones también se deben tener en cuenta a las inecuaciones racionales y las inecuaciones absolutas.
          Las racionales se presentan cuando las incógnitas aparecen en el numerados o denominador de una fracción. Por esto son también llamadas fraccionarias.
        </StyledText>
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/gMDAtLLW5lM?si=DP0m1_nKdwt1SQdF'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/Bfb0efPKb-0?si=FjfWugibvzCZdX07'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/QX6Qh8dQB1I?si=xQeYaLWozoNwZVOj'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
