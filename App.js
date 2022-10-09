import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { enableScreens } from "react-native-screens";
import { initFirebase } from "./src/utils/firebase";
import OnboardingScreen from "./src/views/OnboardingScreen";
import Login from "./src/screens/Login";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";

enableScreens();
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Register"}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
