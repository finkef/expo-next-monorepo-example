import "react-native-tailwind.macro"
import { View, Text } from "react-native"

export function HelloWorld() {
  return (
    <View tw="flex-1 justify-center items-center bg-blue-500 bg-custom">
      <Text tw="font-bold">Hello, World!</Text>
    </View>
  )
}
