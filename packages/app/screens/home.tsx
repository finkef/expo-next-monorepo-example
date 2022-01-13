import "react-native-tailwind.macro"
import { View, Text, TouchableOpacity } from "react-native"
import { useRouter } from "../navigation"

export const HomeScreen = () => {
  const router = useRouter()

  console.log("Rendering home")

  return (
    <View tw="flex-1 bg-pink-200 justify-center items-center">
      <Text tw="font-bold">Home</Text>

      <TouchableOpacity
        tw="px-8 py-4 rounded-xl bg-blue-800"
        onPress={() => router.push("/profile")}
      >
        <Text tw="text-white">Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
