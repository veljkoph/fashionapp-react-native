import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import TransparentInput from "../../components/Global/TransparentInput";
import { Colors } from "../../constants/colors";
import CTABtn from "../../components/Global/CTABtn";
import { Formik } from "formik";
import { RegisterSchema } from "../../constants/validations/RegisterSchema";
import useRegister from "../../hooks/auth/useRegister";

const Register = () => {
  const { mutate: register, error, isLoading } = useRegister();
  console.log(error?.response?.data, "ERR");
  console.log(isLoading, "loading");
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            password: "",
            confirm_password: "",
            username: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            register(values);
          }}
        >
          {(props) => (
            <>
              <TransparentInput
                onChangeText={props.handleChange("username")}
                value={props.values.username}
                label="username"
                error={props.errors.username}
                onBlur={props.handleBlur("username")}
                touched={props.touched.username}
              />
              <TransparentInput
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                label="email"
                error={props.errors.email}
                onBlur={props.handleBlur("email")}
                touched={props.touched.email}
              />
              <TransparentInput
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                label="password"
                error={props.errors.password}
                onBlur={props.handleBlur("password")}
                touched={props.touched.password}
                password
              />
              <TransparentInput
                onChangeText={props.handleChange("confirm_password")}
                value={props.values.confirm_password}
                label="confirm password"
                error={props.errors.confirm_password}
                onBlur={props.handleBlur("confirm_password")}
                touched={props.touched.confirm_password}
                password
              />
              <CTABtn text="register" f={props.handleSubmit} />
            </>
          )}
        </Formik>
        <Text style={styles.error}>{error?.response?.data}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
  error: {
    fontSize: 20,
    marginBottom: 8,
    color: Colors.beige,
    fontFamily: "Cormorant-Bold",
    textAlign: "left",
    marginTop: 20,
  },
});

export default Register;
