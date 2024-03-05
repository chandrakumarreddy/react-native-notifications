import {
  sendPushNotification,
  usePushNotifications,
} from "@/hooks/usePushNotifications";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Page() {
  const { expoPushToken } = usePushNotifications();

  return (
    <>
      <View className="flex flex-1">
        <Button
          title="Press to Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken!);
          }}
        />
      </View>
    </>
  );
}
