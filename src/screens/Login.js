import { View, Text, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./Styles";

const Login = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    console.log("hola");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#6852A5",
      }}
    >
      <View
        style={{
          padding: 35,
          paddingTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "#FFF",
            paddingVertical: 25,
          }}
        >
          Bienvenido a Petty
        </Text>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Continuar con Google
          </Text>
        </View>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Continuar con Facebook
          </Text>
        </View>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrar con email
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
