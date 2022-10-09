import { View, Text, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./Styles";
import { Icon } from "react-native-elements";

const Login = ({ navigation }) => {
  const goToRegister = () => {
    navigation.navigate("Register");
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
            fontSize: 50,
            color: "#FFF",
            paddingVertical: 25,
            fontWeight: "500",
          }}
        >
          Bienvenido a <Text style={{ color: "yellow" }}>Petty</Text>
        </Text>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Continuar con <Text style={{ fontWeight: "700" }}>Google</Text>
          </Text>
        </View>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Continuar con <Text style={{ fontWeight: "700" }}>Facebook</Text>
          </Text>
        </View>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <Text
            style={styles.btnRegister1}
            onPress={() => navigation.navigate("SignIn")}
          >
            Continuar con email
          </Text>
        </View>
        <View style={{ padding: 20, alignSelf: "center", marginTop: 10 }}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>
            Ya tienes una cuenta?{" "}
            <Text
              style={{ fontStyle: "Bold", color: "#FF0" }}
              onPress={() => navigation.navigate("SignIn")}
            >
              {" "}
              Ingresar
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
