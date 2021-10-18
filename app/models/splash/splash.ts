import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const SplashModel = types
  .model("Splash")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type SplashType = Instance<typeof SplashModel>
export interface Splash extends SplashType {}
type SplashSnapshotType = SnapshotOut<typeof SplashModel>
export interface SplashSnapshot extends SplashSnapshotType {}
export const createSplashDefaultModel = () => types.optional(SplashModel, {})
