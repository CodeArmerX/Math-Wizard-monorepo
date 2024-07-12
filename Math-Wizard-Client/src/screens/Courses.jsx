import { ScrollView } from 'react-native'
import { StyledLink, StyledView, StyledText, StyledImage } from '../components/StyledComponents'
import { course3, course4, course5 } from '../utils/data'

export function Courses () {
  return (
    <ScrollView>
      <StyledView className='flex-1 pb-32'>
        <StyledText className='text-3xl text-center mt-10 font-bold text-violet-800'>My Courses</StyledText>
        <StyledView>
          <Course
            title={course3.title}
            front={course3.front}
            to='third'
          />
          <Course
            title={course4.title}
            front={course4.front}
            to='fourth'
          />
          <Course
            title={course5.title}
            front={course5.front}
            to='fifth'
          />

        </StyledView>
      </StyledView>
    </ScrollView>
  )
}
function Course ({
  title,
  front,
  to,
  id,
  setCourseId
}) {
  return (
    <StyledLink
      to={to}
    >
      <StyledView
        className='p-2 pt-3 mt-3 items-center'
      >
        <StyledView className='w-20 absolute z-10 mt-5 rounded shadow bg-purple-900'>
          <StyledText className='text-center text-purple-100'>Basic</StyledText>
        </StyledView>
        <StyledView
          className='border-violet-600 border-2 rounded p-2 pt-3 mt-3 items-center'
        >
          <StyledImage source={{ uri: front }} className='w-32 h-32 rounded' />
        </StyledView>
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-xl mt-1 text-center text-violet-800'>{title}</StyledText>
        </StyledView>
      </StyledView>
    </StyledLink>
  )
}
