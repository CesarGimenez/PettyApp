import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Text,
    Dimensions,
    Pressable,
    Button,
  } from "react-native";
  import { useState, useRef } from "react";
  import { Ionicons, FontAwesome } from "@expo/vector-icons";
  
  const HEIGHT = 225;
  const WIDTH = Dimensions.get("window").width;
  
  export default function Card({
    images,
    heading,
    subheading,
    age,
    gender,
    favorite,
    id,
    onPress,
    style,
    navigation,
    ...rest
  }) {


    const cachorro = age == 'Cachorro' ? true : false
    const color = cachorro ? "#DED6F4" : "#F1E2D1"
    const fontColor = cachorro ? "#6852A5" : "#F1A852"
    const iconSexo = gender == 'M' 
                                    ?  <FontAwesome name="mars" size={24} color={fontColor} /> 
                                    :  <Ionicons name="female-outline" size={24}  color={fontColor}/>
    const flatListRef = useRef(null);
    const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef(({ changed }) => {
      if (changed[0].isViewable) {
        setActiveIndex(changed[0].index); }
      
    });
    const [favoriteItem, setFavoriteItem] = useState(favorite);
  
    const { navigate } = navigation;

    const handleFavoriteItemClicked = () => {
      setFavoriteItem(favorite);
      console.log("make some backend request");
      navigate('PetProfile', {id})
    };
   
  
    return (
      <View style={[styles.cardContainer, style]} {...rest}>
        <Pressable
          onPress={handleFavoriteItemClicked}
          style={styles.favoriteContainer}
        >
          <Ionicons
            name={"heart-outline"}
            size={30}
            color={favoriteItem ? "#6852A5" : "white"}
          />
        </Pressable>


        {/* Images */}
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ref={(ref) => (flatListRef.current = ref)}
          snapToAlignment="center"
          pagingEnabled
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => (
            <Pressable onPress={onPress} style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item }} />
            </Pressable>
          )}
        />


        {/*  Dot Container */}
        {images.length > 1 && (
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  {
                    opacity: index === activeIndex ? 1 : 0.5,
                  },
                  styles.dot,
                ]}
              />
            ))}
          </View>
        )}
  
        {/* Text Container */}
        <Pressable onPress={onPress} style={styles.textContainer}>
          <View style={styles.genderContainer}>            
            <Text style={{ backgroundColor: color, color: fontColor, paddingLeft:10, paddingRight:10, marginLeft: 10, marginRight: 120, borderRadius: 20}}>{age}</Text>
            <Text style={{marginLeft:120, marginRight:10}}>{iconSexo}</Text>
          </View>
          
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 20,
      paddingHorizontal: 30,
      width: WIDTH,
      borderRadius: 10,
    },
    favoriteContainer: {
      position: "absolute",
      top: 10,
      right: 40,
      zIndex: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 50
    },
    imageContainer: { width: WIDTH - 60 },
    image: {
      width: "100%",
      height: HEIGHT,
      borderRadius: 10,
      flex: 1,
    },
    dotContainer: {
      position: "absolute",
      flexDirection: "row",
      justifyContent: "center",
      top: HEIGHT - 20,
      alignSelf: "center",
    },
    dot: {
      width: 5,
      height: 5,
      margin: 3,
      borderRadius: 30,
      backgroundColor: "white",
    },
    textContainer: { marginTop: 10 },
    genderContainer: { flexDirection: "row", justifyContent: 'center', alignItems: 'center'},
    heading: { fontSize: 20 },
    subheading: { fontSize: 13, marginTop: 5 },
  });