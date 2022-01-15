import React , { useState }from "react";
import { Text,TouchableOpacity,Image,View, StyleSheet} from "react-native"

import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"


const App = () => {

  const [uri1, setUri1] = useState(DiceThree);
  const [uri2, setUri2] = useState(DiceThree);

  const dice1Rolled = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;

      default:
        setUri1(DiceOne);
        break;
    }
  };

  const dice2Rolled = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;

      default:
        setUri2(DiceOne);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={dice1Rolled}>
          <Image source={uri1}/>
          {/* <Text style={styles.text}>roll the dice</Text> */}
        </TouchableOpacity>

         <TouchableOpacity onPress={dice2Rolled}>
          <Image source={uri2}/>
          {/* <Text style={styles.text}>roll the dice</Text> */}
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6b6b68",
  },

  // text: {
  //   fontSize: 30,
  //   color: "#dec535",
  //   fontWeight : "bold",
  //   marginTop: 50,
  //   textTransform: "uppercase",
  //   borderColor: "#23aac2",
  //   borderRadius: 25,
  //   borderWidth: 2,
  //   paddingHorizontal: 25,
  //   paddingVertical : 15,
  // }

})