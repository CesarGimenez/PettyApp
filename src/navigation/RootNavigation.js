import {
  createNavigationContainerRef,
  useNavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = useNavigationContainerRef();
console.log(navigationRef);

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function gola() {
  console.log("hola");
}
