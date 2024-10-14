import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
        <Stack.Screen name="explore/index" options={{ headerShown: false }} />
        <Stack.Screen name="play/index" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
