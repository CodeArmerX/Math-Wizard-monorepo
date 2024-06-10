import { withExpoSnack } from 'nativewind'
import { Landing } from './src/routes/landing'
import { Routes, Route, NativeRouter } from 'react-router-native'
import { Text } from 'react-native'

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Text>Sign In</Text>} />
        <Route path='/register' element={<Text>Register</Text>} />
      </Routes>
    </NativeRouter>
  )
}
export default withExpoSnack(App)
