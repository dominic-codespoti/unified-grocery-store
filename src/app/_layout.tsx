import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font';
import React from 'react';
import { config } from 'utils';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout (): JSX.Element | null {
  const colorScheme = useColorScheme();
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  });

  React.useEffect(() => {
    if (interLoaded || interError != null) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [interLoaded, interError]);

  if (!interLoaded && interError == null) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
