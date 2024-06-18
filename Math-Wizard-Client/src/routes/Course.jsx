// import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { StyledText, StyledImage, StyledLink, StyledView } from '../components/StyledComponents'
// import { fetchData } from '../services/useData'
import { courses } from '../utils/data'
export function Course ({ courseId }) {
  const course = courses.find(course => course.id === courseId)
  return (
    <ScrollView>
      <StyledView className='flex-1'>
        <StyledView className='flex-1 pb-36'>
          <StyledText className='text-3xl text-center mt-10'>{course.title}</StyledText>
          {course.units.map(unit => <Unit key={unit.title} {...unit} />)}
        </StyledView>
      </StyledView>
    </ScrollView>
  )
}

function Unit ({
  title,
  front
}) {
  return (
    <StyledLink
      to='/unit'
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
