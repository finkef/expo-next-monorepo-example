import "react-native-tailwind.macro"
import React from "react"
import { enableScreens } from "react-native-screens"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Navigation } from "app/navigation"

enableScreens(true)

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView tw="flex-1">
        <StatusBar style="dark" />
        {/* <Navigation /> */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
