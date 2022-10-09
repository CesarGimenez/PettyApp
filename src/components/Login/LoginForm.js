import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { useNavigation } from "@react-navigation/native";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogged, setErrorLogged] = useState(false);

  const navigation = useNavigation();

  const onShowHidePassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate("Navigation");
      } catch (error) {
        setErrorLogged(true);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={onShowHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Sign In"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={{ fontSize: 20 }}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
      <View
        style={{
          flexDirection: "row",
          padding: 50,
        }}
      >
        <View
          style={{
            marginRight: 20,
            backgroundColor: "#9B8ACA",
            borderRadius: 50,
            padding: 5,
          }}
        >
          <TouchableOpacity>
            <Icon
              type="material-community"
              name="google"
              color="#FFF"
              size={35}
            ></Icon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 20,
            padding: 5,
            backgroundColor: "#9B8ACA",
            borderRadius: 50,
          }}
        >
          <TouchableOpacity>
            <Icon
              type="material-community"
              name="facebook"
              color="#FFF"
              size={35}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        <Text style={{ color: "#6852A5", fontSize: 18 }}>
          No posees una cuenta?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{ color: "#8550A0" }}
          >
            {" "}
            Registrate
          </Text>
        </Text>
      </View>

      {errorLogged && <Text>Credenciales de usuario incorrectas</Text>}
    </View>
  );
}
