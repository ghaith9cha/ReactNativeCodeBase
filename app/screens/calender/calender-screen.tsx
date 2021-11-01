import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Agenda } from "react-native-calendars"
import AgendaScreen1 from "./index"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const CalenderScreen = observer(function CalenderScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <AgendaScreen1 />
    </Screen>
  )
})
