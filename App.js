import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NoNote from "./components/NoNote";

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <View style={styles.appContainer}>
      <Header />
      <NoteInput onSave={setNotes} />
      <View style={styles.viewBorderBottom}></View>
      {notes.length === 0 ? (
        <NoNote />
      ) : (
        <NotesList notes={notes} onDelete={setNotes} />
      )}
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
