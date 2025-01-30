import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Activity4 = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [comment, onChangeComment] = React.useState('Contact:');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.GcuQtvtQJBr_me-g3AgKjAHaEw?w=244&h=180&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.7-Z4-jo9mTTiWihKON1UAgHaNK?w=187&h=180&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.gs12b_BgN06G7Yn3xdtxiwHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.M7FBfwPneVuAn2HyMka1QAHaEK?w=281&h=180&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.532rU5C0o74yu5QtQ-1gRwHaHc?w=200&h=193&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.XoKVCWADIGgVPzMT3RzqIQHaGL?w=235&h=196&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.3UcDBmfiRYFxXit9u4XTLQHaFj?w=253&h=189&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.l2dRNhBViUyUYXtOM_CmvAHaHa?w=238&h=209&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default Activity4;