import Logo from "./Logo"
import Navigator from "./Navigator" 

import './Header.css'

const Header = () => {
  return (
    <div className="header">
    <Navigator titleNavigator="HOME"/>
    <Navigator titleNavigator="ABOUT"/>
    <Navigator titleNavigator="SERVICES"/>
    <Logo />
    <Navigator titleNavigator="TESTIMONIALS"/>
    <Navigator titleNavigator="CONTACT"/>
    <Navigator titleNavigator="SEARCH"/>
    </div>
  )
}

export default Header