import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { SearchBar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

import pettyData from "../../pettyData.json";

const styles = StyleSheet.create({
  searchContainer: {backgroundColor: '#F9F8FD'},
  listContainer: {
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 200,
  },
});

const properties = pettyData;

const Search = ({ navigation }) => {
  const auth = getAuth();
  return (
    /*     <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#6852A5",
      }}
    >

      <Button onPress={handleLogout} title="logout"></Button>
    </ScrollView> */

    <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Buscar"
        lightTheme
        round
        onChangeText={() => console.log("Holi")}
        autoCorrect={false}
        searchIcon={{ size: 20 }}
        onClear={() => console.log("Bye")}
        containerStyle={{
          backgroundColor: "white",
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          alignItems: "center",
        }}
        style={{
          borderRadius: 15,
          backgroundColor: "white",
          padding: 8,
        }}
      />

      <FlatList
        style={styles.listContainer}
        data={properties}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id} 
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            heading={item.name}
            images={item.photos}
            subheading={item.breed}
            age={item.age}
            gender={item.gender}
            favorite={item.favorite}
            id={item.id}
            onPress={() =>
              console.log("search navigation " + JSON.stringify(item))
            }
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Search;
