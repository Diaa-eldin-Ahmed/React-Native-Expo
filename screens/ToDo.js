import {
    View,
    Text,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import ToDoItem from "../components/toDoItem";
import AddToItem from "../components/AddToItem";

export default function ToDo() {
    const [toDo, SetToDo] = useState([
        { key: 1, text: "wake-up at 6" },
        { key: 2, text: "make coffee" },
        { key: 3, text: "go to gym" },
    ]);
    const pressHandler = (id) => {
        SetToDo((prevToDo) => {
            return prevToDo.filter((item) => item.key !== id);
        });
    };
    const AddItem = (text) => {
        if (text.length > 0) {
            SetToDo((prevToDo) => {
                return [{ key: Math.random(), text: text }, ...prevToDo];
            });
        } else {
            Alert.alert("oops", "please enter a valid item", [{ text: "ok" }]);
        }
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={globalStyles.container}>
                <View>
                    <Text style={globalStyles.welcomeTxt}>
                        Welcome to To Do App
                    </Text>
                    <AddToItem AddItem={AddItem} />
                    <FlatList
                        data={toDo}
                        renderItem={({ item }) => {
                            return (
                                <ToDoItem
                                    item={item}
                                    pressHandler={pressHandler}
                                />
                            );
                        }}
                    ></FlatList>
                </View>
                <View></View>
            </View>
        </TouchableWithoutFeedback>
    );
}
