import { useState } from 'react'
import { withExpoSnack } from 'nativewind'
import { Routes, Route, NativeRouter } from 'react-router-native'
import { SignIn } from './src/routes/SignIn'
import { Register } from './src/routes/Register'
import { Home } from './src/routes/Home'
import { Layout } from './src/layout/Layout'
import { Courses } from './src/routes/Courses'
import { Course } from './src/routes/Course'
import { Unit } from './src/routes/Unit'

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
        <Route path='/unit' element={<Layout><Unit /></Layout>} />
      </Routes>
    </NativeRouter>
  )
}
export default withExpoSnack(App)
