import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
// import CheckBox from "@react-native-community/checkbox";
import CheckBox from "expo-checkbox";

import { Login } from "../DoneWithIt/Login";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    alert("Login requested");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/scoreplayLogo.png")} />

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.fixButtonAndCheck}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Acuérdate de mí</Text>
          </View>

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Log In</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.pressable} onPress={handleLogin}>
        <Text style={styles.pressableText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <Pressable style={styles.pressable} onPress={handleLogin}>
        <Text style={styles.pressableText}>Regístrate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9EBFF",
  },
  text: {
    color: "#FFFFFF",
  },
  pressableText: {
    color: "#999",
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderRadius: 33,
    paddingVertical: 40,
  },
  fixButtonAndCheck: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#11CCBB",
    borderRadius: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 10,
    color: "#999",
  },
  pressable: {
    marginVertical: 10,
    borderRadius: 10,
  },
});
