import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const pressBtn = () => {
        setName(newName);
    };
    const showName = (val) => {
        setNewName(val);
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={globalStyles.container}>
                <View>
                    <Text style={globalStyles.welcomeTxt}> Welcome {name}</Text>
                    <Text style={globalStyles.welcomeTxt}>To my To Do App</Text>
                </View>
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="Enter your Name"
                    placeholderTextColor="#fff"
                    onChangeText={showName}
                />
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={pressBtn}
                >
                    <Text style={globalStyles.buttonTxt}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={() => navigation.navigate("ToDo")}
                >
                    <Text style={globalStyles.buttonTxt}>Go to To-do App</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
