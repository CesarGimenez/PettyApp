import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import OnboardingScreen from './src/views/OnboardingScreen'

export default function App() {
  return (
    <>
      <OnboardingScreen></OnboardingScreen>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
