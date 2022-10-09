import React, { Component, useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";

import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

import petData from "./petData.json";

import PhotoButton from "./PhotoButton";
import PetStyle from "./PetStyle";
import { getAuth } from "firebase/auth";

const styles = StyleSheet.create({ ...PetStyle });

const auth = getAuth();

class Product extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  };

  static defaultProps = {
    containerStyle: {},
  };
  renderDetail = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.detailText, { flex: 2 }]}>Mario</Text>
        <Text style={[styles.detailText2, { flex: 0 }]}>Cruzado</Text>
      </View>
    );
  };

  renderAddress = () => {
    return (
      <View>
        <Text style={[styles.detailText3]}>
          <Ionicons name={"location-outline"} size={20} />
          Altamira, Caracas
        </Text>
      </View>
    );
  };

  renderDescription = () => {
    return (
      <View>
        <Text style={styles.detailText}>Caracteristicas</Text>
        <Text style={styles.subDetailText}>
          Educado en la mejor escuela de perros
        </Text>
      </View>
    );
  };

  renderHealthDetails = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.healthButton, { flex: 2 }]}>
          <Image
            source={require("../../../assets/icon1.png")}
            style={styles.healthIcon}
          />
          <Text style={styles.healthTextTittle}>Vacunado</Text>
        </View>
        <View style={[styles.healthButton, { flex: 2 }]}>
          <Image
            source={require("../../../assets/icon2.png")}
            style={styles.healthIcon}
          />
          <Text style={styles.healthTextTittle}>Castrado</Text>
        </View>
        <View style={[styles.healthButton, { flex: 2 }]}>
          <Image
            source={require("../../../assets/icon3.png")}
            style={styles.healthIcon}
          />
          <Text style={styles.healthTextTittle}>Desparacitado</Text>
        </View>
      </View>
    );
  };

  renderNavigator = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.navigatorButton, { flex: 2 }]}>
          <Text style={styles.navigatorTextTittle}>Edad</Text>
          <Text style={styles.navigatorTextSubTittle}>7 meses</Text>
        </View>
        <View style={[styles.navigatorButton, { flex: 2 }]}>
          <Text style={styles.navigatorTextTittle}>Peso</Text>
          <Text style={styles.navigatorTextSubTittle}>2kg</Text>
        </View>
        <View style={[styles.navigatorButton, { flex: 2 }]}>
          <Text style={styles.navigatorTextTittle}>Genero</Text>
          <Text style={styles.navigatorTextSubTittle}>Macho</Text>
        </View>
      </View>
    );
  };

  renderContactHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{ uri: this.props.img }}
            style={styles.coverImage}
          >
            <PhotoButton />
          </ImageBackground>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainViewStyle}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.container, this.props.containerStyle]}>
            <View style={styles.cardContainer}>
              {this.renderContactHeader()}
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
              paddingRight: 3,
              backgroundColor: "#FFF",
              top: -15,
              borderRadius: 20,
            }}
          >
            <View style={styles.productRow}>{this.renderNavigator()}</View>
            <View style={styles.productRow}>{this.renderDetail()}</View>
            <View style={styles.productRow}>{this.renderAddress()}</View>
            <View style={styles.productRow}>{this.renderDescription()}</View>
            <View style={styles.productRow}>{this.renderHealthDetails()}</View>
          </View>
        </ScrollView>

        <View>
          <Pressable
            onPress={() => this.props.navigation.navigate("Search")}
            style={[styles.buttonFooter2]}
          >
            <Ionicons name={"close-sharp"} size={30} color={"#9B8ACA"} />
          </Pressable>

          <Pressable
            onPress={() =>
              auth.currentUser
                ? this.props.navigation.navigate("Agendar")
                : this.props.navigation.navigate("Login")
            }
            style={[styles.buttonFooter1]}
          >
            <Ionicons name={"heart-circle"} size={30} color={"white"} />
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Product;
