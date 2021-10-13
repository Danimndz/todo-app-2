import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Todo from "../components/Todo";
import firebase from "../firebase";
const Main = ({ navigation }: any) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    firebase.db.collection("todos").onSnapshot((querySnapshot) => {
      let resArr: any = [];
      querySnapshot.forEach((doc) => {
        resArr.push(doc.data());
      });
      setTodos(resArr);
      return () => {};
    });
  }, [setTodos]);
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        {todos &&
          todos.map(({ todo, details }, index) => {
            return <Todo key={index} todo={todo} details={details}></Todo>;
          })}
      </ScrollView>
    </>
  );
};

export default Main;
