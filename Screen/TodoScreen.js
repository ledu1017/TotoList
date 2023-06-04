import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import uuid from 'react-uuid';
import {useIsFocused} from '@react-navigation/native';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const TodoScreen = () => {
  const [Todos, setTodos] = useState([]);
  
  const addTodo = text => {
    setTodos([...Todos,
      {id: uuid(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(Todos.filter((Todo: Todo) => Todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      Todos.map((Todo: Todo) =>
        Todo.id === id ? {...Todo, checked: !Todo.checked} : Todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>오늘 할일</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <ScrollView style={styles.scrollView}>
          <TodoList Todos={Todos} onRemove={onRemove} onToggle={onToggle} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  title: {
    color: "black",
    fontSize: 25,
    marginTop: 50,
    fontWeight: "400",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    marginHorizontal: "3%",
    paddingHorizontal: 5,
    paddingTop: 0,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  }
});

export default TodoScreen;
