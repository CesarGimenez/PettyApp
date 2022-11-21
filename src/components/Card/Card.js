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
  
  const HEIGHT = 140;
  const WIDTH = (Dimensions.get('window').width) / 2;
  
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
            size={24}
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


        
  
        {/* Text Container */}
        <Pressable onPress={onPress} style={styles.textContainer}>
          <View style={styles.genderContainer}>            
            <Text style={{ backgroundColor: color, color: fontColor, paddingLeft:5, paddingRight:5, marginLeft: 2, marginRight: 10, borderRadius: 20}}>{age}</Text>
            <Text style={{marginLeft:40, marginRight:20}}>{iconSexo}</Text>
          </View>
          
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 15,
      paddingHorizontal: 12,
      width: WIDTH,
      borderRadius: 10,
    },
    favoriteContainer: {
      position: "absolute",
      top: 10,
      right: 30,
      zIndex: 10,
      padding: 5,
      backgroundColor: 'white',
      borderRadius: 50
    },
    imageContainer: { width: WIDTH - 10 },
    image: {
      width: "90%",
      height: HEIGHT,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      flex: 1,
    },
    textContainer: { marginTop: 10 },
    genderContainer: { flexDirection: "row", justifyContent: 'center', alignItems: 'center'},
    heading: { fontSize: 20 },
    subheading: { fontSize: 13, marginTop: 5 },
  });