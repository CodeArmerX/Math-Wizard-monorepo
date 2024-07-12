import { useState } from 'react'
import { withExpoSnack } from 'nativewind'
import { Routes, Route, NativeRouter } from 'react-router-native'
import { SignIn } from './src/routes/SignIn'
import { Register } from './src/routes/Register'
import { Home } from './src/routes/Home'
import { Layout } from './src/layout/Layout'
import { Courses } from './src/screens/Courses'
import { Course } from './src/routes/Course'
import { ThirdYear } from './src/screens/3/Third'
import { Radicacion } from './src/screens/3/Radicacion'
import { Orden } from './src/screens/3/Orden'
import { FourthYear } from './src/screens/4/4'
import { FifthYear } from './src/screens/5/5'
import { Plano } from './src/screens/3/Plano'
import { Sistemas } from './src/screens/3/Sistemas'
import { Funcion } from './src/screens/3/Funcion'
import { Geometria } from './src/screens/3/Geometria'
import { Estadistica } from './src/screens/3/Estadistica'
import { Reales } from './src/screens/4/Reales'
import { Log } from './src/screens/4/Log'
import { Razones } from './src/screens/4/Razones'
import { Circunferencia2 } from './src/screens/4/Circunferencia2'
import { Trigonometricas } from './src/screens/4/Trigonometricas'
import { Progresiones2 } from './src/screens/4/Progresiones2'
import { Derivadas } from './src/screens/5/Derivadas'
import { Limite } from './src/screens/5/LimiteDeFuncion'
import { Conicas } from './src/screens/5/Conicas'
import { Inecuaciones } from './src/screens/5/Inecuaciones'
import { Polinomios } from './src/screens/5/Polinomios'
import { Multivariable } from './src/screens/5/Multivariable'
import { Complejos } from './src/screens/4/Complejos'
import { Settings } from './src/routes/Settings'

const App = () => {
  const [courseId, setCourseId] = useState('')
  return (
    <NativeRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout><Home /></Layout>}
        />
        <Route path='/signin' element={<Layout><SignIn /></Layout>} />
        <Route path='/register' element={<Layout><Register /></Layout>} />
        <Route
          path='/courses'
          element={
            <Layout>
              <Courses
                setCourseId={setCourseId}
              />
            </Layout>
          }
        />
        <Route
          path='/course'
          element={<Layout><Course courseId={courseId} /></Layout>}
        />
        <Route path='/courses/third' element={<Layout><ThirdYear /></Layout>} />
        <Route path='/courses/fourth' element={<Layout><FourthYear /></Layout>} />
        <Route path='/courses/fifth' element={<Layout><FifthYear /></Layout>} />
        <Route path='/courses/third/radicacion' element={<Layout><Radicacion /></Layout>} />
        <Route path='/courses/third/orden' element={<Layout><Orden /></Layout>} />
        <Route
          path='/courses/third/plano'
          element={<Layout><Plano /></Layout>}
        />
        <Route
          path='/courses/third/sistemas'
          element={<Layout><Sistemas /></Layout>}
        />
        <Route
          path='/courses/third/funcion'
          element={<Layout><Funcion /></Layout>}
        />
        <Route
          path='/courses/third/geometria'
          element={<Layout><Geometria /></Layout>}
        />
        <Route
          path='/courses/third/estadistica'
          element={<Layout><Estadistica /></Layout>}
        />
        <Route
          path='/courses/third/reales'
          element={<Layout><Reales /></Layout>}
        />
        <Route
          path='/courses/third/logaritmicas'
          element={<Layout><Log /></Layout>}
        />
        <Route
          path='/courses/third/razones'
          element={<Layout><Razones /></Layout>}
        />
        <Route
          path='/courses/third/circunferencia'
          element={<Layout><Circunferencia2 /></Layout>}
        />
        <Route
          path='/courses/third/trigonometricas'
          element={<Layout><Trigonometricas /></Layout>}
        />
        <Route
          path='/courses/third/complejos'
          element={<Layout><Complejos /></Layout>}
        />
        <Route
          path='/courses/third/progresiones'
          element={<Layout><Progresiones2 /></Layout>}
        />
        <Route
          path='/courses/third/multivariable'
          element={<Layout><Multivariable /></Layout>}
        />
        <Route
          path='/courses/third/polinomios'
          element={<Layout><Polinomios /></Layout>}
        />
        <Route
          path='/courses/third/inecuaciones'
          element={<Layout><Inecuaciones /></Layout>}
        />
        <Route
          path='/courses/third/conicas'
          element={<Layout><Conicas /></Layout>}
        />
        <Route
          path='/courses/third/limite'
          element={<Layout><Limite /></Layout>}
        />
        <Route
          path='/courses/third/Derivadas'
          element={<Layout><Derivadas /></Layout>}
        />
        <Route
          path='/settings'
          element={<Layout><Settings /></Layout>}
        />

      </Routes>
    </NativeRouter>
  )
}
export default withExpoSnack(App)
