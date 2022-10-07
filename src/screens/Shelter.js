import { View, Text, ScrollView } from "react-native";
import React from "react";

const Shelter = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#044244",
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
    </ScrollView>
  );
};

export default Shelter;
