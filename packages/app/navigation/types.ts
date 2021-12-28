import type { NextComponentType, NextPageContext } from "next"

export type HomeStackParams = {
  home: undefined
  profile: { user?: unknown }
}

type NextPageProps = any
export type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>
  pageProps?: NextPageProps
}
