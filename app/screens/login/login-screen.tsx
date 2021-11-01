import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image, TouchableOpacity, StatusBar } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Ionicons"
import RNRestart from "react-native-restart"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import * as Animatable from "react-native-animatable"
import Feather from "react-native-vector-icons/Feather"
import { LinearGradient } from "expo-linear-gradient"
import { Colors } from "react-native-paper"
import "./../../i18n"
import { useTranslation } from "react-i18next"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  flex: 1,
}

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  const rootStore = useStores()
  const t = useTranslation().t

  const [data, setData] = React.useState({
    username: "",
    passowrd: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isvValidPassword: true,
  })

  const textInputChange = (val) => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let valid = pattern.test(String(val).toLowerCase())
    if (valid) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      })
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      })
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        passowrd: val,
        isvValidPassword: true,
      })
    } else {
      setData({
        ...data,
        passowrd: val,
        isvValidPassword: false,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const handleValidUser = (val) => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let valid = pattern.test(String(val).toLowerCase())

    if (valid) {
      setData({
        ...data,
        isValidUser: true,
      })
    } else {
      setData({
        ...data,
        isValidUser: false,
      })
    }
  }

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: color.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: Colors.lightBlue500,
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={color.palette.lightGrey} size={20} />
          <TextInput
            placeholder={t("email")}
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: color.palette.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: Colors.lightBlue500,
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={color.palette.lightGrey} size={20} />
          <TextInput
            placeholder={t("password")}
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: color.palette.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isvValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
          </Animatable.View>
        )}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("forgot_password")
          }}
        >
          <Text style={{ color: "#009387", marginTop: 15 }}>{t("forgot_password")}</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              // rootStore.user.emai = data.username,
              //   rootStore.user.passowrd = data.passowrd,
              //   rootStore.user.login
              // if (rootStore.user.id !== null) {
              //   navigation.navigate( t('navigator.DashBoard') )
              // }
              navigation.navigate("drawerScreen")
            }}
          >
            <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                {t("login")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              {t("signup")}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
})
