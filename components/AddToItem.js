import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function AddToItem({ AddItem }) {
    const [newToDo, setNewToDo] = useState("");
    const textVal = (val) => {
        setNewToDo(val);
    };
    return (
        <View style={globalStyles.addToItem}>
            <TextInput
                style={globalStyles.textInputToDo}
                onChangeText={(val) => textVal(val)}
            ></TextInput>
            <TouchableOpacity
                style={globalStyles.addButtonToDo}
                onPress={() => {
                    AddItem(newToDo);
                }}
            >
                <Text style={globalStyles.toDoTxtBtn}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}
