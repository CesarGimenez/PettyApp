import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { ImagePet } from "./AddImagePet";
import { InfoForm } from "./FormPet";
import { UploadImagesForm } from "./UploadImagePet";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addPet: {
    backgroundColor: "#00a680",
    margin: 20,
  },
});

function initialVales() {
  return {
    name: "",
    address: "",
    sex: "",
    weight: "",
    age: "Cachorro",
    isVacunate: true,
    isEsterilized: true,
    size: "",
    adoptionStatus: "pending",
    raza: "",
    images: [],
  };
}

function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    sex: Yup.string().required("Campo obligatorio"),
    size: Yup.string().required("Campo obligatorio"),
    raza: Yup.string().required("Campo obligatorio"),
    age: Yup.string().required("Campo obligatorio"),
    images: Yup.array()
      .min(1, "Se requiere una imagen como minimo")
      .required("La imagen es requerida"),
  });
}

export function AddPetScreen() {
  const navigation = useNavigation();
  const db = getFirestore();

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createdAt = new Date();

        await setDoc(doc(db, "pets", newData.id), newData);
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 100 }}
    >
      <ImagePet formik={formik} />

      <InfoForm formik={formik} />

      <UploadImagesForm formik={formik} />

      <Button
        title="Crear mascota"
        buttonStyle={styles.Pet}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
