import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import CardNews from "../components/Card/CardNews";

import newsData from "../../newsData.json";

const styles = StyleSheet.create({
  barContainer: { flexDirection: "row", justifyContent: 'center', alignItems: 'center'},
  searchContainer: {backgroundColor: '#F9F8FD'},
  listContainer: {
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 200,
  },
});

const properties = newsData;

const News = ({ navigation }) => {
  const auth = getAuth();
  console.log(auth.currentUser);
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
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignSelf: 'center',
        paddingTop: 20,
        margin: 15
      }}>
        Conoce nuestras recomendaciones
      </Text>

      <FlatList
        style={styles.listContainer}
        data={properties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardNews
            heading={item.tittle}
            images={item.photos}
            subheading={item.address}
            description={item.description}
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

export default News;
