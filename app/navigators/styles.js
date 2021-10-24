import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    userName: {
        fontSize: 18,
        color: 'grey',
        fontFamily: 'WorkSans-SemiBold',
        paddingTop: 4,
        marginBottom:20
    },
    drawerRowStyle: {
        marginHorizontal: 0,
        paddingVertical: 8,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    drawerRowbackViewStyle: {
        opacity: 0.3,
        height: 48,
        borderRadius: 24,
        borderTopStartRadius: 0,
        borderBottomStartRadius: 0,
    },
    drawerRowTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
    },
    drawerRowContentContainer: {
        flexDirection: 'row',
        padding: 8,
        paddingHorizontal: 16,
        position: 'absolute',
    },
    drawerAvatarStyle: {
        width: 10,
        height: 100,
        aspectRatio: 1,
        borderRadius: 200,
        marginBottom:20
    },
    avatarShadow: {
        elevation: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
    },
    divider: {
        backgroundColor: 'darkgrey',
        height: StyleSheet.hairlineWidth,
        // opacity: 0.6,
    },
    signOutBtnStyle: {
        flexDirection: 'row',
        padding: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'darkgrey',
    },
});