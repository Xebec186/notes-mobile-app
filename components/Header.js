import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick Notes</Text>
      <Text style={styles.smallText}>Write something and save it below</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 15,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#1E293B",
  },
  heading: {
    fontSize: 35,
    fontWeight: 600,
    color: "#F8FAFC",
  },
  smallText: {
    color: "#94A3B8",
    letterSpacing: 1,
  },
});
