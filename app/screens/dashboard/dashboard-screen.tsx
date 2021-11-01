import React from "react"
import { observer } from "mobx-react-lite"
import { Image, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { styles } from "./styles"
import AxisLineChartScreen from "./AxisLineChartScreen"
import BarChartScreen from "./BarChartScreen"
import { ScrollView } from "react-native-gesture-handler"
import PieChartScreen from "./PieChartScreen"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const DashboardScreen = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  const rootStore = useStores()
  const tt = new Date().toISOString()
  console.log(tt)
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={styles.logoView}>
        <Image source={require("./BackGround.jpg")} style={styles.logo} />
      </View>

      <View style={{ flexDirection: "row", marginTop: 0 }}>
        <View style={{ height: 200, width: 200, marginLeft: 10, flexDirection: "row" }}>
          <AxisLineChartScreen />
        </View>

        <View style={{ height: 200, width: 400, marginLeft: 10, flexDirection: "row" }}>
          <BarChartScreen />
        </View>
      </View>
      <View style={{ height: 300 }}>
        <PieChartScreen />
      </View>
    </ScrollView>
  )
})
