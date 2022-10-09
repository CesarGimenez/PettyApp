import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
// import { MapForm } from "../MapForm";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
});

export function InfoForm(props) {
  const { formik } = props;

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Nombre de la mascota"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder="Sexo"
          onChangeText={(text) => formik.setFieldValue("sex", text)}
          errorMessage={formik.errors.sex}
        />
        <Input
          placeholder="Direccion"
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
        />
        <Input
          placeholder="Tama;o"
          onChangeText={(text) => formik.setFieldValue("size", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Raza"
          onChangeText={(text) => formik.setFieldValue("raza", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Edad"
          onChangeText={(text) => formik.setFieldValue("age", text)}
          errorMessage={formik.errors.email}
        />
      </View>

      {/* <MapForm show={showMap} close={onOpenCloseMap} formik={formik} /> */}
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#00a680";

  return "#c2c2c2";
};
