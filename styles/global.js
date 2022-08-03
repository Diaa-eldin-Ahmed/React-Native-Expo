import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#36485f",
        paddingLeft: 60,
        paddingRight: 60,
    },
    register: {
        alignSelf: "stretch",
    },
    header: {
        fontSize: 26,
        color: "#fff",
        textAlign: "center",
        paddingBottom: 10,
        marginBottom: 50,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: "stretch",
        color: "#fff",
        height: 40,
        marginBottom: 20,
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#59cbbd",
        marginTop: 30,
        borderRadius: 5,
    },
    buttonTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 19,
    },
    here: {
        color: "#fff",
        marginTop: 35,
    },
    welcomeTxt: {
        color: "#fff",
        marginBottom: 35,
        fontSize: 25,
    },
    signNow: {
        marginTop: 5,
        color: "#199187",
    },
    toDoTxt: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 10,
        borderColor: "#59cbbd",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        backgroundColor: "#59cbbd",
    },
    addToItem: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    textInputToDo: {
        color: "#fff",
        height: 40,
        borderBottomColor: "#59cbbd",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    addButtonToDo: {
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "#59cbbd",
        marginTop: 30,
        borderRadius: 5,
    },
    toDoTxtBtn: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 19,
        padding: 10,
    },
});
