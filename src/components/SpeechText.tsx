import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import { styles } from './Home';
interface Iprops{
  recordedData:{text:string}[],
  setmodel:()=>void
}
export class SpeechText extends Component<Iprops> {
  render() {
    const {recordedData, setmodel}=this.props
    return (
      <View>
       <View style={styles.flatListitem}>
                <FlatList
                  data={recordedData}
                  testID="flatlist"
                  renderItem={({item}) => {
                    return (
                      <View
                        style={item?.text !== '' && styles.currentTextParent}>
                        <Text style={styles.currentText}>{item?.text}</Text>
                      </View>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => setmodel()}
                style={styles.openrecorder}
                testID="openRender">
                <Text style={styles.onrecordText}>Open Recorder</Text>
              </TouchableOpacity>
      </View>
    );
  }
}

export default SpeechText;
