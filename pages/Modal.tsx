import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { saveTodo, TodoIntfs } from "../firebase";

const Modal = ({ navigation }: any) => {
  const [todo, setTodo] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const saveData = () => {
    setLoading((loading) => !loading);
    const newTodo: TodoIntfs = {
      todo,
      details,
    };
    saveTodo(newTodo).then(() => {
      setLoading((loading) => !loading);
      navigation.goBack();
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={{ marginBottom: 60, marginTop: 70 }}>
        <TextInput
          label="Todo"
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
      </View>
      <View style={{ marginBottom: 60 }}>
        <TextInput
          label="Details"
          value={details}
          onChangeText={(text) => setDetails(text)}
        />
      </View>
      <Button
        dark={true}
        loading={loading}
        style={{ alignSelf: "center" }}
        color="#60a58e"
        mode="contained"
        onPress={saveData}
      >
        {loading ? "" : "Add"}
      </Button>
    </View>
  );
};

export default Modal;
