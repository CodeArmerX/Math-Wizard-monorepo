import { StyledLink, StyledView, StyledText, StyledImage } from '../components/StyledComponents'
import { courses } from '../utils/data'

export function Courses ({ setCourseId }) {
  return (
    <StyledView className='flex-1'>
      <StyledView className='flex-1 mt-8'>
        <StyledText className='text-2xl text-center mt-10'>My Courses</StyledText>
        <StyledView>
          {courses.map(course => <Course
            setCourseId={setCourseId}
            key={course.id} {...course}
                                 />
          )}
        </StyledView>
      </StyledView>
    </StyledView>
  )
}
function Course ({
  title,
  front,
  id,
  setCourseId
}) {
  return (
    <StyledLink
      to='/course'
      onPress={() => setCourseId(id)}
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
