import "raf/polyfill"
import "react-native-tailwind.macro"

// @ts-ignore
global.setImmediate = requestAnimationFrame
import "setimmediate"

import { SafeAreaProvider } from "react-native-safe-area-context"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Head from "next/head"
import { AppProps } from "next/app"
import { ServerContainer } from "../server-container"
import { Navigation } from "app/navigation"
import { Header, HeaderBackButton } from "@react-navigation/elements"

export default function App({ Component, pageProps, router }: AppProps) {
  const { backToUrl } = Component as any

  const canGoBack = !!backToUrl

  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <SafeAreaProvider
        initialMetrics={{
          insets: { top: 0, bottom: 0, left: 0, right: 0 },
          frame: undefined as any,
        }}
      >
        <GestureHandlerRootView tw="flex-1">
          <Header
            title="Hello"
            headerLeft={function headerLeft() {
              const prevUrl =
                typeof backToUrl == "function" ? backToUrl() : backToUrl
              const onPress = () => {
                if (canGoBack) {
                  router.back()
                } else {
                  router.replace(prevUrl)
                }
              }
              return (
                (!!prevUrl || canGoBack) && (
                  <HeaderBackButton onPress={onPress} />
                )
              )
            }}
          />
          <Component {...pageProps} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  )
}
