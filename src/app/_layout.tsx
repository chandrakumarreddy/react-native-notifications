import { useSafeAreaInsets } from "react-native-safe-area-context";
import "../global.css";
import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { usePushNotifications } from "@/hooks/usePushNotifications";

export default function RootLayout() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <View
        className="flex-1"
        style={{ paddingTop: top, paddingBottom: bottom }}
      >
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </>
  );
}
