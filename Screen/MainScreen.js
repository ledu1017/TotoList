import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import TodoList from '../components/TodoList';
import {useIsFocused} from '@react-navigation/native';

const MainScreen = ({route}) => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const isFocused = useIsFocused();
  const { userInfo } = route.params;

  useEffect(() => {
    const readfromDB = async () => {
      try {
        const data = await db.collection("User");
        let tempArray = [];
        data.get().then(snap => {
          snap.forEach((doc) => {
            tempArray.push({ ...doc.data(), documentID : doc.uid});
          })
          setUser(tempArray);
        })
      } catch(err) {
        console.log(err);
      }
    }
    readfromDB();
  }, [isFocused]);

  const todoCount = todos.length;

  const toggleTodo = (id) => {
    // 해당 id의 todo를 토글하여 업데이트
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    // 해당 id의 todo를 제거하여 업데이트
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.name}>{userInfo.name}</Text>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require('../assets/home.png')}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.todoCount}>
          Total Todos: {todoCount}
        </Text>
        {todos.length > 0 ? (
          <TodoList Todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
        ) : (
          <Text>No Todos</Text>
        )}
      </View>
    </View>
  );
};

// 스타일 시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#ccc',
    paddingTop: StatusBar.currentHeight + 10 // StatusBar의 높이만큼 paddingTop 추가
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profilePictureContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  todoCount: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainScreen;
