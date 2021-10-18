// import { Instance, SnapshotOut, types } from "mobx-state-tree"
// import { UserModel } from ".."

// /**
//  * Model description here for TypeScript hints.
//  */
// export const UsersModel = types
//   .model("Users")
//   .props({
//     users: types.optional(types.array(UserModel), [])
//   })
//   .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
//   .actions((self) => ({
//   })) // eslint-disable-line @typescript-eslint/no-unused-vars

// type UsersType = Instance<typeof UsersModel>
// export interface Users extends UsersType { }
// type UsersSnapshotType = SnapshotOut<typeof UsersModel>
// export interface UsersSnapshot extends UsersSnapshotType { }
// export const createUsersDefaultModel = () => types.optional(UsersModel, {})
