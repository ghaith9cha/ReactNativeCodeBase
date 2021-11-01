import i18n from "i18next"
// import { useEffect } from "react";
import { initReactI18next } from "react-i18next"
// import { loadString } from "../utils/storage";
// useEffect(() => {
//   loadString("locale").then((val) => {
//     lang = val
//   })
// }, [])
const resources = {
  en: {
    translation: {
      email: "Email..",
      password: "Password...",
      login: "login",
      or_login_using: "or Login Using",
      create_an_account: "Create An Account",
      signup: "Sign Up",
      forgot_password: "Forgot password?",
      register_now: "Register Now!",
      full_name: "Full Name",
      confirm_password: "Confirm Password",
      sign_up: "SignUp",
      already_have_email: "Already Have Email",
      welcome: "Welcome!",
      submit: "submit",

      next: "Next",
      previos: "Previos",
      skip: "Skip",

      Profile: "Profile",
      Setting: "Setting",
      DashBoard: "DashBoard",
      Search: "Search",
      Notification: "Notification",
      Calender: "Calender",
      Maps: "Map",
      Files: "FIles",
    },
  },
  ar: {
    translation: {
      email: "البريد الالكتروني",
      password: "كلمة السر",
      login: "تسجيل الدخول",
      or_login_using: "تسجيل الدخول بواسطة",
      create_an_account: "انشاء حساب؟",
      signup: "تسجيل",
      forgot_password: "نسيت كلمة السر؟",
      submit: "ارسال",
      register_now: "تسجيل الدخول الان",

      full_name: "الاسم الكامل",
      confirm_password: "تاكيد كلمة السر",
      sign_up: "تسجيل",
      already_have_email: "لديك حساب سابق؟",
      welcome: "مرحبا بك!",

      next: "التالي",
      previos: "السابق",
      skip: "تخطي",

      Profile: "الملف الشخصي",
      Setting: "الاعدادات",
      DashBoard: "اللوحة العامة",
      Search: "البحث",
      Notification: "الاشعارات",
      Calender: "التقويم",
      Maps: "الخريطة",
      Files: "الملفات",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
