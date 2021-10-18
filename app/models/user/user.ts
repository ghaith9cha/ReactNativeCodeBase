import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    id: types.identifierNumber,
    name: types.string,
    password: types.string
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveUser: (id: number, name: string, password: string) => {
      self.id = id,
        self.name = name,
        self.password = password
    },
    
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>
export interface User extends UserType { }
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType { }
export const createUserDefaultModel = () => types.optional(UserModel, {})
