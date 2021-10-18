import { SplashModel } from "./splash"

test("can be created", () => {
  const instance = SplashModel.create({})

  expect(instance).toBeTruthy()
})
