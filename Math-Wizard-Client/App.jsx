import { Routes, Route, NativeRouter } from 'react-router-native'
import { withExpoSnack } from 'nativewind'
import { SignIn } from './src/routes/SignIn'
import { Register } from './src/routes/Register'
import { Home } from './src/routes/Home'
import { Layout } from './src/layout/Layout'

const App = () => {
  return (

    <NativeRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/signin' element={<Layout><SignIn /></Layout>} />
        <Route path='/register' element={<Layout><Register /></Layout>} />
      </Routes>
    </NativeRouter>
  )
}
export default withExpoSnack(App)
