import { useState } from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";

function NoteInput({ onSave }) {
  const [enteredText, setEnteredText] = useState("");

  const textCount = enteredText.length;

  function saveNoteHandler() {
    if (enteredText.trim() === "") return;

    onSave((prevNotes) => [
      ...prevNotes,
      {
        content: enteredText,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        timestamp: new Date().toISOString(),
      },
    ]);

    setEnteredText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Type a note..."
        placeholderTextColor="#64748B"
        multiline
        textAlignVertical="top"
        numberOfLines={8}
        maxLength={200}
        value={enteredText}
        onChangeText={setEnteredText}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.textInputCount}>{textCount}/200</Text>
        <Pressable style={styles.saveButton} onPress={saveNoteHandler}>
          <Text style={styles.saveButtonText}>Save Note</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default NoteInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputField: {
    backgroundColor: "#1E293B",
    color: "#F8FAFC",
    height: 120,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#334155",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 12,
  },
  textInputCount: {
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  saveButton: {
    backgroundColor: "#22C55E",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
});
