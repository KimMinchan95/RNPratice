import { router, Stack } from 'expo-router';
import CustomPressable from '@/components/CustomPressable';
import { colors } from '@/constants/index';
import { Feather } from '@expo/vector-icons';

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          title: '글쓰기',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <CustomPressable onPress={() => router.replace('/')}>
              <Feather name="arrow-left" size={28} color={'black'} />
            </CustomPressable>
          ),
        }}
      />
    </Stack>
  );
}
