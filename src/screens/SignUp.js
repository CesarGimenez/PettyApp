import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Styles";
import RegisterForm from "../components/Register/FormRegister";

const SignUp = () => {
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
            fontWeight: "700",
          }}
        >
          Sign Up
        </Text>
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "#FFF",
            borderRadius: 20,
            height: 500,
          }}
        >
          <RegisterForm />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
