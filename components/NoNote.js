import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function NoNote() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="note-add" size={75} color="#64748B" />
      <Text style={styles.bigText}>No notes yet</Text>
      <Text style={styles.smallText}>Write one above and tap Save Note</Text>
    </View>
  );
}

export default NoNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  bigText: {
    fontSize: 20,
    fontWeight: 600,
    color: "#64748B",
  },
  smallText: {
    fontSize: 14,
    color: "#64748B",
  },
});
