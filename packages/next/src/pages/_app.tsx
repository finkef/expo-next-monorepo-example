import "raf/polyfill"

// @ts-ignore
global.setImmediate = requestAnimationFrame
import "setimmediate"

import { SafeAreaProvider } from "react-native-safe-area-context"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Head from "next/head"
import { AppProps } from "next/app"
import { ServerContainer } from "../server-container"
import { Navigation } from "app/navigation"

export default function App({ Component, pageProps }: AppProps) {
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
      <ServerContainer>
        <SafeAreaProvider
          initialMetrics={{
            insets: { top: 0, bottom: 0, left: 0, right: 0 },
            frame: undefined as any,
          }}
        >
          <GestureHandlerRootView tw="flex-1">
            <Navigation Component={Component} pageProps={pageProps} />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ServerContainer>
    </>
  )
}
