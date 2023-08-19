/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock("react-native-responsive-screen", () => ({
  heightPercentageToDP: jest.fn(),
  widthPercentageToDP: jest.fn()
}))
jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
jest.mock("react-native-vector-icons/Ionicons", () => () => <></>)
jest.mock("@react-native-voice/voice",()=>({
  default:{
    onSpeechStart:jest.fn(),
    onSpeechEnd:jest.fn(),
    onSpeechResults:jest.fn(),
    start:jest.fn().mockImplementation((...args)=>Promise.resolve("en-US")),
    stop:jest.fn()
  }
}))
it('renders correctly', () => {
  renderer.create(<App />);
});
