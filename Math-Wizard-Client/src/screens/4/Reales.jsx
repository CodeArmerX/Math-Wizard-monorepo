import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Reales = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-10 pb-32 ml-8 mr-8'>
        <StyledText className='text-3xl mb-2'>Funciones Reales</StyledText>
        <StyledImage
          className='w-80 h-52 mt-3 mb-3'
          source={{ uri: 'https://definicion.de/wp-content/uploads/2020/01/funcion-sobreyectiva.jpg' }}
        />
        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Concepto de función
        </StyledText>
        <StyledText className='mb-5'>
          Función real de variable real es toda correspondencia   que asocia a cada elemento de un determinado subconjunto de números reales, llamado dominio, otro número real.
        </StyledText>
        <StyledText className='mb-5 text-center text-2xl'>
          {'f:D ---> R'}
        </StyledText>
        <StyledText className='mb-5 text-center text-2xl'>
          {'x ---> f(x) = y'}
        </StyledText>
        <StyledText className='mb-5'>
          El subconjunto en el que se define la función se llama dominio o campo existencia de la función. Se designa por D.
        </StyledText>
        <StyledText className='mb-5'>
          El número X perteneciente al dominio de la función recibe el nombre de variable independiente.
        </StyledText>
        <StyledText className='mb-5'>
          Al número, y, asociado por, f, al valor X, se le llama variable dependiente. La imagen de X se designa por f(x). Luego
        </StyledText>
        <StyledText className='mb-5 text-center text-2xl'>
          y = f(x)
        </StyledText>
        <StyledText className='mb-5'>
          Se denomina recorrido de una función al conjunto de los valores reales que toma la variable y o f(x).
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-lg'>
          Dominio de una función
        </StyledText>
        <StyledText className='mt-2 text-center mb-4 text-lg'>
          Dominio de la función polinómica entera
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R, cualquier número real tiene imagen.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función racional
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R menos los valores que anulan al denominador (no puede existir un número cuyo denominador sea cero).
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función irracional de índice impar
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función irracional de índice par
        </StyledText>
        <StyledText className='mb-5'>
          El dominio está formado por todos los valores que hacen que el radicando sea mayor o igual que cero.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función logarítmica
        </StyledText>
        <StyledText className='mb-5'>
          El dominio está formado por todos los valores que hacen que el argumento del logaritmo sea mayor que cero.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función exponencial
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función seno
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función coseno
        </StyledText>
        <StyledText className='mb-5'>
          El dominio es R.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función tangente
        </StyledText>
        <StyledImage
          className='w-80 h-28 mt-3 mb-3'
          source={{ uri: 'https://cdn-blog.superprof.com/blog_all/wp-content/uploads/latex/e384355dce3dcd748aa136d91ab9001b0737a66d.png' }}
        />
        <StyledImage
          className='w-80 h-28 mt-3 mb-3'
          source={{ uri: 'https://cdn-blog.superprof.com/blog_all/wp-content/uploads/latex/51af6413140c285dfd3a50a29eea087616c99e29.png' }}
        />

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función cotangente
        </StyledText>
        <StyledText className='mb-5'>
          D = R - {'{k·π;k∈Z}'}
        </StyledText>
        <StyledText className='mb-5'>
          D = R - {'{...,-π,0,π, ...}'}
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función secante
        </StyledText>
        <StyledImage
          className='w-80 h-28 mt-3 mb-3'
          source={{ uri: 'https://cdn-blog.superprof.com/blog_all/wp-content/uploads/latex/874a3a967566c026a64559d7dc6c9dd8ce855d18.png' }}
        />
        <StyledImage
          className='w-80 h-28 mt-3 mb-3'
          source={{ uri: 'https://cdn-blog.superprof.com/blog_all/wp-content/uploads/latex/0b08d893012fa3558ebda6d6f842b1bb4c9b7000.png' }}
        />

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función cosecante
        </StyledText>
        <StyledText className='mb-5'>
          D = R - {'{k·π;k∈Z}'}
        </StyledText>
        <StyledText className='mb-5'>
          D = R - {'{...,-π,0,π, ...}'}
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Dominio de la función cosecante
        </StyledText>
        <StyledText className='mb-5'>
          D(f+g)=D(f-g)=D(f·g) = D(f) ∩ D(g)
        </StyledText>
        <StyledText className='mb-5'>
          D(f/g) = D(f) ∩ D(g) - {'{x∈R / g(x) = 0}'}
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Gráfica de funciones
        </StyledText>
        <StyledText className='mb-5'>
          Si f es una función real, a cada par (x,y)=(x,f(x)) determinado por la función f le corresponde en el plano cartesiano un único punto P(x,y)=P(x,f(x)). El valor de x debe pertenecer al dominio de definición de la función.
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Composición de funciones
        </StyledText>
        <StyledText className='mb-5'>
          Si tenemos dos funciones: f(x) y g(x), de modo que el dominio de la 2ª esté incluido en el recorrido de la 1ª, se puede definir una nueva función que asocie a cada elemento del dominio de f(x) el valor de g[f(x)].
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Función inversa o recíproca
        </StyledText>
        <StyledText className='mb-5'>
          Se llama función inversa o reciproca de f a otra función f⁻¹ que cumple que: Si f(a) = b, entonces f⁻¹(b) = a.
        </StyledText>
        <StyledText className='mb-5'>
          fo f⁻¹ = f⁻¹ o f = x
        </StyledText>

        <StyledText className='mt-2  mb-4 text-xl'>
          Cálculo de la función inversa
        </StyledText>
        <StyledText className='mb-5'>
          a. Se escribe la ecuación de la función en x e y.
        </StyledText>
        <StyledText className='mb-5'>
          b. Se intercambian las variables.
        </StyledText>
        <StyledText className='mb-5'>
          c. Se despeja la variable x en función de la variable y.
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/tZ8AYOOB9G4?si=qMlgmMBRh2SNC3ya'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/ulRV6rTSdt0?si=8d7ji7cYCP7v4-QX'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/8soQJtYlPis?si=Z1bJfOYEWkicA-M4'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
