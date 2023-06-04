import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import {useIsFocused} from '@react-navigation/native';
import { db } from '../DataBase/Firebase'

function SignUpScreen(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("  ");
  const [user, setUser] = useState([]);
  const isFocused = useIsFocused();

  const addtoDB = async () => {
    try{
       db.collection("User").doc().set({
        uid : id,
        upw : password,
        uname : name
      });
      alert("회원가입 성공")
      setId("")
      setPassword("")
    }catch(error){
      console.log(error.message)
      alert("회원가입 실패")
    }
  }

  return (
    <View style={styles.container}>
      <Button 
        title="뒤로가기"           
        onPress={() => {
            props.navigation.navigate('LogIn');
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="이름"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="아이디"
          onChangeText={setId}
          value={id}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <Button 
        title="회원가입"
        onPress={addtoDB}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginTop: 32,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
