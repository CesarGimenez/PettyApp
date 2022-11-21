import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search, News } from "../screens";

import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator navigation={navigation}>
      <Stack.Screen
        name={screen.searchStack.search}
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'News'}
        component={News}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
