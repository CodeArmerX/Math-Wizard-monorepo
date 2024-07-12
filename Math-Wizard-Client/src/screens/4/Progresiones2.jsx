import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Progresiones2 = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl mb-2 text-center'>Progresiones</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3 self-center'
          source={{ uri: 'https://dibujotecni.com/wp-content/uploads/2013/01/desarrollos9_cono_transformada.png' }}
        />
        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Progresiones Aritméticas Y Geométricas
        </StyledText>
        <StyledText className='mb-2'>
          Toda secuencia ordenada de números reales recibe el nombre de sucesión. Dentro del grupo de sucesiones existen dos particularmente interesantes por el principio de regularidad que permite sistematizar la definición de sus propiedades: las progresiones aritméticas y geométricas.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Progresiones aritméticas
        </StyledText>
        <StyledText className='mb-2'>
          Una progresión aritmética es una clase de sucesión de números reales en la que cada término se obtiene sumando al anterior una cantidad fija predeterminada denominada diferencia. Llamando d a esta diferencia, el término general de la progresión an , que ocupa el número de orden n en la misma, se puede determinar a partir del valor del primero de los términos, a1.
        </StyledText>
        <StyledText className='mb-2 text-xl'>
          an = a1 + (n - 1) d.
        </StyledText>
        <StyledImage
          className='w-60 h-60 mt-3 mb-3 self-center'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_01p/c3747d9f-7913-4506-8a04-8bc1c42deb07?t=1260839431812' }}
        />
        <StyledText className='mb-2'>
          Las sucesiones (por ejemplo, las progresiones aritméticas y geométricas) pueden verse como correspondencias unívocas entre el conjunto de los números naturales N y el de los reales R.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Suma de los términos de una progresión aritmética
        </StyledText>
        <StyledText className='mb-2'>
          Para determinar la suma de un número finito de términos de una progresión aritmética, denotada por a1, a2, a3, ..., an-2, an-1, an, basta con considerar el principio de que los pares de términos a1 y an, a2 y an-1, a3 y an-2, etcétera, son equidistantes, de manera que todos estos pares suman una misma cantidad.
        </StyledText>
        <StyledText className='mb-2'>
          Generalizando esta consideración, se tiene que la suma de todos los términos de una progresión aritmética es igual a:
        </StyledText>
        <StyledImage
          className='w-60 h-20 mt-3 mb-3 self-center'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_02p/e9cf5206-9220-4991-b6a2-54210b778353?t=1260839431671' }}
        />

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Interpolación de términos en una progresión aritmética
        </StyledText>
        <StyledText className='mb-2'>
          Entre cada dos términos a y b de una progresión aritmética es posible interpolar otros m términos, llamados medios diferenciales, de manera que todos ellos integren una nueva progresión aritmética (con m + 2 términos) donde a y b sean los extremos.
        </StyledText>
        <StyledText className='mb-2'>
          La diferencia de esta progresión se determinará con arreglo a la siguiente fórmula:
        </StyledText>
        <StyledImage
          className='w-48 h-20 mt-3 mb-3 self-center'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_03p/bbd7571f-22dd-4522-9b3a-b61e56826909?t=1260839432031' }}
        />

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Progresiones geométricas
        </StyledText>
        <StyledText className='mb-2'>
          El término general an de una progresión geométrica puede escribirse como:
        </StyledText>
        <StyledText className='mb-2'>
          La diferencia de esta progresión se determinará con arreglo a la siguiente fórmula:
        </StyledText>
        <StyledText className='mb-2 text-xl'>
          an = a1 × rⁿ⁻¹
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Suma y producto de los términos de una progresión geométrica
        </StyledText>
        <StyledText className='mb-2'>
          La suma de n términos consecutivos de una progresión geométrica puede calcularse a partir de cualquiera de las siguientes expresiones:
        </StyledText>
        <StyledImage
          className='w-80 h-12 mt-3 mb-3'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_05p/89b6a6ed-ea08-4e25-b8c2-1b0793ada485?t=1260839432703' }}
        />
        <StyledText className='mb-2'>
          Esta fórmula sólo es válida si r ¹ 1, ya que si r = 1 todos los términos de la progresión serían iguales, y la suma sería Sn = a1 × n.
        </StyledText>
        <StyledText className='mb-2'>
          {'Cuando r > 1, la progresión crece indefinidamente y la suma de sus términos tiende a infinito. En cambio, si r < 1, cada término será menor que el anterior, y la progresión se irá acercando a 0 conforme aumente el número de sus términos. Cuando | r | < 1, puede demostrarse que la suma se convierte en:'}
        </StyledText>
        <StyledImage
          className='w-48 self-center h-20 mt-3 mb-3'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_06p/3a807f5a-bb05-4a7c-930d-5f5f1e82f43a?t=1260839432515' }}
        />
        <StyledText className='mb-2'>
          Por otra parte, es fácil obtener que el producto de los n primeros términos de una progresión geométrica es igual a:
        </StyledText>
        <StyledImage
          className='w-80 h-16 mt-3 mb-3 self-center'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_07p/74d3da0e-98e9-4313-af58-3ba535835e15?t=1260839432375' }}
        />

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Interpolación de términos en una progresión geométrica
        </StyledText>
        <StyledText className='mb-2'>
          Entre dos términos a y b de una progresión geométrica es posible intercalar m términos, denominados medios geométricos o proporcionales, tales que todos ellos (los m + 2 términos resultantes) constituyan una nueva progresión geométrica de razón r determinada como:
        </StyledText>
        <StyledImage
          className='w-48 h-12 mt-3 mb-3 self-center'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_011_08p/527b0465-89f8-4bed-85da-8d4ef952025a?t=1260839432234' }}
        />

        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/08_exV8PpPM?si=U2lbQxN5YElqdkjt'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/4IQiSytb4wk?si=rqwWMiCcoq_WjXEO'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/RS6MWaHigcw?si=z7d_Mj7b6qxrdlpu'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
