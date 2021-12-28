import React, { useMemo } from "react"
import { ServerContainer as RNServerContainer } from "@react-navigation/native"
import { useRouter } from "next/router"

export const ServerContainer: React.FC = ({ children }) => {
  const router = useRouter()
  const initialLocation = useMemo(
    () => ({
      pathname: router.pathname,
      search: router.asPath.split(/\?/)[1] ?? "",
    }),
    []
  )

  if (typeof window === "undefined")
    return (
      <RNServerContainer location={initialLocation}>
        {children}
      </RNServerContainer>
    )

  return <>{children}</>
}
