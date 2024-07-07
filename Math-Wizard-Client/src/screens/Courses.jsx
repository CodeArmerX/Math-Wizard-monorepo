import { StyledLink, StyledView, StyledText, StyledImage } from '../components/StyledComponents'
import { course3, course4, course5 } from '../utils/data'

export function Courses ({ setCourseId }) {
  return (
    <StyledView className='flex-1'>
      <StyledView className='flex-1 mt-8'>
        <StyledText className='text-2xl text-center mt-10'>My Courses</StyledText>
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
    </StyledView>
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
        <StyledView>
          <StyledImage source={{ uri: front }} className='w-32 h-32 rounded' />
        </StyledView>
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-xl mt-1 text-center'>{title}</StyledText>
        </StyledView>
      </StyledView>
    </StyledLink>
  )
}
