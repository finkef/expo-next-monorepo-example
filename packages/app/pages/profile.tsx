import { createStackNavigator } from "app/navigation/create-stack-navigator"
import { HomeScreen } from "app/screens/home"
import { HomeStackParams } from "app/navigation/types"
import { navigatorScreenOptions } from "app/navigation/navigator-screen-options"
import { ProfileScreen } from "../screens/profile"

const HomeStack = createStackNavigator<HomeStackParams>()

export function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={navigatorScreenOptions}>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Home", headerTitle: "Hello World" }}
      />
      <HomeStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Profile", headerTitle: "Profile" }}
      />
    </HomeStack.Navigator>
  )
}
