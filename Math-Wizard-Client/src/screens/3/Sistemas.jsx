import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Sistemas = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center items-center mt-10 pb-32 ml-5 mr-5'>
        <StyledText className='text-3xl mb-2'>Sistemas Lineales</StyledText>
        <StyledImage
          className='w-80 h-52 mt-3 mb-3'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2013/05/polinomio-1.jpg' }}
        />
        <StyledText className='mb-5'>
          Un sistema lineal es un modelo matemático de un sistema basado en el uso de un operador lineal. Los sistemas lineales generalmente exhiben características y propiedades que son mucho más simples que el caso no lineal.
        </StyledText>
        <StyledText className='mb-5'>
          Existen varios métodos para resolver sistemas de ecuaciones lineales. El método gráfico, de sustitución, igualación, suma y resta, y la regla de Cramer son especialmente útiles para resolver sistemas de 2 ecuaciones con 2 incógnitas.
        </StyledText>
        <StyledText className='mb-5'>
          Para sistemas de ecuaciones lineales de mayor dimensión (cualquier número de ecuaciones y de incógnitas), es mejor usar métodos más sistemáticos como el método de Gauss y el de Gauss-Jordan que incluso pueden programarse con relativa facilidad en algún lenguaje o herramienta de programación.
        </StyledText>
        <StyledText className='mb-5'>
          En general los sistemas de ecuaciones lineales pueden tener tres tipos de solución; solución única, soluciones infinitas o no tener ninguna solución. Además, los sistemas de ecuaciones lineales pueden clasificarse en función de sus términos independientes como sistemas heterogéneos o como sistemas homogéneos.ecuaciones originales, despejamos la incógnita restante y obtenemos su valor.
        </StyledText>

        <StyledText className=' text-xl mb-5'>
          Métodos para resolver sistemas de ecuaciones lineales 2x2
        </StyledText>

        <StyledText className=' text-xl mb-5'>
          Método gráfico
        </StyledText>
        <StyledText className='mb-5'>
          Consiste en despejar la variable dependiente (y) de cada una de las ecuaciones, realizar una tabulación de valores, graficar los pares ordenados (x,y) y dibujar la línea que une a los puntos de cada ecuación. Gráficamente un sistema de 2×2 queda representado como un par de líneas rectas en el plano xy; mientras que un sistema de 3×3 es representado como tres planos en un espacio tridimensional. En cualquier caso, la solución del sistema de ecuaciones es el punto en donde se intersectan las rectas o los planos.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Método de sustitución
        </StyledText>
        <StyledText className='mb-5'>
          En este método despejamos una incógnita de una ecuación y la sustituimos en la segunda ecuación para obtener una tercera ecuación que depende de una incógnita. De esta última ecuación despejamos la incógnita y obtenemos su valor. Luego sustituimos el valor encontrado en cualquiera de las dos ecuaciones originales, despejamos la incógnita restante y calculamos su valor.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Método de igualación
        </StyledText>
        <StyledText className='mb-5'>
          En el método de igualación despejamos la misma incógnita de ambas ecuaciones e igualamos las expresiones resultantes para obtener una tercera ecuación que depende de una incógnita. De esta ecuación despejamos la incógnita y obtenemos su valor.  Luego sustituimos el valor encontrado en cualquiera de las dos ecuaciones donde ya está despejada la incógnita restante y calculamos su valor.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Método de suma y resta
        </StyledText>
        <StyledText className='mb-5'>
          En este método multiplicamos a la ecuación 1 por el coeficiente de la incógnita x en la segunda ecuación, y luego multiplicamos a la ecuación 2 por el coeficiente de la incógnita x en la primera ecuación. Luego sumamos o restamos las ecuaciones obtenidas en el paso anterior de tal manera que se elimine el término que depende de x para obtener una ecuación con una incógnita. De esta última ecuación despejamos la incógnita y obtenemos su valor.  Luego sustituimos el valor encontrado en cualquiera de las dos ecuaciones originales, despejamos la incógnita restante y obtenemos su valor.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Regla de Cramer
        </StyledText>
        <StyledText className='mb-5'>
          La regla de Cramer está basada en el cálculo de determinantes. Aquí es importante recordar que los determinantes sólo están definidos para matrices cuadradas (mismo número de ecuaciones y de incógnitas).
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/LTfv1G2iYuQ?si=sgAuSdf3A8i58j3P'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/lJ2yfxzmAkc?si=4qEsHzeEdom0_fkB'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/p2AIFY1b9qk?si=YGHYD3RzmKaN1YUa'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/jZIk90KQo6s?si=izP2FPLbUk4RXX8X'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
