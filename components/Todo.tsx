import React from "react";
import { View, Text } from "react-native";
import {
  Card,
  Paragraph,
  RadioButton,
  Title,
  Checkbox,
} from "react-native-paper";
const Todo = ({ todo, details }: TodoProps) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Card style={{ marginBottom: 5, marginTop: 10 }}>
      <Card.Content>
        <Title style={{ color: "#0beea2" }}>{todo}</Title>
        <Paragraph style={{ color: "#60a58e" }}>{details}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Checkbox
          uncheckedColor="#fff"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </Card.Actions>
    </Card>
  );
};

export default Todo;
