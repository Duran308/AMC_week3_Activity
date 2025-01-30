import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contact, onChangeContact] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: value,
          },
        ]}>
         <TextInput
          style={styles.input}
          onChangeText={onChangeName}
           placeholder={"Name :"}
       
         
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AGE :"
          keyboardType="numeric"
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          placeholder={"Address :"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          placeholder={"School :"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          placeholder={"Course :"}
                  />
    <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"Email:"}
        />
    <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          placeholder={"Contact :"}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

  textInput: {
    borderBottomColor: '#000',
    padding: 10,
    margin: 12,
   borderWidth: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MultilineTextInputExample;