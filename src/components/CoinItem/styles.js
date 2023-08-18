import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBlockColor: "#303030",
    padding: 15,
  },
  title: {
    marginBottom: 3,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  rank: {
    color: "white",
    marginRight: 5,
    backgroundColor: "#585858",
    fontWeight: "bold",
    paddingHorizontal: 5,
    borderRadius: 6,
  },
});

export default styles;
