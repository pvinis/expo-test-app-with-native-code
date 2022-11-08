import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { NativeModules, Button, StyleSheet, Text, View } from "react-native";

const { MAYCalendarModule } = NativeModules;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to asaaaaastart working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="print"
        onPress={() => MAYCalendarModule.createCalendarEvent("yep")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
