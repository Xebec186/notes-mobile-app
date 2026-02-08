import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function NotesList({ notes, onDelete }) {
  function formatDate(isoString) {
    return new Date(isoString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function deleteNoteHandler(id) {
    onDelete((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Notes</Text>
      <FlatList
        alwaysBounceVertical={false}
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <View style={{ gap: 5 }}>
              <Text style={styles.noteText}>{item.content}</Text>
              <Text style={styles.timestampText}>
                {formatDate(item.timestamp)}
              </Text>
            </View>
            <Pressable onPress={() => deleteNoteHandler(item.id)}>
              <MaterialIcons name="delete" size={24} color="#CBD5E1" />
            </Pressable>
          </View>
        )}
        style={styles.noteListContainer}
      />
    </View>
  );
}

export default NotesList;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 15, flex: 1 },
  heading: { color: "#94A3B8", fontWeight: 500, fontSize: 16 },
  noteListContainer: {
    marginTop: 15,
  },
  noteCard: {
    backgroundColor: "#1E293B",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noteText: {
    color: "#F8FAFC",
    fontWeight: 500,
    fontSize: 16,
  },
  timestampText: {
    color: "#94A3B8",
    fontSize: 12,
  },
});
