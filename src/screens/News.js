import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import CardNews from "../components/Card/CardNews";

import newsData from "../../newsData.json";

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: { backgroundColor: "#F9F8FD" },
  listContainer: {
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 200,
  },
});

const properties = newsData;

const News = ({ navigation }) => {
  const auth = getAuth();
  return (
    <View style={styles.searchContainer}>
      <Text onPress={() => navigation.goBack()}>
        <Icon
          type="material-community"
          name="chevron-left"
          size={40}
          color={"#9B8ACA"}
        />
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          alignSelf: "center",
          paddingTop: 20,
          margin: 15,
        }}
      >
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
