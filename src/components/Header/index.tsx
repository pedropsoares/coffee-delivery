import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"
import { MapPin, ShoppingCart } from "phosphor-react"

import coffeeLogo from "../../assets/logo.svg"

export function Header() {

  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Porto Alegre, RS
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}