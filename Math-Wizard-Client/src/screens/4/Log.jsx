import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Log = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-10 pb-32 ml-8 mr-8'>
        <StyledText className='text-3xl mb-2'>Funciones logarítmicas</StyledText>
        <StyledImage
          className='w-80 h-52 mt-3 mb-3'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2018/11/logaritmo-1.jpg' }}
        />
        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Definición de función logarítmica
        </StyledText>
        <StyledText className='mb-5'>
          Una función logarítmica es aquella que genéricamente se expresa como f (x) == logax, siendo a la base de esta función, que ha de ser positiva y distinta de 1.
        </StyledText>
        <StyledText className='mb-5'>
          La función logarítmica es la inversa de la función exponencial, dado que:
        </StyledText>
        <StyledText className='mb-5'>
          loga x = b Û ab = x.
        </StyledText>
        <StyledImage
          className='w-80 h-32 mt-3 mb-3'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_036_01p/663f41ed-4a87-470a-9d33-ebb09357642b?t=1260840798078' }}
        />
        <StyledText className='mb-5'>
          Representación gráfica de funciones logarítmicas y de sus inversas (exponenciales).
        </StyledText>

        <StyledText className='mt-2 mb-4 text-center text-xl'>
          Propiedades de la función logarítmica
        </StyledText>
        <StyledText className='mb-5'>
          Las propiedades generales de la función logarítmica se deducen a partir de las de su inversa, la función exponencial. Así, se tiene que:
        </StyledText>
        <StyledText className='mb-5'>
          • La función logarítmica sólo existe para valores de x positivos, sin incluir el cero. Por tanto, su dominio es el intervalo (0,+¥).
        </StyledText>
        <StyledText className='mb-5'>
          • Las imágenes obtenidas de la aplicación de una función logarítmica corresponden a cualquier elemento del conjunto de los números reales, luego el recorrido de esta función es R.
        </StyledText>
        <StyledText className='mb-5'>
          • En el punto x = 1, la función logarítmica se anula, ya que loga 1 = 0, en cualquier base.
        </StyledText>
        <StyledText className='mb-5'>
          • La función logarítmica de la base es siempre igual a 1.
        </StyledText>
        <StyledText className='mb-5'>
          • {'Finalmente, la función logarítmica es continua, y es creciente para a > 1 y decreciente para a < 1.'}
        </StyledText>

        <StyledText className='mt-2 mb-4 text-center text-xl'>
          Ecuaciones logarítmicas
        </StyledText>
        <StyledText className='mb-5'>
          Cuando en una ecuación la variable o incógnita aparece como argumento o como base de un logaritmo, se llama logarítmica.
        </StyledText>
        <StyledText className='mb-5'>
          La resolución de ecuaciones logarítmicas se basa en los mismos procedimientos utilizados en la resolución de las ecuaciones habituales. Aunque no existen métodos fijos, habitualmente se procura convertir la ecuación logarítmica en otra equivalente donde no aparezca ningún logaritmo. Para ello, se ha de intentar llegar a una situación semejante a la siguiente:
        </StyledText>
        <StyledText className='mb-5'>
          loga f (x) = loga g (x)
        </StyledText>
        <StyledText className='mb-5'>
          Entonces, se emplean los antilogaritmos para simplificar la ecuación hasta f (x) = g (x), que se resuelve por los métodos habituales.
        </StyledText>
        <StyledText className='mb-5'>
          También puede operarse en la ecuación logarítmica para obtener una ecuación equivalente del tipo:
        </StyledText>
        <StyledText className='mb-5'>
          loga f (x) = m
        </StyledText>
        <StyledText className='mb-5'>
          de donde se obtiene que f (x) = am, que sí se puede resolver de la forma habitual.
        </StyledText>

        <StyledText className='mt-2 mb-4 text-center text-xl'>
          Sistemas de ecuaciones logarítmicas
        </StyledText>
        <StyledText className='mb-5'>
          Cuando en un sistema aparecen una o varias ecuaciones logarítmicas, se denomina sistema de ecuaciones logarítmicas. En el caso de un sistema de dos ecuaciones con dos incógnitas, se pueden producir tres casos distintos:
        </StyledText>
        <StyledText className='mb-5'>
          • Un sistema formado por una ecuación polinómica y una logarítmica.
        </StyledText>
        <StyledText className='mb-5'>
          • Un sistema constituido por dos ecuaciones logarítmicas.
        </StyledText>
        <StyledText className='mb-5'>
          • Un sistema compuesto por una ecuación polinómica y una ecuación exponencial.
        </StyledText>
        <StyledText className='mb-5'>
          En cada caso, se utilizan los métodos habituales de resolución de sistemas de ecuaciones, teniendo siempre presente que estas ecuaciones han de transformarse en otras equivalentes, donde la incógnita no aparezca en el argumento o la base del logaritmo, ni en el exponente de la función exponencial.
        </StyledText>
        <StyledImage
          className='w-80 h-32 mt-3 mb-3'
          source={{ uri: 'https://www.hiru.eus/documents/21564/941784/matematicas_036_02p/387dc6a9-d3c6-4f9a-a6bd-e0576102e288?t=1260840798468' }}
        />
        <StyledText className='mb-5'>
          Forma de las funciones logarítmicas según el valor de la base.
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/z5WDNFfSifo?si=swOcQrBfJLWJS2W5'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/MjSs6QGNqYk?si=BdNblklWWt1glu1j'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/4SyYGHwuktU?si=3VhMcruxerlj7nZv'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
