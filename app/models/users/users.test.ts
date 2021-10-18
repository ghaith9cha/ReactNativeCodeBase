import { UsersModel } from "./users"

test("can be created", () => {
  const instance = UsersModel.create({})

  expect(instance).toBeTruthy()
})
