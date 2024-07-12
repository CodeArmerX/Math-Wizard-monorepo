import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Complejos = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-12 pb-32 ml-8 mr-8'>
        <StyledText className='text-2xl mb-2 text-center'>Numeros Complejos</StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://dibujotecni.com/wp-content/uploads/2013/01/desarrollos9_cono_transformada.png' }}
        />
        <StyledText className='mb-2'>
          Un número complejo se define como un par ordenado de números reales:
        </StyledText>
        <StyledText className='mb-2 text-lg'>
          𝑧=(𝑎,𝑏) 𝑐𝑜𝑛 𝑎,𝑏 ∈ 𝑅
        </StyledText>
        <StyledText className='mb-4'>
          Donde el primer elemento del par ordenado se llama parte real del número complejo, y el segundo elemento se llama parte imaginaria:
        </StyledText>
        <StyledText className='mb-4 text-lg'>
          𝑅𝑒(𝑧)=𝑎
        </StyledText>
        <StyledText className='mb-4 text-lg'>
          𝐼𝑚(𝑧)=𝑏
        </StyledText>
        <StyledText className='mb-4'>
          En los números complejos se definen las siguientes operaciones:
        </StyledText>
        <StyledText className='mb-2 text-lg'>
          (𝑎,𝑏)+(𝑐,𝑑)=(𝑎+𝑐,𝑏+𝑑)
        </StyledText>
        <StyledText className='mb-4 text-lg'>
          (𝑎,𝑏).(𝑐,𝑑)=(𝑎𝑐–𝑏𝑑,𝑎𝑑+𝑏𝑐)
        </StyledText>
        <StyledText className='mb-4'>
          Con estas operaciones, puede demostrarse que el conjunto de los números complejos tiene las mismas propiedades que los reales con la suma y el producto. No nos extenderemos desarrollando esta cuestión algebraica porque en la práctica lo usual es operar con otras expresiones de los números complejos, como veremos a continuación.
        </StyledText>
        <StyledText className='mb-4'>
          Observación: en algunos textos de Física y de Ingeniería la unidad imaginaria se designa como j𝑗 , para no confundir con la i𝑖 que suele indicar la intensidad de corriente eléctrica.
        </StyledText>
        <StyledText className='mb-4'>
          Dado que hemos definido un número complejo como un par ordenado de números reales, es natural interpretarlo como un punto del plano. En el eje de abscisas (eje real) ubicaremos los complejos de parte imaginaria nula. Y en el eje de ordenadas (eje imaginario) ubicaremos los imaginarios puros:
        </StyledText>
        <StyledText className='mb-4'>
          Podemos identificar de manera natural los complejos de parte imaginaria nula con los números reales:
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-3'
          source={{ uri: 'https://www.geogebra.org/resource/nfu2s8gh/t6brEKLZywgNAcLK/material-nfu2s8gh.png' }}
        />
        <StyledText className='mb-2 text-center mt-2 text-lg'>
          Ejercicios:
        </StyledText>
        <StyledVideo
          source='https://youtu.be/m3Oeu_fnnXk?si=DF0Cm0SMVKiDb21K'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/38DPFbTKUpQ?si=_YjDWRhFEwWyne6h'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/XV5buDdtUEU?si=xFHTGo1ckb9gBzOI'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
