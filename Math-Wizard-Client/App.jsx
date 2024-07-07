import { useState } from 'react'
import { withExpoSnack } from 'nativewind'
import { Routes, Route, NativeRouter } from 'react-router-native'
import { SignIn } from './src/routes/SignIn'
import { Register } from './src/routes/Register'
import { Home } from './src/routes/Home'
import { Layout } from './src/layout/Layout'
import { Courses } from './src/screens/Courses'
import { Course } from './src/routes/Course'
import { Unit } from './src/routes/Unit'
import { ThirdYear } from './src/screens/3/Third'
import { Radicacion } from './src/screens/3/Radicacion'
import { Orden } from './src/screens/3/Orden'
import { NotFound } from './src/screens/NotFound'
import { FourthYear } from './src/screens/4/4'
import { FifthYear } from './src/screens/5/5'
import { Plano } from './src/screens/3/Plano'

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
        <Route
          path='/unit'
          element={<Layout><Unit /></Layout>}
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
          element={<Layout><NotFound title='Sistemas Lineales' /></Layout>}
        />

        <Route
          path='/courses/third/funcion'
          element={<Layout><NotFound title='Funcion Cuadrática' /></Layout>}
        />

      </Routes>
    </NativeRouter>
  )
}
export default withExpoSnack(App)
