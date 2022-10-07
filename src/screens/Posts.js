import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const Posts = () => {
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
          Aca puedes ver o publicar informacion sobre mascotas en busca de un
          hogar
        </Text>
        <View>
          <TextInput
            placeholder="Que esta pasando?"
            style={{
              borderColor: "#FFF",
              fontSize: 15,
              backgroundColor: "#FFFF",
              borderRadius: 20,
              padding: 5,
              paddingLeft: 10,
            }}
          ></TextInput>
          <Button>Publicar</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Posts;
