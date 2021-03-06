import React from "react"
import { Footer as BaseFooter, FooterTab, Button, Text } from "native-base"

type Props = {
  currentRoute: string
  onPressHome: () => boolean
  onPressAccount: () => boolean
}

export const Footer = ({ currentRoute, onPressHome, onPressAccount }: Props) => {
  return (
    <BaseFooter>
      <FooterTab>
        <Button active={currentRoute === "Home"} onPress={onPressHome}>
          <Text>Home</Text>
        </Button>
        <Button active={currentRoute === "Account"} onPress={onPressAccount}>
          <Text>Account</Text>
        </Button>
      </FooterTab>
    </BaseFooter>
  )
}
