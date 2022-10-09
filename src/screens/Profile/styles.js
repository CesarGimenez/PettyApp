import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
  },
  image: {
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnStyle: {
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: "#9B8ACA",
    borderRadius: 50,
    borderTopColor: "#e3e3e3",
    borderBottomColor: "#e3e3e3",
  },
  btnStyle1: {
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderTopColor: "#e3e3e3",
    borderBottomColor: "#e3e3e3",
  },
  btnTextStyle: {
    color: "#9B8ACA",
    fontSize: 20,
  },
  contentInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  avatar: {
    backgroundColor: "#9B8ACA",
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
    marginTop: 10,
  },
});
