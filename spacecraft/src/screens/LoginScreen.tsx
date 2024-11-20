import { Text, SafeAreaView, StyleSheet,View,TouchableHighlight,TextInput,} from 'react-native';
import React from "react"
import { Card } from 'react-native-paper';

export default function loginScreen() {
  const [email, onChangeEmail] = React.useState('Email');
  const [pass, onChangePass] = React.useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
      <View style={styles.background}>
      
        <Text style={styles.paragraph}>
          Space Craft
        </Text>
      </View>
        <TextInput
          style={styles.firstJunt1}
          onChangeText={onChangeEmail}
          clearTextOnFocus={true}
          value={email}
        />
        <TextInput
          style={styles.firstJunt2}
          onChangeText={onChangePass}
          clearTextOnFocus={true}
          value={pass}
          secureTextEntry
        />
        <View style={styles.purple}>
          <TouchableHighlight 
            onPress={() => alert('Login complete')}
            >
            <Text style={styles.login}>
              Login
            </Text>
           </TouchableHighlight>
        </View>
        <Text style={styles.terms}>
            Read terms and Conditions.
        </Text>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  background: {
      backgroundColor: '#6a5ae8',
      flex: 1,
      justifyContent: 'center',
      width: 300,
      borderColor: 'black',
      borderWidth: 2,
  },
  firstJunt1: {
    borderRadius: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 4,
    height: 45,
    width: 250,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 60,
    },
  firstJunt2: {
    borderRadius: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 4,
    height: 45,
    width: 250,
    marginLeft: 15, 
    marginRight: 15,
    marginTop: 45,
    },
  purple: {
    backgroundColor: '#6a5ae8',
    marginLeft: 35, 
    marginRight: 35,
    marginTop: 60,
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: 'white',
  },
  terms: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
    fontFamily: 'cursive',
    color: '#d8d8d8',
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    height: 550,
    width: 300,
    marginLeft: 15, 
  },
});

