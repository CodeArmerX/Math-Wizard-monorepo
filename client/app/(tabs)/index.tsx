import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)


export default function HomeScreen() {

  return (
    < StyledView className="flex-1 items-center justify-center" >
      <StyledText className="text-red-500 justify-center">Try editing me! 🎉</StyledText>
    </StyledView >
  );
}
