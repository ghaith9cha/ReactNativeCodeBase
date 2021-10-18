import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, TextInput, TouchableOpacity, StatusBar } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { styles } from './styles'
import { ScrollView } from "react-native-gesture-handler"
import { t } from "i18n-js"



const ROOT: ViewStyle = {
  backgroundColor: color.palette.orangeDarker,
  flex: 1,
  paddingTop: 30
}

export const RegisterScreen = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (



    <ScrollView style={{ flex: 1, backgroundColor: color.palette.orangeDarker }}>

      <StatusBar
        translucent={true}
        backgroundColor={color.palette.orangeDarker}
        barStyle={'light-content'}
      />

      <Screen style={ROOT} preset="scroll">


        <View style={styles.viewTitle}>
          <Text style={styles.title}>DIGITAL LAB CODE BASE</Text>
        </View>

        <View style={styles.logoView}>
          <Image
            source={require('./nizarLogo.png')}
            style={styles.logo}
          />
        </View>




        <View style={styles.viewConent}>

          <TextInput
            style={styles.email}
            placeholder={t('register.full_name')}
          />

          <TextInput
            style={styles.email}
            placeholder={t('register.email')}
            keyboardType="email-address"
          />
          <TextInput
            placeholder={t('register.password')}
            secureTextEntry={true}
            style={styles.passowrd}
          />

          <TextInput
            placeholder={t('register.confirm_password')}
            secureTextEntry={true}
            style={styles.passowrd}
          />

          <TouchableOpacity style={styles.signUpButton}>
            <Text>{t('register.sign_up')}</Text>
          </TouchableOpacity>

          <Text
            style={{ marginTop: 20 }}
            text={t('register.already_have_email')} />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login')
            }}
            style={styles.loginButton}>
            <Text>{t('register.login')} </Text>
          </TouchableOpacity>


        </View>




        <View>

        </View>


      </Screen>
    </ScrollView>
  )
})
