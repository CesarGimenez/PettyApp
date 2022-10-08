import { View, Text, ScrollView, Button } from "react-native";
import React from "react";

const Shelter = ({ navigation }) => {
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
          Refugios cerca de tu zona
        </Text>
      </View>
      <Button
        title="add"
        onPress={() => navigation.navigate("AddShelters")}
      ></Button>
    </ScrollView>
  );
};

export default Shelter;
