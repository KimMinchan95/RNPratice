import { ReactNode } from 'react';
import { Pressable, PressableProps, Platform } from 'react-native';

interface CustomPressableProps extends PressableProps {
  children: ReactNode;
}

export default function CustomPressable({
  children,
  ...props
}: CustomPressableProps) {
  const pressHandlerProps =
    Platform.OS === 'android'
      ? { onPressIn: props.onPress || props.onPressIn }
      : { onPress: props.onPress };

  return (
    <Pressable {...props} {...pressHandlerProps}>
      {children}
    </Pressable>
  );
}
