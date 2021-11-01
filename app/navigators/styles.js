/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  avatarShadow: {
    elevation: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  divider: {
    backgroundColor: "darkgrey",
    height: "100%",
    // opacity: 0.6,
  },
  drawerAvatarStyle: {
    aspectRatio: 1,
    borderRadius: 200,
    height: 100,
    marginBottom: 20,
    width: 10,
  },
  drawerRowContentContainer: {
    flexDirection: "row",
    padding: 8,
    paddingHorizontal: 16,
    position: "absolute",
  },
  drawerRowStyle: {
    justifyContent: "center",
    marginHorizontal: 0,
    overflow: "hidden",
    paddingVertical: 8,
  },
  drawerRowTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  drawerRowbackViewStyle: {
    borderBottomStartRadius: 0,
    borderRadius: 24,
    borderTopStartRadius: 0,
    height: 48,
    opacity: 0.3,
  },
  drawerSceneContainer: {
    elevation: 24,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  signOutBtnStyle: {
    borderColor: "darkgrey",
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    padding: 16,
  },
  userName: {
    color: "grey",
    fontFamily: "WorkSans-SemiBold",
    fontSize: 18,
    marginBottom: 20,
    paddingTop: 4,
  },
})
