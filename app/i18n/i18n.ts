import * as Localization from "expo-localization"
import i18n from "i18n-js"
import en from "./en.json"
import ja from "./ja.json"
import ar from './ar.json'

i18n.fallbacks = true
i18n.translations = { en, ja, ar }
i18n.locale="en"
/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */


//  export const loadLocale = async () => {
//   for (const locale of Localization.locales) {
//     if (i18n.translations[locale.languageCode] !== null) {
//       i18n.locale = locale.languageCode
//       switch (locale.languageCode) {
//         case 'en':
//           import('./en.json').then(en => {
//             i18n.translations = { en }
//           })
//           break
//         default:
//         case 'ar':
//           import('./ar.json').then(ar => {
//             i18n.translations = { ar }
//           })
//           break
//       }
//       break
//     }
//   }
// }

type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]


export default i18n