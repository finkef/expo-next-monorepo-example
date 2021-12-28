import * as Linking from "expo-linking"
import { NavigationContainer, getPathFromState } from "@react-navigation/native"
import { HomeStackParams } from "./types"

type Props = React.ComponentProps<typeof NavigationContainer>["linking"]

function makeHomeStackPath<Path extends keyof HomeStackParams>(
  path: Path
): Path {
  return path
}

function makeType<T>(t: T) {
  return t
}

const homeStackPaths = makeType({
  home: makeHomeStackPath("home"),
  profile: makeHomeStackPath("profile"),
})

export const linking: Props = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [homeStackPaths.home]: {
        path: "",
      },
      [homeStackPaths.profile]: {
        path: "profile",
      },
    },
  },
  getPathFromState(state, options) {
    if (
      !state.routes[state.index].path ||
      state.routes[state.index].path === "/"
    )
      return "/"

    return getPathFromState(state, options)
  },
}
