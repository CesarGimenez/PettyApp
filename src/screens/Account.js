import { View, Text, ScrollView, Button } from "react-native";
import React from "react";

const Account = ({ navigation }) => {
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
            fontSize: 25,
            color: "#FFF",
            paddingVertical: 25,
          }}
        >
          Tu perfil
        </Text>
        <Button
          title="Unete!"
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default Account;
