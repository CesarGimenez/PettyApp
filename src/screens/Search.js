import { View, Text, ScrollView, TextInput, Button, Image, FlatList} from "react-native";
import { SearchBar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Card from "../components/Card/Card";

const properties = [
  {
    id: "24reaf6r8er7852u",
    name: "Petty",
    raza: "Cruzado",
    edad: "Cachorro",
    gender: 'M',
    photos: [
      "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg",
    ],
    favorite: true,
  },
  {
    id: "4453fd343",
    name: "Sparky",
    raza: "Corgi",
    edad: "Cachorro",
    gender: 'M',
    photos: [
      "https://www.elespectador.com/resizer/ti2d1pExzZSzsImY9C3o2NDpKwM=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg",

    ],
    favorite: true,
  },
  {
    id: "2afomeoivioe4732u",
    name: "Docky",
    raza: "Cruzado",
    gender: 'M',
    edad: "Adulto",
    photos: [
      "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/2021-10/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png?itok=UNEbd6Xh",
    ],
    favorite: true,
  },
  {
    id: "2afomeoivi447852u",
    name: "Luna",
    raza: "Shi Tzu",
    edad: "Cachorro",
    gender: 'W',
    photos: [
      "https://i.pinimg.com/474x/8a/09/53/8a095362a69abf43e61a484965d74df8.jpg",
    ],
    favorite: true,
  },
  {
    id: "2afomeogdijjnu",
    name: "Ponky",
    raza: "Cruzado",
    edad: "Adulto",
    gender: 'W',
    photos: [
      "https://www.sopitas.com/wp-content/uploads/2022/02/perritos-duelo-resienten-perdida-estudio-universidad-milan-federica-pirrone-1.jpg?w=1120",
    ],
    favorite: true,
  },
  {
    id: "2afomeoias45oe47852u",
    name: "Sam",
    raza: "Raza",
    gender: 'M',
    edad: "Cachorro",
    photos: [
      "https://comoeducarauncachorro.com/blog/wp-content/uploads/p-2-805x452.jpg",
    ],
    favorite: true,
  },

];

const Search = () => {
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


    <View>
      <SearchBar
          placeholder="Buscar"
          lightTheme
          round
          onChangeText={() => console.log('Holi')}
          autoCorrect={false}
          searchIcon={{ size: 24 }}
          onClear={() => console.log('Bye')}
        />
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
       <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            heading={item.name}
            images={item.photos}
            subheading={item.raza}
            edad={item.edad}
            gender={item.gender}
            favorite={item.favorite}
            onPress={() =>
              alert(
                "navigation.navigate passing in data " + JSON.stringify(item)
              )
            }
          />
        )}
      />
    </View>
  );
};

export default Search;
