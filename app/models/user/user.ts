import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { I18nManager } from "react-native"
import { withEnvironment } from ".."
import i18n from "../../i18n/i18n"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    email: "",
    id: types.optional(types.number, 0),
    password: types.maybe(types.string),
    language: types.maybe(types.string),
  })
  .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    login: flow(function* () {
      const result = yield self.environment.api.login(self.email, self.password)
      if (result.kind === "ok") {
        self.id = result.user.id
        self.email = result.user.email
        return "ok"
      }
    }),
    changeLanguage: () => {
      if (self.language === "en") {
        // I18nManager.forceRTL(true)
        i18n.locale = "ar"
      } else {
        // I18nManager.forceRTL(false)
        i18n.locale = "en"
        I18nManager.getConstants()
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
