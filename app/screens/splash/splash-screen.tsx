import React, { FC, Component, useEffect } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  Text,
  Pressable,
  I18nManager,
} from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen, GradientBackground, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators/app-navigator"
import { async } from "validate.js"
import { loadString } from "../../utils/storage"
import "./../../i18n"
import { useTranslation } from "react-i18next"

const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const BOWSER: ImageStyle = {
  flex: 1,
  maxWidth: "100%",
  maxHeight: "50%",
  width: 343,
  height: 230,
}

const Title: TextStyle = {
  fontSize: 26,
  color: "red",
  fontWeight: "bold",
  marginTop: 20,
}

export const SplashScreen: FC<StackScreenProps<NavigatorParamList, "splash">> = observer(
  ({ navigation }) => {
    const { i18n } = useTranslation()
    useEffect(() => {
      loadString("locale")
        .then(async (val) => {
          console.log(val)
          i18n.changeLanguage(val)
        })
        .catch((e) => console.log(e))
    }, [])

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("walk_through")
        console.log("after")
      }, 5000)
    }, [])

    // document.addEventListener("componentUnmount",doOnunmount)

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <View testID="SplashScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Image source={bowserLogo} style={BOWSER} />
          <Text style={Title}>DigitalNet Code Base </Text>
        </Screen>
        <View></View>
      </View>
    )
  },
)
