import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import React from "react";

const Search = () => {
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
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
          <Button title="publicar"></Button>
        </View>
      </View>
      <Button onPress={handleLogout} title="logout"></Button>
    </ScrollView>
  );
};

export default Search;
