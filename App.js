import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <View style={styles.appContainer}>
      <Header />
      <NoteInput onSave={setNotes} />
      <View style={styles.viewBorderBottom}></View>
      <NotesList notes={notes} />
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
