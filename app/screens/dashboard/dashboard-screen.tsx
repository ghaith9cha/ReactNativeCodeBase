import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
// import AxisLineChartScreen from "./AxisLineChartScreen"


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const DashboardScreen = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">

   <Text>dsk</Text>
    </Screen>
  )
})
