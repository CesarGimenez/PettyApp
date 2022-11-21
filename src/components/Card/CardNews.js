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

  
  export default function CardNews({
    images,
    heading,
    subheading,
    description,
    id,
    onPress,
    style,
    navigation,
    ...rest
  }) {

    const flatListRef = useRef(null);
  
    const { navigate } = navigation;


  
    return (
      <View style={[styles.cardContainer, style, {flexDirection: 'row'}]} {...rest}>

        {/* Images */}
        <FlatList
          style={{flex:1}}
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ref={(ref) => (flatListRef.current = ref)}
          renderItem={({ item }) => (
            <Pressable onPress={onPress} style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item }} />
            </Pressable>
          )}
        />

        {/* Text Container */}
        <Pressable onPress={onPress} style={[styles.textContainer, {flex:2}]}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>
            <Ionicons name="location" size={14}  color={'gray'}/>
            {subheading}
          </Text>

          <View  style={{flexDirection: "row", width: 250 }}>            
            <Text style={styles.genderContainer}>{description}</Text>
          </View>
          
          
        </Pressable>        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 10,
    },

    imageContainer: {  alignSelf: 'flex-start', marginLeft:20, marginBottom:10, marginRight:10, width: 120, height: 120, },
    image: {
      borderRadius: 15,
      flex: 1,
    },

    textContainer: { marginTop: 20, position:'absolute', marginLeft: 150, alignSelf: 'flex-start', color: '#070821'},
    genderContainer: { width: 1, flexGrow: 1, flex: 1, fontSize: 12, color: '#070821'},
    heading: { fontSize: 20, color: '#070821', fontWeight:'bold' },
    subheading: { fontSize: 12, marginTop: 5, color: 'gray' },
  });