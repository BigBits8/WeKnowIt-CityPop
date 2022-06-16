import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    marginBottom: 100,
    // borderColor: "#FF3D00",
    // borderWidth: 5,
  },

  inputContainer: {
    width: "80%",
    justifyContent:'center',
    alignItems: 'center',
  },
  input: {
    width: "100%",
    height: 50,
    textAlign: "center",

    borderWidth: 1,
  },
  button: {
    backgroundColor: "#2ec6d1",
    width: "50%",
    height: 50,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: "center",
  },
});

export default styles;


