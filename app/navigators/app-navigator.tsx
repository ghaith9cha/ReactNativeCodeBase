/* eslint-disable react/display-name */
/* eslint-disable react-native/no-inline-styles */
/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, { createContext, useContext, useEffect, useState } from "react"
import {
  Button,
  I18nManager,
  Image,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  CalenderScreen,
  DashboardScreen,
  FilesScreen,
  ForgotPasswordScreen,
  MapsScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
  SettingScreen,
  SplashScreen,
  WalkThroughScreen,
} from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { navigationRef } from "./navigation-utilities"
import { LoginScreen } from "../screens/login/login-screen"
import { RegisterScreen } from "../screens/register/register-screen"
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer"
import { color, color as color1 } from "../theme"
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableOpacity } from "react-native-gesture-handler"
import "./../i18n"
import { useTranslation } from "react-i18next"
import { saveString } from "../utils/storage"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */


export type NavigatorParamList = {
  splash: undefined
  walk_through: undefined
  login: undefined
  register: undefined
  TabsScreen: undefined
  drawerScreen: undefined
  DashBoard: undefined
  Setting: undefined
  forgot_password: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed"

  switch (routeName) {
    case "Profile":
      return "Profile"
    case "Setting":
      return "Setting"
    case "DashBoard":
      return "DashBoard"
    case "Search":
      return "Search"
    case "Notification":
      return "Notification"
  }
}

const NavigationDrawerStructure = (props) => {
  // Structure for the navigatin Drawer
  const toggleDrawer = () => {
    // Props to open/close the drawer
    props.navigationProps.toggleDrawer()
  }

  return (
    <View style={{ flexDirection: "row", marginLeft: 20 }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/* Donute Button Image */}
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const Tabs = createBottomTabNavigator()
console.log("HELLLO")
const screenOptions = (route, color) => {
  let iconName

  switch (route.name) {
    case "DashBoard":
      iconName = "home-outline"
      break
    case "Notification":
      iconName = "notifications-outline"
      break
    case "Profile":
      iconName = "person-outline"
      break

    case "Setting":
      iconName = "settings-outline"
      break

    case "Search":
      iconName = "search-outline"
      break
    case "Calender":
      iconName = "calendar-outline"
      break
    case "Maps":
      iconName = "map-outline"
      break
    case "Files":
      iconName = "document-outline"
      break
    default:
      break
  }

  return <Icon name={iconName} color={color} size={24} />
}

const TabsScreen = () => {
  const { t } = useTranslation()

  return (
    <Tabs.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitle: getHeaderTitle(route),

        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        tabBarStyle: { backgroundColor: color1.palette.offWhite },

        headerStyle: {
          height: 100,
          backgroundColor: color.palette.lightGrey,
        },
        tabBarIcon: ({ color }) => screenOptions(route, "red"),
      })}
      initialRouteName={"DashBoard"}
    >
      <Tabs.Screen
        name={"Notification"}
        component={NotificationScreen}
        options={{ title: t("Notification") }}
      />
      <Tabs.Screen name={"Search"} component={SearchScreen} options={{ title: t("Search") }} />
      <Tabs.Screen
        name={"DashBoard"}
        component={DashboardScreen}
        options={{ title: t("DashBoard") }}
      />
      <Tabs.Screen name={"Setting"} component={SettingScreen} options={{ title: t("Setting") }} />
      <Tabs.Screen name={"Profile"} component={ProfileScreen} options={{ title: t("Profile") }} />
    </Tabs.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const DrawerScreen: React.FC = () => {
  const window = useWindowDimensions()
  const { t, i18n } = useTranslation()

  return (
      <Drawer.Navigator
        initialRouteName="DashBoard"
        screenOptions={({ route }) => ({
          headerShown: true,
          drawerPosition: "left",
          headerStyle: {
            height: 100,
            backgroundColor: color.palette.lightGrey,
          },
          drawerStyle: {
            backgroundColor: color.palette.lightGrey,
          },
          drawerType: "back",
          sceneContainerStyle: {
            elevation: 24,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          },
          drawerLabelStyle: {
            fontSize: 14,
            alignSelf: i18n.language === "ar" ? "flex-end" : "flex-start",
          },
          edgeWidth: "75%",
          overlayColor: "transparent",
          drawerIcon: ({ color }) => screenOptions(route, "red"),
        })}
        drawerContent={(props) => {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ padding: 16, marginTop: 30 }}>
                <Image source={require("./userImage.jpeg")} style={styles.drawerAvatarStyle} />
                <Text style={styles.userName}>Chris Hemsworth</Text>
              </View>

              <DrawerItemList {...props} />

              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Button
                  onPress={() => {
                    saveString("locale", "ar")
                    i18n.dir("rtl")
                    // I18nManager.forceRTL(true)
                    i18n.changeLanguage("ar").then(() => {
                      // I18nManager.forceRTL(i18n.language === 'ar');
                    })
                  }}
                  title="Arabic"
                  color={color.palette.angry}
                />

                <View
                  style={{
                    height: "100%",
                    width: 1,
                    backgroundColor: color.palette.black,
                    marginHorizontal: 3,
                  }}
                />

                <Button
                  onPress={async () => {
                    saveString("locale", "en")
                    i18n.dir("ltr")
                    // I18nManager.forceRTL(false)
                    i18n.changeLanguage("en").then(() => {
                      // I18nManager.forceRTL(i18n.language === 'ar');
                    })
                  }}
                  title="English"
                  color={color.palette.angry}
                />
              </View>
            </SafeAreaView>
          )
        }}
      >
        <Drawer.Screen
          name={"DashBoard"}
          component={TabsScreen}
          options={{ headerShown: false, title: t("DashBoard") }}
        />
        <Drawer.Screen
          name={"Calender"}
          component={CalenderScreen}
          options={{ headerShown: false, title: t("Calender") }}
        />
        <Drawer.Screen
          name={"Maps"}
          component={MapsScreen}
          options={{ headerShown: false, title: t("Maps") }}
        />
        <Drawer.Screen
          name={"Files"}
          component={FilesScreen}
          options={{ headerShown: false, title: t("Files") }}
        />
      </Drawer.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash"
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="walk_through" component={WalkThroughScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="forgot_password" component={ForgotPasswordScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="drawerScreen" component={DrawerScreen} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  return (
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["splash"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
