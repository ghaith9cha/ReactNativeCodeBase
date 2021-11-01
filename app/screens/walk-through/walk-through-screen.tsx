import React from "react"
import { observer } from "mobx-react-lite"

import WalkThroughScreen1 from "./index"
import { useNavigation } from "@react-navigation/core"
import "./../../i18n"
import { useTranslation } from "react-i18next"

export const WalkThroughScreen = observer(function WalkThroughScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <>
      <WalkThroughScreen1 slider1ActiveSlide={1} navigation={navigation} t={t} />
    </>
  )
})

const styles = {
  backgroundColor: "#eee",
  card: {
    borderColor: "#ddd",
  },
  dotStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
  inactiveDotStyle: {
    backgroundColor: "#ddd",
  },
}
