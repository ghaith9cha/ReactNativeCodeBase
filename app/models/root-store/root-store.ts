import { Instance, SnapshotOut, types } from "mobx-state-tree"
// import { UserModel } from "../"
import { CharacterStoreModel } from "../character-store/character-store"

/**
 * A RootStore model.
 */
// prettier-ignore
// export const RootStoreModel = types.model("RootStore").props({
//   UserModel: types.optional(UserModel, {} as any),
// })

export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  // user: types.optional(UserModel,{} as any),
  
  
  // languageStore: types.optional(UserModel,{} as any),

})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
