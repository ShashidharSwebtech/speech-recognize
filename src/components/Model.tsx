import { Text, View,SafeAreaView,Modal, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native'
import React, { Component } from 'react'
import { styles } from './Home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconicIcon from "react-native-vector-icons/Ionicons"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Voice from '@react-native-voice/voice';
interface Props{
    remove:()=>void,
    addInText:(text:string)=>void,
    testID?:string
}
interface state{
    mickon:boolean,
    currentText:string
}
export class Model extends Component<Props,state> {
constructor(props:Props) {
  super(props)

  this.state = {
     mickon:true,
     currentText:""
  }
  Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
  Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
  Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
}

  onSpeechStartHandler=(value:any)=>{

  }
  onSpeechEndHandler=(value:any)=>{
  
  }
  onSpeechResultsHandler=(value:any)=>{
    this.setState({currentText:value.value[0]})
    console.log("value",value)

  }
  onStartButtonPress=()=>{
    Voice.start('en-US');
  }
// onStopButtonPress=()=>{
//     Voice.stop()
// }
  render() {
    const {mickon,currentText}=this.state;
    
    return (
        <View style={styles.model}>
        <View style={styles.innerContainer}>
        <TouchableOpacity
        testID='remove'
        onPress={()=>{
          if(currentText=="")
            this.props.remove()
          else 
          Alert.alert("Either add or remove the data")
        }}
        style={style.crossbtn}
        >
            <FontAwesomeIcon 
            style={styles.cross}
            name="remove" 
            size={hp(4)}
             color="#000"/>
      </TouchableOpacity>
            <Text style={styles.recordheading}>Record Your Audio</Text>
            <View style={styles.middlecircle}>
                <View style={[styles.middlecircle,{ 
                    height:hp(14),
        width:hp(14),
     
        marginTop:0
        }]}>
            <TouchableOpacity
            testID='start'
            onPress={()=>{
                // this.setState({mickon:!mickon})
                // if(mickon)
                    this.onStartButtonPress()
                // else
                //   this.onStopButtonPress()
            }}

            >
            <IconicIcon
             name={mickon?"mic-circle-outline":"mic-off-circle-outline"} 
             size={hp(8)}
             style={styles.mick}
             color={"#fff"}
             />
            
             </TouchableOpacity>
                </View>
            </View>
           <View>
            <View style={[styles.currentTextParent,currentText!==""&&{borderColor:"#000",marginHorizontal:wp(2),marginTop:hp(4)}]}>
                <Text style={styles.currentText}>{currentText}</Text>
            </View>
           </View>
           <View style={style.addRetack}>
            <TouchableOpacity style={style.addbtn}
            testID='addInText'
            onPress={()=>{
              this.props.addInText(currentText)
            this.setState({currentText:""})
            }}
            >
               <Text style={style.text}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.addbtn,{backgroundColor:"red"}]}
            testID='Retake'
            onPress={()=>{
              // this.setState({mickon:!mickon})
              // if(mickon)
                  this.onStartButtonPress()
              // else
              //   this.onStopButtonPress()
          }}
            >
               <Text style={style.text}>Retake</Text>
            </TouchableOpacity>
         
           </View>
           <TouchableOpacity
           onPress={()=>this.setState({currentText:""})}
           style={[style.addbtn,style.clear]}
           testID='currentTextbtn'
           >
               <Text style={style.text}>Clear</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
}

export default Model;

const style=StyleSheet.create({
addRetack:{
flexDirection:"row",
justifyContent:"space-between",
marginHorizontal:wp(2.5),
marginTop:hp(1)
},
addbtn:{
    width:wp(20),
    height:hp(5),
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue",
    borderRadius:hp(2),
    
},
text:{
    color:"#fff",
    fontSize:hp(2),
    fontWeight:"600"
},
clear:{
backgroundColor:"#322653",
width:wp(80),
alignSelf:"center",
marginTop:hp(2)
},
crossbtn:{
marginTop:hp(1.5),
marginRight:wp(4)
// position:"absolute",
// right:wp(2),
// top:hp(1)
}
})

