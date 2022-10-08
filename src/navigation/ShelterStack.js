import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Shelter } from "../screens";
import Login from "../screens/Login";
import AddShelter from "../screens/Shelters/AddShelter";
import MapShelters from "../screens/Shelters/MapShelters";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignUp";

import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function ShelterStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator navigation={navigation}>
      <Stack.Screen
        name={screen.refugioStack.shelters}
        component={Shelter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.refugioStack.addShelter}
        component={AddShelter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.refugioStack.mapShelters}
        component={MapShelters}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
