import { Linking } from 'react-native'
import {
  StyledView,
  StyledText,
  StyledImage,
  StyledLink
} from '../components/StyledComponents'
import { courses } from '../utils/data'

const unit = courses[0].units[0]

export function Unit () {
  return (
    <StyledView className='flex-1 justify-center items-center mt-16'>
      <StyledText className='text-3xl'>{unit.title}</StyledText>
      <UnitContent />
    </StyledView>
  )
}

function UnitContent () {
  return (
    <StyledView>
      {unit.content.map((component, index) => {
        switch (component.type) {
          case 'text':
            if (component.content.length < 32) {
              return (
                <StyledText
                  key={index}
                  className='text-xl text-center'
                >{component.content}
                </StyledText>
              )
            }
            return (
              <StyledText
                key={index}
                className='text-base ml-5 mt-3 mb-3 text-justify mr-5 overflow-ellipsis'
              >{component.content}
              </StyledText>
            )
          case 'image':
            return (
              <StyledView
                className='flex-1 items-center'
                key={index}
              >
                <StyledImage
                  className='w-80 h-48'
                  source={{ uri: component.source }}
                />
              </StyledView>
            )
          case 'link':
            return (
              <StyledText className='text-xl'>This is a link asasdajkfldsjl</StyledText>
            )
          default:
            return <StyledText key={index}>{component.content}</StyledText>
        }
      })}
    </StyledView>
  )
}
