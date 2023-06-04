import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, StatusBar } from 'react-native';

const OpenAIText = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    setLoading(true);

    const prompt = text;
    const apiKey = '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';
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    };

    const data = {
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.7
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });

    const result = await response.json();
    setResponse(result.choices[0].text);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your text prompt here"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Button
          title="Generate Text"
          onPress={generateText}
        />
      </View>
      <View style={styles.responseContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : response ? (
          <Text style={styles.response}>{response}</Text>
        ) : (
          <Text style={styles.waitText}>궁금하신걸 물어보세요!!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 10 // StatusBar의 높이만큼 paddingTop 추가
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 16
  },
  responseContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  waitText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray'
  }
});

export default OpenAIText;
