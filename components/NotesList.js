import { FlatList, StyleSheet, Text, View } from "react-native";

function NotesList({ notes }) {
  function formatDate(isoString) {
    return new Date(isoString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Notes</Text>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>{item.content}</Text>
            <Text style={styles.timestampText}>
              {formatDate(item.timestamp)}
            </Text>
          </View>
        )}
        style={styles.noteListContainer}
      />
    </View>
  );
}

export default NotesList;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 15 },
  heading: { color: "#94A3B8", fontWeight: 500, fontSize: 16 },
  noteListContainer: {
    marginTop: 15,
    gap: 10,
  },
  noteCard: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 8,
    gap: 5,
    marginBottom: 15,
  },
  noteText: {
    color: "#F8FAFC",
    fontWeight: 500,
    fontSize: 15,
  },
  timestampText: {
    color: "#94A3B8",
  },
});
