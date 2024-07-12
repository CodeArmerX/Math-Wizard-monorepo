import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Circunferencia2 = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-3xl mb-2 text-center'>Circunferencia trigonométrica</StyledText>
        <StyledImage
          className='w-80 h-52 mt-3 mb-3'
          source={{ uri: 'https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        />
        <StyledText className='mb-5'>
          La circunferencia goniométrica, trigonométrica, unitaria, es una circunferencia de radio uno, normalmente con su centro en el origen (0, 0) de un sistema de coordenadas, de un plano euclídeo o complejo. Dicha circunferencia se utiliza con el fin de poder estudiar fácilmente las razones trigonométricas y funciones trigonométricas, mediante la representación de triángulos rectángulos auxiliares.
        </StyledText>
        <StyledText className='mb-5'>
          Si (x, y) es un punto de la circunferencia unidad del primer cuadrante, entonces x e y son las longitudes de los catetos de un triángulo rectángulo cuya hipotenusa tiene longitud 1. Aplicando el teorema de Pitágoras, a y b
        </StyledText>
        <StyledText className='mb-5'>
          Satisfacen la ecuación:
        </StyledText>
        <StyledText className='mb-5 text-xl'>
          x² + y² = 1 = radio = hipotenusa.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Funciones trigonométricas en la circunferencia unitaria
        </StyledText>
        <StyledText className='mb-5'>
          Si (x, y) es un punto de la circunferencia unidad, y el radio que tiene el origen en (0, 0), forma un ángulo 𝛼 con el eje X, las principales funciones trigonométricas se pueden representar como razón de segmentos asociados a triángulos rectángulos auxiliares, de la siguiente manera:
        </StyledText>
        <StyledText className='mb-5'>
          El seno es la razón entre el cateto opuesto (a) y la hipotenusa (c)
        </StyledText>
        <StyledText className='mb-5 text-xl'>
          sen(a) = a/c
        </StyledText>
        <StyledText className='mb-5'>
          y dado que la hipotenusa es igual al radio, que tiene valor = 1, se deduce:
        </StyledText>
        <StyledText className='mb-5 text-xl'>
          sen(a) = a
        </StyledText>
        <StyledText className='mb-5'>
          El coseno es la razón entre el cateto adyacente (b) y la hipotenusa (c)
        </StyledText>
        <StyledText className='mb-5 text-xl'>
          sen(a) = b/c
        </StyledText>
        <StyledText className='mb-5'>
          y como la hipotenusa tiene valor = 1, se deduce:
        </StyledText>
        <StyledText className='mb-5 text-xl'>
          sen(a) = b
        </StyledText>
        <StyledText className='mb-5'>
          La tangente es la razón entre el cateto opuesto y el adyacente
        </StyledText>
        <StyledText className='mb-5'>
          sen(a) = a/b
        </StyledText>
        <StyledText className='mb-5'>
          Por semejanza de triángulos: AE/AC = OA/OC
        </StyledText>
        <StyledText className='mb-5'>
          como OA = 1, se deduce que: AE = AC/OC
        </StyledText>
        <StyledText className='mb-5'>
          tan(a) = /AE
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Funciones trigonométricas recíprocas.
        </StyledText>
        <StyledText className='mb-5'>
          La cosecante, la secante y la cotangente, son las razones trigonométricas recíprocas del seno, coseno y tangente:
        </StyledText>
        <StyledText className='mb-5'>
          csc(a) = 1/sen(a) = /OF
        </StyledText>
        <StyledText className='mb-5'>
          sec(a) = 1/cos(a) = /OE
        </StyledText>
        <StyledText className='mb-5'>
          cot(a) = 1/tan(a) = /AF
        </StyledText>
        <StyledText className='mb-5'>
          Los valores de la cotangente, la secante y la cosecante se obtienen, análogamente, mediante semejanza de triángulos.
        </StyledText>

        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/CL_Kci6kJlA?si=c7qNeArWFNImadzm'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/vICf_JIwar4?si=WP5tnho4TdWQcKKu'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/SNccJDUsu-A?si=JlLIV4whbDdGA61l'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
