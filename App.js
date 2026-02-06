import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <NoteInput />
      <View style={styles.viewBorderBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  viewBorderBottom: {
    borderWidth: 1,
    borderBottomColor: "#334155",
  },
});
