import {Image} from 'react-native'

const LogoTitle = (props) => {
  let iconImagePath
  if (props.title == "Home"){
    iconImagePath = require('../assets/home.png')
  }
  return (
    <Image
      style = {{width:40,height:40}}      
      source = {iconImagePath}
    />
  )
  
}

export default LogoTitle