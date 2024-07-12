import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Limite = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-5 mr-5'>
        <StyledText className='text-2xl mb-2 text-center'>Limite de una Función</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        />
        <StyledText className='mb-2'>
          La división que marca una separación entre dos regiones se conoce como límite. Este término también se utiliza para nombrar a una restricción o limitación, al extremo que se puede alcanzar desde el aspecto físico y al extremo a que llega un periodo temporal.
        </StyledText>
        <StyledText className='mb-2'>
          El límite de la función f (x) en el punto a, es el valor al que se acercan las imágenes (las y) cuando las x se acercan al valor a. Es decir el valor al que tienden las imágenes cuando las x tienden a a.
        </StyledText>
        <StyledText className='mb-4'>
          Se dice que la función f (x) tiene como límite el número L, cuando x tiende a a, si fijado un número real positivo ε, mayor que cero, existe un número positivo  dependiente de , tal que, para todos los valores de x distintos de a que cumplen la condición:
        </StyledText>
        <StyledText className='mb-2 text-center text-lg'>
          {'0 < |x - a| < δ, se cumple que:'}
        </StyledText>
        <StyledText className='mb-3 text-center text-lg'>
          {'| f (x) - L| <ε'}
        </StyledText>
        <StyledText className='mb-2'>
          Se puede deducir de la definición, que para que exista el límite L de una función f (x) es necesario que se forme un entorno de L en f (x) siempre y cuando se pueda generar un entorno reducido de a en x.
        </StyledText>
        <StyledText className='mb-2 text-center text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/RdLtaXRO_Ik?si=v2ipTzNVMoIJDJ6D'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/kO_D4w13vyg?si=F1TVt_0gbzqq-8my'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/O4Hl-rXDNsY?si=r6-5je6gFp1r1kmc'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/YwOBnHe1sz8?si=kq_inxNqdo2ZGpCr'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
