import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyledInput, StyledText, StyledView } from '../components/StyledComponents'

export function SignIn () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  // const [values, setValues] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })
  const handleSubmit = () => {
    setIsDisabled(!isDisabled)
  }
  const disableStyles = 'bg-violet-300 border-violet-600 border-[2px] py-3 rounded mt-8'
  return (
    <StyledView className='flex-1 justify-center mt-32'>
      <StyledView className='flex-1 mt- mx-10'>
        <StyledText className='text-xl text-center text-violet-600'>
          Welcome back to
        </StyledText>
        <StyledText className='text-3xl font-bold text-center text-violet-800'>
          Math Wizard!
        </StyledText>
        <StyledText className='text-lg text-violet-600 ml-2 mt-8'>
          Username
        </StyledText>
        <StyledInput
          value={username}
          onChangeText={setUsername}
          placeholder='Please enter your username...'
          placeholderTextColor='#7c3aed'
          className='bg-violet-200 border-violet-600 border-[2px] w-80 h-12 p-2 rounded'
        />
        <StyledText className='text-lg text-violet-600 ml-2 mt-4'>
          Password
        </StyledText>
        <StyledInput
          value={password}
          onChangeText={setPassword}
          placeholder='Enter your secret pasword shh...'
          placeholderTextColor='#7c3aed'
          className='bg-violet-200 border-violet-600 border-[2px] w-80 h-12 p-2 rounded'
        />
        <TouchableOpacity
          disabled={isDisabled}
          onPress={handleSubmit}
        >
          <StyledView
            className={disableStyles + (isDisabled ? ' opacity-50' : '')}
          >
            <StyledText
              className='text-xl text-violet-600 text-center'
            >
              {isDisabled ? 'Loading...' : 'Login'}
            </StyledText>
          </StyledView>
        </TouchableOpacity>
        {/* <StyledText>Values:
          {JSON.stringify(values)}
        </StyledText> */}
      </StyledView>
    </StyledView>
  )
}
