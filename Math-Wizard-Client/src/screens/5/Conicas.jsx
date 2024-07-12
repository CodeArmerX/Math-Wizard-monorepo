import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Conicas = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl mb-2 text-center'>Estudio de las Cónicas</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://dibujotecni.com/wp-content/uploads/2013/01/desarrollos9_cono_transformada.png' }}
        />
        <StyledText className='mb-2'>
          En matemática, y concretamente en geometría, se denomina sección cónica (o simplemente cónica) a todas las curvas resultantes de las diferentes intersecciones entre un cono y un plano; si dicho plano no pasa por el vértice, se obtienen las cónicas propiamente dichas elipse, parábola, hipérbola y circunferencia.
        </StyledText>
        <StyledText className='mb-2'>
          Circunferencia: Se denomina circunferencia al lugar geométrico de los puntos del plano que equidistan de un punto fijo llamado centro. El radio de la circunferencia es la distancia de un punto cualquiera de dicha circunferencia al centro.
        </StyledText>
        <StyledText className='mb-4'>
          Hipérbola: Es el lugar geométrico de los puntos del plano cuya diferencia de distancias entre dos puntos fijos es constante. Estos dos puntos fijos se llaman focos de la hipérbola .
        </StyledText>
        <StyledText className='mb-2'>
          Parábola: Es el lugar geométrico de los puntos del plano que equidistan de un punto fijo llamado foco y de una recta fija llamada directriz .
        </StyledText>
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/8_dhO8AroT0?si=Ii3wQWgNeRIwO4RZ'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/jk9V5OkJlAg?si=epUT1SoLRkDP3W3n'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/307opP2TOYU?si=hkjCZK9l4UX04K4l'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
