import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TransparentInput from "../../components/Global/TransparentInput";
import { Colors } from "../../constants/colors";
import CTABtn from "../../components/Global/CTABtn";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoaderModal from "../../components/Global/LoaderModal";
import HeaderWIthTitle from "../../components/Global/HeaderWIthTitle";
import { useNavigation } from "@react-navigation/native";
import { LoginSchema } from "../../constants/validations/LoginSchema";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  const { mutate: login, error, isLoading } = useLogin();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? 45 : 0,
      }}
    >
      {isLoading && <LoaderModal />}
      <HeaderWIthTitle title={isLoading ? "Loading" : "Login"} />
      <TouchableOpacity
        style={styles.switchBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>
          Dont have an account? <Text style={styles.cta}>Register</Text>
        </Text>
      </TouchableOpacity>
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingTop: 30 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        keyboardVerticalOffset={330}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              password: "",
              username: "",
            }}
            onSubmit={(values) => {
              const fixedValues = {
                username: values.username,
                password: values.password,
              };
              login(fixedValues);
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
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  label="password"
                  error={props.errors.password}
                  onBlur={props.handleBlur("password")}
                  touched={props.touched.password}
                  password
                />

                <CTABtn text="login" f={props.handleSubmit} />
              </>
            )}
          </Formik>
          <Text style={styles.error}>{error?.response?.data}</Text>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
  switchBtn: {
    alignSelf: "flex-end",
    paddingRight: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    marginBottom: 8,
    color: Colors.beige,
    fontFamily: "Cormorant-Bold",
    textAlign: "left",
  },
  cta: {
    // textDecorationLine: "underline",
    color: "#fff",
  },
});

export default Login;
