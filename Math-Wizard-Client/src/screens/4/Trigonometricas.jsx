import { ScrollView } from 'react-native'
import { StyledText, StyledView, StyledVideo, StyledImage } from '../../components/StyledComponents'

export const Trigonometricas = () => {
  return (
    <ScrollView>
      <StyledView className='flex-1 justify-center mt-10 pb-32 ml-8 mr-8'>
        <StyledText className='text-3xl text-center mb-2'>Funciones trigonométricas</StyledText>
        <StyledImage
          className='w-80 h-52 mt-3 mb-3'
          source={{ uri: 'https://i.pinimg.com/564x/23/1c/34/231c3482d772bd560052e6f0e03c8161.jpg' }}
        />
        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Funciones trigonométricas
        </StyledText>
        <StyledText className='mb-5'>
          Las funciones trigonométricas son las funciones cuyo argumento, o variable independiente, es un ángulo. Estas usualmente incluyen términos que describen la medición de ángulos y triángulos, tal como seno, coseno, tangente, cotangente, secante y cosecante.
        </StyledText>
        <StyledText className='mb-5'>
          Los ángulos en las funciones trigonométricas se expresan como radianes. Los radianes son otra manera de medir la apertura de un ángulo, así como lo son los grados, que están en función del radio de una circunferencia.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Definición de las funciones trigonométricas en el triángulo rectángulo
        </StyledText>
        <StyledImage
          className='w-80 h-60 mt-3 mb-3'
          source={{ uri: 'https://cdn.todamateria.com/imagenes/funciones-triginometricascateto2-0-cke.jpg' }}
        />
        <StyledText className='mb-5'>
          El triángulo rectángulo es la base de las funciones trigonométricas.
        </StyledText>
        <StyledText className='mb-5'>
          Un triángulo rectángulo es un polígono de tres lados, con un ángulo recto (igual a 90º). Los lados que delimitan el ángulo recto se llaman catetos, y el lado opuesto de mayor longitud es la hipotenusa.
        </StyledText>
        <StyledText className='mb-5'>
          Las funciones o razones trigonométricas son las relaciones entre los catetos y la hipotenusa en un triángulo rectángulo con respecto a uno de los ángulos agudos. Tenemos entonces que para cualquier ángulo agudo del triángulo rectángulo:
        </StyledText>
        <StyledText className='mb-5'>
          • el seno del ángulo (se abrevia sen) es la razón o la división de la longitud del cateto opuesto (CO) entre la longitud de la hipotenusa (H);
        </StyledText>
        <StyledText className='mb-5'>
          • el coseno del ángulo (se abrevia cos) es la razón entre la longitud del cateto adyacente (CA) entre la longitud de la hipotenusa (H),
        </StyledText>
        <StyledText className='mb-5'>
          • la tangente del ángulo (se abrevia tan) es la razón entre la longitud del CO entre el CA, esto es igual a la división del seno entre el coseno,
        </StyledText>
        <StyledText className='mb-5'>
          • la cotangente del ángulo (se abrevia cot) es la razón entre el CA y el CO,
        </StyledText>
        <StyledText className='mb-5'>
          • la secante del ángulo (se abrevia sec) es la razón entre la hipotenusa y el CA, y
        </StyledText>
        <StyledText className='mb-5'>
          • la cosecante del ángulo (se abrevia csc) es la razón entre la hipotenusa y el CO.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Funciones trigonométricas en el círculo trigonométrico
        </StyledText>
        <StyledText className='mb-5'>
          El círculo trigonométrico es aquel cuyo radio vale la unidad. Al trazar dos ejes perpendiculares entre sí que pasan por el origen del círculo, tendremos un sistema de ejes coordenados XY. Para calcular las diferentes funciones trigonométricas, nos valdremos de estos ejes.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Función trigonométrica seno
        </StyledText>
        <StyledImage
          className='w-80 h-60 mt-3 mb-3'
          source={{ uri: 'https://cdn.todamateria.com/imagenes/funcionseno-2-cke.jpg' }}
        />
        <StyledText className='mb-5'>
          El seno de un ángulo en el círculo trigonométrico es igual a su medida en el eje de las ordenadas.
        </StyledText>
        <StyledText className='mb-5'>
          En un ángulo interno en el círculo trigonométrico cuyos segmentos son igual al radio 1, el seno será la proyección del segmento móvil sobre el eje de las ordenadas Y. Imaginemos una linterna iluminando este segmento móvil dentro del círculo. La sombra que proyecta el segmento sobre el eje Y será el valor del seno.
        </StyledText>
        <StyledText className='mb-5'>
          Cuando se grafica el seno a medida que el segmento se abre, el seno crece hasta ser igual a 1, cuando el ángulo es igual a 90º o 1/2π. Desde los 90º a los 180º el seno se reduce pero sigue siendo positivo. Por encima de los 180º el seno toma valores negativos hasta llegar a los 360º. Los valores del seno se hallan entre 1 y -1.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Función trigonométrica coseno
        </StyledText>
        <StyledImage
          className='w-80 h-60 mt-3 mb-3'
          source={{ uri: 'https://cdn.todamateria.com/imagenes/funcion-coseno-cke.jpg' }}
        />
        <StyledText className='mb-5'>
          El coseno de un ángulo en el círculo trigonométrico es igual a su medida en el eje de las abscisas.
        </StyledText>
        <StyledText className='mb-5'>
          En un ángulo interno en el círculo trigonométrico cuyos segmentos son igual al radio 1, el coseno será la proyección del segmento móvil sobre el eje de las abscisas X. Imaginemos una linterna iluminando este segmento móvil dentro del círculo. La sombra que proyecta el segmento sobre el eje X será el valor del coseno.
        </StyledText>
        <StyledText className='mb-5'>
          Cuando se grafica el coseno a medida que el segmento se abre, el coseno se reduce hasta ser igual a 0 cuando el ángulo es igual a 90º o 1/2π. Desde los 90º a los 270º el coseno toma valores negativos. Por encima de los 270º el coseno vuelve a tomar valores positivos hasta llegar a 1 en los 360º. Los valores del coseno se hallan entre 1 y -1.
        </StyledText>
        <StyledImage
          className='w-80 h-32 mt-3 mb-3'
          source={{ uri: 'https://cdn.todamateria.com/imagenes/sine-cosine-function001-svg-cke.jpg' }}
        />
        <StyledText className='mb-5'>
          Comparación de los gráficos de seno y coseno entre 0 y 360º.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Función trigonométrica tangente
        </StyledText>
        <StyledImage
          className='w-80 h-60 mt-3 mb-3'
          source={{ uri: 'https://cdn.todamateria.com/imagenes/funciones-triginometricastangente-cke.jpg' }}
        />
        <StyledText className='mb-5'>
          La tangente es la relación entre el seno y el coseno.
        </StyledText>
        <StyledText className='mb-5'>
          En un ángulo interno en el círculo trigonométrico cuyos segmentos son igual al radio 1, la tangente será la extensión del segmento móvil sobre el eje de las ordenadas Y. Imaginemos una pared pegada del círculo y el segmento móvil se estira hasta tocar la pared. La distancia desde la base de la pared hasta donde el segmento toca la misma será el valor de la tangente.
        </StyledText>
        <StyledText className='mb-5'>
          Cuando se grafica la tangente a medida que el segmento se abre, esta crece hasta valores en el infinito ∞ cuando el ángulo es igual a 90º o 1/2π. Desde los 90º a los 180º toma valores negativos. Por encima de los 180º la tangente vuelve a tomar valores positivos hasta 270º. A partir de 270º vuelve a tomar valores negativos hasta llegar a 0 en los 360º. Los valores la tangente se hallan entre ∞ y -∞.
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Funciones trigonométricas recíprocas
        </StyledText>
        <StyledText className='mb-5'>
          Si, por ejemplo, una razón es a/b, entonces, el recíproco es b/a, de esta manera, las funciones trigonométricas poseen funciones recíprocas en el mismo ángulo. Estas son:
        </StyledText>
        <StyledText className='mb-5'>
          Función trigonométrica    : Función recíproca
        </StyledText>
        <StyledText className='mb-5'>
          Seno                      : Cosecante
        </StyledText>
        <StyledText className='mb-5'>
          Coseno                    : Secante
        </StyledText>
        <StyledText className='mb-5'>
          Tangente                  : Cotangente
        </StyledText>

        <StyledText className='mt-2 text-center mb-4 text-xl'>
          Características de las funciones trigonométricas
        </StyledText>
        <StyledText className='mb-5'>
          Cuando vemos un gráfico de una función donde se repiten las formas decimos que son periódicas. Las funciones trigonométricas son periódicas. La periodicidad puede verse en un electrocardiograma.
        </StyledText>
        <StyledText className='mb-5'>
          "Las funciones trigonométricas de un ángulo son iguales, en valor absoluto y en signo, a las cofunciones del ángulo complementario por defecto."
        </StyledText>
        <StyledText className='mb-5'>
          Por ejemplo:
        </StyledText>
        <StyledImage
          className='w-80 h-8 mt-3 mb-3'
          source={{ uri: 'data:image/png;base64,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Lm9yZy8xOTk4L01hdGgvTWF0aE1MIiBzdHlsZT0iZm9udC1mYW1pbHk6VmVyZGFuYSI+PG1pIG1hdGh2YXJpYW50PSJib2xkIj5zZW48L21pPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QTA7PC9tbz48bW4gbWF0aHZhcmlhbnQ9ImJvbGQiPjYwPC9tbj48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEIwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj49PC9tbz48bWkgbWF0aHZhcmlhbnQ9ImJvbGQiPmNvczwvbWk+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hBMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+KDwvbW8+PG1uIG1hdGh2YXJpYW50PSJib2xkIj45MDwvbW4+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hCMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+LTwvbW8+PG1uIG1hdGh2YXJpYW50PSJib2xkIj42MDwvbW4+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hCMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+KTwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj49PC9tbz48bWkgbWF0aHZhcmlhbnQ9ImJvbGQiPmNvczwvbWk+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hBMDs8L21vPjxtbiBtYXRodmFyaWFudD0iYm9sZCI+MzA8L21uPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QjA7PC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPj08L21vPjxtZnJhYz48bXNxcnQ+PG1uIG1hdGh2YXJpYW50PSJib2xkIj4zPC9tbj48L21zcXJ0PjxtbiBtYXRodmFyaWFudD0iYm9sZCI+MjwvbW4+PC9tZnJhYz48L21hdGg+/333ewAAAABJRU5ErkJggg==' }}
        />
        <StyledText className='mb-5'>
          Observa que 60° y 30° son ángulos complementarios, y seno y coseno son cofunciones.
        </StyledText>
        <StyledImage
          className='w-80 h-4 mt-3 mb-3'
          source={{ uri: 'data:image/png;base64,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' }}
        />
        <StyledText className='mb-5'>
          En este caso 70° y 20° son ángulos complementarios, y tangente y cotangente son cofunciones.
        </StyledText>
        <StyledText className='mb-5'>
          "Las funciones trigonométricas de un ángulo son iguales en valor absoluto a las funciones del ángulo complementario ( osea que suma 360°), pero de signo contrario excepto el coseno y la secante que son del mismo signo".
        </StyledText>
        <StyledText className='mb-5'>
          Por ejemplo:
        </StyledText>
        <StyledImage
          className='w-80 h-3 mt-3 mb-3'
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAAAQCAYAAAAlKtV+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAABJ9JREFUeNrtXGFkVVEcvyYzSWSSJCMzMzNjZibpSx+SZCIzkySSpA8ZycxMHpNJHzL2KZn0JZNM4slMZiJJH/LEzGQyow/vwzzP43X+7XfacZ373rnvnvfu/953/vy03f3vuef8f//zv//zP+fmeU6chJPDAmWBP84ULOQe+Bh2pnDSLHJeYAOOTzjrTPLfFo4nPmOcxrUu554uxtRbBgUWBH4KFIG8QFZgQqDVp09OOSXwrUrwKFdBUBCaYRiQGi0TsEF/BJ5ILgt8FNgTKAis4Jpf2gQyAltodwu/tyWIp1cG/mXDF8vOP1PJK9vMLAhLBvo2A/N0kzv+EYw/G5GnB4a29xC8dXrZhPB0EX3JW57AujH249pDFzNTxSs7+SRwW6BToEXJoG6h80WfPmXKk8icTQKziVwQ+KHcc66JnTGolhmGp15c2xG4JnAI91Cbb33tjkKX7N+Na90KH+PMeaJa/Cb6c9dgUtrwRd28cJJgXtsFnqLWUQC5tDSdFxjwNXRC4DkmVwFvjdfK5PF3jh68DL0iBjUdIWuTE/6LQbYdNTDHJRz5CGO3IJ4WcG3MoI030L2iKYOU8XfOMod+rlewn21fzKRkVcc5HjWU16xh6k1G2A7QySMjMk3nTY2hu5feMB0RA/MuiNlDtp2BQ9Qiuwbj3U44H9XGYMLThvIsWZPOo9zRF2BTf426zeN/KkSWFUoCPQYT2JYvjoYMCLb91pZwjUcN57WEhuTDWvDzHYE1RW8eelPKA2jiXMf1ZU3nNpGet2Dp+gTXtyIE5jKWwlECsw6/Bc4wmNgc+SCdXxF5KlbQI+cd0uh6CVuyk12/o48zVXzSti9eSknGzNH/Y+E1p0yOZSwFJjRZ6U6Vh+5pOjegGaB864R1eDoBIDeEPtcYmNdQE+1Q2h1GrZTuecfAMTnyUS0wm/Akg+0ish2Z9Szi+moMgdl21jiJe3KY+JV80rYvcgrMUezK0f9j4ZU6+1UzMOrsDcOMx9/BetV5j2mMbqP94wbtNmpyc+Qj7Bh0PMldbP9xt1ZNsN0N0OVeyih4+s25MD5Zqy+mpZTB0f/j5PXfZKKjICMCsxpi5BvqdIgShO3AfLROgbk9QmCul3DiI6xNdTwtVQm2qq7c/Bvx6V71eG/+lQ1RD1987KXrSCdH/28or6t4E6kDPI9GCpqaDi1Tu5U0nYrsdHRk3aIhKO2/6Vu+UJ3pvdKHWkhYR197vYPjXfTziqYuFZdw5EMelxuKwNO4ppRxUillqEfmxryDDcQepV3dcbmkBmbbvpiW43Ic/T8WXis9aNmXim82cOkcBFrG9oU0nIkevYG7mE/uuPio5QMTHU8fKuj6bR+0O59NYLAJu0kU1hfliYFHKQjMHP0/Fl6ppiM/qy3hrUuZyRwmpH95kcHfi9DP4f5Bi4agYvlLb38XU/aJdkXpfOOpGt5oUobQ1xzaLWHcz5C9cRCOfJDIT7IHIvBE9eRpTCjSp7rzC2//AxVPU+KYxfK1iH91n2QnNTDb9MU0fZLN1f/j4NWJk6YLAGkR+SlvpzOFEyfNKe6//eQl9z197d9JguUvcVyGL2lv4zsAAAN4dEVYdE1hdGhNTAA8bWF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCIgc3R5bGU9ImZvbnQtZmFtaWx5OlZlcmRhbmEiPjxtaSBtYXRodmFyaWFudD0iYm9sZCI+c2VuPC9taT48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEEwOzwvbW8+PG1uIG1hdGh2YXJpYW50PSJib2xkIj4zMTU8L21uPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QjA7PC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPj08L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QTA7PC9tbz48bWkgbWF0aHZhcmlhbnQ9ImJvbGQiPnNlbjwvbWk+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hBMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+KDwvbW8+PG1uIG1hdGh2YXJpYW50PSJib2xkIj4zNjA8L21uPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QjA7PC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEEwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4tPC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEEwOzwvbW8+PG1uIG1hdGh2YXJpYW50PSJib2xkIj40NTwvbW4+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hCMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+KTwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hBMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+PTwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4mI3hBMDs8L21vPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+LTwvbW8+PG1pIG1hdGh2YXJpYW50PSJib2xkIj5zZW48L21pPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QTA7PC9tbz48bW4gbWF0aHZhcmlhbnQ9ImJvbGQiPjQ1PC9tbj48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEIwOzwvbW8+PC9tYXRoPlbHxfUAAAAASUVORK5CYII=' }}
        />
        <StyledImage
          className='w-80 h-6 mt-3 mb-3'
          source={{ uri: 'data:image/png;base64,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Ym9sZCI+MzYwPC9tbj48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEIwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4tPC9tbz48bW4gbWF0aHZhcmlhbnQ9ImJvbGQiPjYwPC9tbj48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEIwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj4pPC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEEwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj49PC9tbz48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEEwOzwvbW8+PG1pIG1hdGh2YXJpYW50PSJib2xkIj5jb3M8L21pPjxtbyBtYXRodmFyaWFudD0iYm9sZCI+JiN4QTA7PC9tbz48bW4gbWF0aHZhcmlhbnQ9ImJvbGQiPjYwPC9tbj48bW8gbWF0aHZhcmlhbnQ9ImJvbGQiPiYjeEIwOzwvbW8+PG1vIG1hdGh2YXJpYW50PSJib2xkIj49PC9tbz48bWZyYWM+PG1uIG1hdGh2YXJpYW50PSJib2xkIj4xPC9tbj48bW4gbWF0aHZhcmlhbnQ9ImJvbGQiPjI8L21uPjwvbWZyYWM+PC9tYXRoPs710CkAAAAASUVORK5CYII=' }}
        />

        <StyledText className='mt-5'>
          Ejercicios.
        </StyledText>
        <StyledVideo
          source='https://youtu.be/EiiXAh8_3oo?si=K3agTz1Npyyl0lwp'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/8q0OmFo4k_0?si=TK9g1Px5bj_KLZ_S'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
        <StyledVideo
          source='https://youtu.be/-dTmMasNwRs?si=L91W-BjB2S2gBBVV'
          imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg1nGzuaN4iyNvrdw6jijhHsb9du-xmoZMQ&s'
        />
      </StyledView>
    </ScrollView>
  )
}
