import { StyledImage, StyledLink, StyledView } from './StyledComponents'

export function Navigation () {
  return (
    <StyledView
      className='flex-row items-center justify-center sticky top-[725px] z-50'
    >
      <NavigationButton
        source='https://img.icons8.com/ios-glyphs/90/read.png'
        className='h-8 w-8'
        to='/courses'
      />
      <NavigationButton
        source='https://img.icons8.com/ios/250/gunter.png'
      />
      <NavigationButton
        source='https://img.icons8.com/material-outlined/96/settings--v3.png'
        to='/settings'
        className='h-8 w-8'
      />

    </StyledView>
  )
}

function NavigationButton ({ source, to = '/', ...props }) {
  return (
    <StyledLink
      className='h-20 text-center bg-violet-200 border-t-2 border-violet-600 items-center justify-center w-1/3'
      to={to}
    >
      <StyledImage
        className='w-12 h-12'
        source={{ uri: source }}
        {...props}
      />
    </StyledLink>
  )
}
