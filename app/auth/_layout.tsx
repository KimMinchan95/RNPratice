import { router, Stack } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import CustomPressable from '@/components/CustomPressable';
import { colors } from '@/constants/index';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: '로그인',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <CustomPressable onPress={() => router.replace('/')}>
              <Foundation name="home" size={28} color={'black'} />
            </CustomPressable>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: '이메일 로그인',
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: '회원가입',
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </Stack>
  );
}
