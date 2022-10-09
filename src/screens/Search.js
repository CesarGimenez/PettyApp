import { View, Text, ScrollView, TextInput, Button, Image, FlatList, StyleSheet} from "react-native";
import { SearchBar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Card from "../components/Card/Card";

const styles = StyleSheet.create({
  barContainer: { flexDirection: "row", justifyContent: 'center', alignItems: 'center'},
  searchContainer: {backgroundColor: 'white'}

})

const properties = [
  {
    id: "24reaf6r8er7852u",
    name: "Petty",
    breed: "Cruzado",
    age: "Cachorro",
    gender: 'M',
    photos: [
      "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg",
    ],
    favorite: true,
  },
  {
    id: "4453fd343",
    name: "Sparky",
    breed: "Corgi",
    age: "Cachorro",
    gender: 'M',
    photos: [
      "https://www.elespectador.com/resizer/ti2d1pExzZSzsImY9C3o2NDpKwM=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg",

    ],
    favorite: true,
  },
  {
    id: "2afomeoivi447852u",
    name: "Luna",
    breed: "Shi Tzu",
    age: "Cachorro",
    gender: 'F',
    photos: [
      "https://i.pinimg.com/474x/8a/09/53/8a095362a69abf43e61a484965d74df8.jpg",
    ],
    favorite: true,
  },
  {
    id: "2afomeogdijjnu",
    name: "Ponky",
    breed: "Cruzado",
    age: "Adulto",
    gender: 'F',
    photos: [
      "https://www.sopitas.com/wp-content/uploads/2022/02/perritos-duelo-resienten-perdida-estudio-universidad-milan-federica-pirrone-1.jpg?w=1120",
    ],
    favorite: true,
  },
  {
    id: "2afomeoias45oe47852u",
    name: "Sam",
    breed: "breed",
    gender: 'M',
    age: "Cachorro",
    photos: [
      "https://comoeducarauncachorro.com/blog/wp-content/uploads/p-2-805x452.jpg",
    ],
    favorite: true,
  },

];

const Search = ({navigation}) => {
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
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
          onChangeText={() => console.log('Holi')}
          autoCorrect={false}
          searchIcon={{ size: 20 }}
          onClear={() => console.log('Bye')}
          
          containerStyle={{
            backgroundColor: 'white',
          }}
          
          inputContainerStyle={{
            backgroundColor: 'white',
            alignItems: 'center',
          }}
          
          style={{
            borderRadius: 15,
            backgroundColor:'white', 
            padding:8,          
          }}
        />
      
       <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            heading={item.name}
            images={item.photos}
            subheading={item.breed}
            age={item.age}
            gender={item.gender}
            favorite={item.favorite}
            onPress={() =>
              console.log(
                "search navigation " + JSON.stringify(item)
              )
            }
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Search;
