import "react-native-tailwind.macro"
import { View, Text, TouchableOpacity } from "react-native"
import { Link } from "expo-next-react-navigation"
import { useRouter } from "../navigation"

export const HomeScreen = () => {
  const router = useRouter()

  return (
    <View tw="flex-1 bg-pink-200 justify-center items-center">
      <Text tw="font-bold">Home</Text>

      <TouchableOpacity
        tw="p-8 bg-blue-800"
        onPress={() => router.push("/profile")}
      >
        <Text tw="text-white">Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
