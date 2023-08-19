import { Text, View,SafeAreaView, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native'
import React, { Component } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconicIcon from "react-native-vector-icons/Ionicons"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Model from './Model';
interface Iprops{

}
interface Istate{
model:boolean,
mickon:boolean,
recordedData:{
    text:string,

}[]
}

export class Home extends Component<Iprops,Istate> {
constructor(props:Iprops) {
  super(props)

  this.state = {
     model:false,
     mickon:true,
     recordedData:[{
      
        text:""
     }]
  }
}
remove=()=>{
    this.setState({model:false})
}
addInText=(text:string)=>{
let {recordedData}=this.state;
this.setState({recordedData:[...recordedData,{text}]})

}
  render() {
    const {model,recordedData}=this.state;
    return (
    <SafeAreaView style={styles.platfornandroid}>
      <View style={styles.container}>

        <View>
            <Text style={styles.heading}>Recorded Data</Text>
        </View>
        
        {model?<View testID='model'><Model 
        remove={this.remove} 
        addInText={this.addInText}
           
        /></View>:<View>
        <View
        style={styles.flatListitem}
        >
            
        <FlatList
        data={recordedData}
        testID='flatlist'
        renderItem={({item})=>{
            return (<View style={item?.text!==""&&styles.currentTextParent}>
                
                <Text style={styles.currentText}>{item?.text}</Text>
            </View>)
        }}
        />
        </View>
        <TouchableOpacity
        onPress={()=>this.setState({model:true})}
        style={styles.openrecorder}
        testID='openRender'
        >
            <Text style={styles.onrecordText}>Open Recorder</Text>
        </TouchableOpacity>
        </View> }
        
        
      </View>
    </SafeAreaView>
    )
  }
}

export default Home;

export const styles=StyleSheet.create({
    heading:{
        fontSize:hp(4),
        color:"#000",
        fontWeight:"700",
        marginLeft:wp(2),
        marginTop:hp(1),
        
    },
    container:{
        backgroundColor:"#85E6C5",
        height:hp(100)
    },
    model:{
      alignItems:"center",
      justifyContent:"center",
    
    
    },
    platfornandroid:{
        marginTop:hp(2)
    },
    innerContainer:{
        backgroundColor:"#fff",
        width:wp(90),
        borderRadius:hp(2),
        elevation:20,
        paddingBottom:hp(10)
    },
    middlecircle:{
        height:hp(20),
        width:hp(20),
        backgroundColor:"#85E6C577",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:90,
        marginTop:hp(3.5)
    },
    mick:{
        alignSelf:"center"
    },
    recordheading:{
        color:"#000",
        fontSize:hp(3),
        alignSelf:"center",
        fontWeight:"700",
        marginTop:hp(1)
    },
    cross:{
        alignSelf:"flex-end"
    },
    flatListitem:{
        height:hp(70),
        margin:hp(2)
    },
    openrecorder:{
        width:wp(40),
        backgroundColor:"#279EFF",
        alignItems:"center",
        justifyContent:"center",
        height:hp(5),
        alignSelf:"center",
        borderRadius:hp(1)
    },
    onrecordText:{
        fontSize:hp(2.5),
        fontWeight:"600"
    },
    currentText:{
        color:"#000",
        fontSize:hp(2),
        fontWeight:"600",
        alignSelf:"center",
        marginVertical:hp(1.4),

    },
    currentTextParent:{
       borderWidth:hp(0.5),
       borderColor:"#fff",
       borderRadius:hp(2),
       marginTop:hp(1)
    }
})