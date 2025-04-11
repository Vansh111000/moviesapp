import { Stack } from "expo-router";
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#151312');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}