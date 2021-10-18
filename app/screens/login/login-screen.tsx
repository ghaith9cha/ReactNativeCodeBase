import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { styles } from './styles'
import { TextInput } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons';
import I18n, { t } from "i18n-js"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  flex: 1,

}


export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  const rootStore = useStores()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">

      <View style={styles.viewTitle}>
        <Text style={styles.title}>DigitalLab CodeBase</Text>
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
          placeholder={t('login.email')}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder={t('login.password')}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.passowrd}
        />

        <TouchableOpacity style={styles.loginButton}
          onPress={() => {
            rootStore.characterStore.saveCharacters([{ id: 1, name: email, password: password }]),

              setEmail('')
            setPassword('')
            navigation.navigate('drawerScreen')
          }}
        >
          <Text>{t('login.login')}</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 30 }}>
        {t('login.or_login_using')}
        </Text>


        <View style={styles.iconsView}>
          <Icon
            name="logo-google"
            size={30}
          />

          <Icon
            name="logo-facebook"
            size={30}
          />
        </View>
        <Text style={{ marginVertical: 10 }}>
        {t('login.create_an_account')}
        </Text>

        <View style={styles.signUpBorder}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('register')
          }}>
            <Text style={styles.signUp}>
            {t('login.signup')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
})
