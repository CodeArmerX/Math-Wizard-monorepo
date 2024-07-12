import { ScrollView } from 'react-native'
import { StyledImage, StyledText, StyledView, StyledVideo } from '../../components/StyledComponents'

export const Geometria = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center items-center mt-10 pb-32 ml-5 mr-5'>
        <StyledText className='text-2xl ml-5 mr-5 mb-5 text-center'>
          Geometría Elemental
        </StyledText>
        <StyledImage
          className='w-80 h-48 mt-3 mb-5'
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/015/392/145/non_2x/hand-drawn-math-geometry-trigonometry-symbols-math-symbols-on-notebook-page-background-free-vector.jpg' }}
        />
        <StyledText className='text-xl mb-5'>
          ¿Que es la geometría?
        </StyledText>
        <StyledText className='mb-5'>
          La geometría es la rama de las matemáticas que se centra en el estudio de las propiedades de las líneas, planos, ángulos, formas y las distancias y relaciones entre ellos. Los ejemplos incluyen el cálculo de los ángulos de un triángulo, la longitud de una curva o la superficie de una esfera.
        </StyledText>
        <StyledText className='text-xl mb-5'>
          Teorema de Pitágoras
        </StyledText>
        <StyledText className='mb-5'>
          En matemáticas, el teorema de Pitágoras es una relación en geometría euclidiana entre los tres lados de un triángulo rectángulo. Afirma que el área del cuadrado cuyo lado es la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de las áreas de los cuadrados cuyos lados son los catetos (los otros dos lados que no son la hipotenusa).
        </StyledText>

        <StyledText className='text-xl mb-5'>
          Fórmula
        </StyledText>
        <StyledImage
          className='w-80 h-36 mt-3 mb-5'
          source={{ uri: 'https://humanidades.com/wp-content/uploads/2018/08/teorema-de-pitagoras-e1576373600844-800x400.jpg' }}
        />

        <StyledText className=' text-xl mb-5'>
          Teorema de thales
        </StyledText>
        <StyledText className='mb-5'>
          El teorema de Tales se considera el teorema fundamental de la semejanza de triángulos y establece lo siguiente: Toda recta paralela a un lado de un triángulo, forma con los otros dos lados o con sus prolongaciones otro triángulo que es semejante al triángulo dado.
        </StyledText>
        <StyledText className='mb-5'>
          El teorema de Tales está formado en realidad por dos teoremas. El primero sirve para construir un triángulo semejante a partir de un triángulo dado y el segundo permite la construcción de tangentes a partir de una circunferencia dada. Ambos teoremas tienen aplicación en la geometría descriptiva.
        </StyledText>

        <StyledText className=' text-xl mb-5'>
          Teorema de Euclides
        </StyledText>
        <StyledText className='mb-5'>
          El teorema de Euclides se interpreta geométricamente diciendo que: “El cuadrado construido sobre un cateto de un triángulo rectángulo, tiene igual área que el rectángulo cuyos lados son la hipotenusa del triángulo y la proyección del cateto sobre la hipotenusa”.
        </StyledText>
        <StyledText className='text-lg mb-5'>
          Postulados de Euclides
        </StyledText>
        <StyledText className='mb-5 self-start'>
          Dos puntos distintos cualquiera determinan un segmento de recta.
        </StyledText>
        <StyledText className='mb-5 self-start'>
          Un segmento de recta se puede extender indefinidamente en una línea recta.
        </StyledText>
        <StyledText className='mb-5 self-start'>
          Se puede trazar una circunferencia dados un centro y un radio cualquiera.
        </StyledText>
        <StyledText className='mb-5 self-start'>
          Todos los ángulos rectos son iguales entre sí.
        </StyledText>
        <StyledText className='mb-5 self-start'>
          Postulado de las paralelas.
        </StyledText>

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/Ev4zMeZGwgU?si=SIWI7MYLYaSDbD27'
          imageSource='https://definicion.de/wp-content/uploads/2009/02/geometria-1.jpg'
        />
        <StyledVideo
          source='https://youtu.be/-MplVMcxOEY?si=HcmGYEiFsfPDmbuM'
          imageSource='https://definicion.de/wp-content/uploads/2009/02/geometria-1.jpg'
        />
        <StyledVideo
          source='https://youtu.be/4d3L9GrLGJ4?si=K2uMmw5uYmnQwWT9'
          imageSource='https://definicion.de/wp-content/uploads/2009/02/geometria-1.jpg'
        />
      </StyledView>
    </ScrollView>
  )
}
