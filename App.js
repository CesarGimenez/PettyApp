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

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
