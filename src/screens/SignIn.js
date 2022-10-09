import { View, Text, ScrollView } from "react-native";
import React from "react";
import { LoginForm } from "../components/Login/LoginForm";

const SignIn = ({ navigation }) => {
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
          Sign In
        </Text>
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 20,
            height: 500,
          }}
        >
          <LoginForm />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
