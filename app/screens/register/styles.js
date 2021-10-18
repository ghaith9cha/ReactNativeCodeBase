import { StyleSheet } from 'react-native';
import { I18nManager } from 'react-native';

export const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: "80%",
    marginTop: 30,
  },

  passowrd: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: "80%",
    marginTop: 35,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    
  },

  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewConent: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  signUpButton: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa0a00',
    marginTop: 40,
  },
  iconsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '20%',
    marginTop: 30

  },
  logo: {
    width: '35%',
    height: undefined,
    aspectRatio: 1,
    marginTop: 30,
    borderRadius: 90,
  },
  logoView: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  signUp: {
    fontSize: 20,
    marginTop: 15,
    alignItems: 'center',
    alignSelf: 'center'
  },
  signUpBorder: {
    padding: 5,
  },
  loginButton: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a0400',
    marginTop: 20,
  }

})