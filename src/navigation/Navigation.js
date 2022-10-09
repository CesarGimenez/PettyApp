import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import React from "react";
import { Veterinary, Calendar } from "../screens";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";
import { ShelterStack } from "./ShelterStack";
import Search from "../screens/Search";
import { SearchStack } from "./SearchStack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigation = ({ route }) => {
  const navigation = useNavigation();
  console.log(route);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTransparent: true,
        headerShown: false,
        tabBarActiveTintColor: "#6852A5",
        tabBarInactiveTintColor: "#BBC3CE",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          paddingBottom: 20,
        },
        tabBarIcon: ({ color, size }) => IconOptions(route, color, size),
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}
    >
      <Tab.Screen name="Buscar" component={SearchStack} />
      {/* <Tab.Screen name="Veterinario" component={Veterinary} />
      <Tab.Screen name="Refugios" component={ShelterStack} />  */}
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Cuenta" component={AccountStack} />
    </Tab.Navigator>
  );
};

const IconOptions = (route, color, size) => {
  let iconName = "";

  if (route?.name === "Cuenta") {
    iconName = "user";
  }

  if (route?.name === "Calendar") {
    iconName = "clock-o";
  }

/*   if (route?.name === "Veterinario") {
    iconName = "medical-bag";
  }

  if (route?.name === "Refugios") {
    iconName = "home-heart";
  } */

  if (route?.name === "Buscar") {
    iconName = "paw";
  }

  return (
    <FontAwesome name={iconName} size={24}  color={color}/>
  );
};

export { Navigation };
