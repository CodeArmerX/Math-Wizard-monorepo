import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledVideo, StyledView } from '../../components/StyledComponents'

export const Plano = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 items-center mt-12 mr-3 ml-3'>
        <StyledText className='text-2xl mb-5'>
          El plano y la recta real
        </StyledText>

        <StyledImage
          source={{ uri: 'https://s1.significados.com/foto/plano-cartesiano.jpg?class=article' }}
          className='w-64 h-64 mb-5'
        />

        <StyledText>
          En geometría euclidiana, la recta o la línea recta es una línea que se extiende en una misma dirección; por lo tanto, tiene una sola dimensión y contiene un número infinito de puntos. Dicha recta también se puede describir como una sucesión continua de puntos extendidos en una sola dirección.
        </StyledText>
        <StyledText className='text-xl text-center mr-12 ml-12'>
          ¿Cómo se representa gráficamente en la recta real?
        </StyledText>
        <StyledText className='mt-5'>
          La recta real se representa como una recta en la que se marcan el y, a su derecha, Podemos decir que cada punto de la recta corresponde a un número real y a cada número real le corresponde solo un punto de la recta real. De este modo, se correlacionan los números reales con la recta real de manera inequívoca.
        </StyledText>
        <StyledText className='mt-5'>
          En matemáticas, el plano proyectivo real es un ejemplo de una variedad bidimensional compacta no orientable; en otras palabras, una superficie unilateral. No se puede embeber en un espacio tridimensional estándar sin intersecarse.
        </StyledText>
        <StyledText className='mt-5'>
          Es momento de practicar, ¿estás listo?
        </StyledText>
        <StyledVideo
          source='https://youtu.be/OTzXILk2eEc?si=yiLMSBxU24ISrSgm'
          imageSource='https://s1.significados.com/foto/plano-cartesiano.jpg?class=article'
        />
        <StyledVideo
          source='https://youtu.be/aZHEJXJboJ8?si=BBRdVJoYKZEJcmX0'
          imageSource='https://i.pinimg.com/564x/43/52/bc/4352bccb6f11ac49f8989cebfcf80383.jpg'
        />
        <StyledVideo
          source='https://youtu.be/kzOzYY-T-50?feature=shared'
          imageSource='https://i.ytimg.com/vi/kzOzYY-T-50/maxresdefault.jpg '
        />
        <StyledText
          className='mt-5'
        >
          Ahora que has visto los videos, ¿qué te pareció? ¿Te gustaría aprender más?, si es así, ve a la siguiente lección.
        </StyledText>
      </StyledView>
    </ScrollView>
  )
}
