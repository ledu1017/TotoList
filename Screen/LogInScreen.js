import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import {useIsFocused} from '@react-navigation/native';
import { db } from '../DataBase/Firebase'

function LoginScreen(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const isFocused = useIsFocused();

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

  const loginEvent = () => {
    let bol = true
    //사용자가 입력한 값과 user 컬렉션에 있는 값들을 하나하나 비교하며 해당 사용자가 있는지 확인 
    user.map((row, idx) => {
      if (row.uid == id && row.upw == password) {
        setId('')
        setPassword('')
        bol = false
        alert("로그인 성공")
        const userInfo = {id: row.uid, name: row.uname}
        props.navigation.navigate('Drawer', { screen: 'Main', params: { userInfo } });
      } 
    })
    if(bol){
      alert("아이디 혹은 패스워드가 틀렸습니다.")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
      <View style={styles.buttonContainer}>
        <Button
          title="회원가입"
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
        <View style={styles.buttonGap} />
        <Button 
          title="로그인"
          onPress={loginEvent}
        />
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 24,
    width: width * 0.8, // 화면 너비의 80%만큼 차지
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonGap: {
    width: 16,
  },
});

export default LoginScreen;