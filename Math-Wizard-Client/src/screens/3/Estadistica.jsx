import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledView, StyledVideo } from '../../components/StyledComponents'

export const Estadistica = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-10 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl ml-5 mr-5 mb-5 text-center'>
          Estadística
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-5 self-center'
          source={{ uri: 'https://economipedia.com/wp-content/uploads/Estadistica-2.jpg' }}
        />
        <StyledText className='text-xl text-center mb-5'>
          ¿Qué es la estadística?
        </StyledText>
        <StyledText className='mb-5'>
          La estadística es una disciplina científica formal y deductiva, a menudo considerada rama de las matemáticas, que estudia la variabilidad y las leyes de la probabilidad, a través de herramientas diversas, tanto conceptuales como de muestreo.
        </StyledText>

        <StyledText className='mb-5'>
          Los principales conceptos en estadística a partir de los cuales podemos profundizar en ella son:
        </StyledText>
        <StyledText className='mb-5'>
          Población: también conocido como universo o conjunto completo de individuos que cumplen una serie de características y al que harán referencia las conclusiones del estudio. A partir de la población de estudio se elegirá una muestra representativa.
        </StyledText>
        <StyledText className='mb-5'>
          Muestra: es un grupo acotado o reducido de todos los individuos de forman la población. Se considera que una muestra es representativa cuando los individuos de la misma son seleccionados al azar.
        </StyledText>
        <StyledText className='mb-5'>
          Individuo: son las personas o elementos que contienen la información del fenómeno que se pretende estudiar.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo: es el procedimiento mediante el cual se obtiene una muestra. El muestreo puede ser probabilístico o aleatorio y no probabilístico o no aleatorio.
        </StyledText>
        <StyledText className='mb-5'>
          Aleatoriedad de una muestra: es la característica mediante la cual todos los miembros de una muestra tienen las mismas posibilidades de formar parte de la misma.
        </StyledText>
        <StyledText className='mb-5'>
          Homogeneidad de una muestra: es la característica mediante la cual las variables de la muestra se presentan en la misma proporción que las de la población.
        </StyledText>
        <StyledText className='mb-5'>
          Independencia en la selección de una muestra: es la característica de la muestra que determina que la selección de un individuo no influye en la selección de otro individuo.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo simple: es el muestreo de tipo probabilístico, mediante el cual cualquier elemento de la población tiene la misma probabilidad de pertenecer a la muestra.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo sistemático: es el muestro de tipo probabilístico, en el que el proceso de selección de la muestra se realiza mediante una regla sistemática simple como es elegir un número determinado de individuos.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo estratificado: es el muestreo de tipo probabilístico que divide la población en subgrupos según algunas características para luego extraer una muestra al azar de cada uno de los subgrupos.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo por conglomerados: es el muestreo de tipo probabilístico en el que se extrae una muestra al azar a partir de grupos naturales de individuos dentro del universo o población.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo de conveniencia: es el muestreo de tipo no probabilístico en el que la muestra se selecciona por su facilidad o directamente se autoselecciona.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo por cuota: es el muestreo de tipo no probabilístico, en el que la muestra se sustenta sobre el buen conocimiento de los grupos o estratos de la población y en los individuos más representativos para sus fines. También se denomina muestreo accidental.
        </StyledText>
        <StyledText className='mb-5'>
          Muestreo por criterio: es el muestreo de tipo no probabilístico en el que el investigador utiliza sus conocimientos sobre la población para elegir los individuos de la muestra.
        </StyledText>
        <StyledText className='mb-5'>
          Variables: son las características de la población que se representan en los individuos que forman la muestra y que son susceptibles de ser medidas. Las variables pueden ser cuantitativa o cualitativas.
        </StyledText>
        <StyledText className='mb-5'>
          Parámetro: es un índice que resume una determinada característica de la población, representándose por las letras griegas “μ” o mu y “σ” o ro. Un parámetro es la función definida sobre los valores numéricos de características medibles de una población.
        </StyledText>
        <StyledText className='mb-5'>
          Estadístico: es un índice que resume una determinada característica de la muestra, representándose por las letras del alfabeto latino “x” y “s”. Un estadístico es la función definida sobre los valores numéricos de una muestra.
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/JtB2w0QLRZ4?si=VEcUdUUo5ctwVlmZ'
        />
        <StyledVideo
          source='https://youtu.be/5bZXpfxwHqk?si=DKuy_n1g8NstVGW-'
        />
        <StyledVideo
          source='https://youtu.be/Pv-7vgYRtD8?si=4W7agT7pJUOHcgpt'
        />
      </StyledView>
    </ScrollView>
  )
}
