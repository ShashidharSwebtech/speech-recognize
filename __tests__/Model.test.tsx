import { fireEvent, render } from "@testing-library/react-native";
import Model from "../src/components/Model";
jest.mock("react-native-responsive-screen", () => ({
    heightPercentageToDP: jest.fn(),
    widthPercentageToDP: jest.fn()
  }))
  jest.mock("react-native-vector-icons/FontAwesome", () => () => <></>)
  jest.mock("react-native-vector-icons/Ionicons", () => () => <></>)
  jest.mock("@react-native-voice/voice",()=>{
    const Voice={
      onSpeechStart:jest.fn(),
      onSpeechEnd:jest.fn(),
      onSpeechResults:jest.fn(),
      start:jest.fn()
      .mockImplementation((...args)=>Promise.resolve("en-US")),
      stop:jest.fn()
    }
    return Voice;
  })


 const modelProps={
    remove:jest.fn(),
    addInText:jest.fn()
 }

describe("Model Component",()=>{

    test("rendering Model",()=>{
        const {getByTestId}=render(<Model {...modelProps}/>)
        const currentTextbtn=getByTestId("currentTextbtn")
        fireEvent.press(currentTextbtn)
    })
    test("rendering Model",()=>{
        const {getByTestId}=render(<Model {...modelProps}/>)
        const  addInText=getByTestId("addInText")
        fireEvent.press(addInText)
        
    })
    test("rendering Model",()=>{
        const {getByTestId}=render(<Model {...modelProps}/>)
        const Retake=getByTestId("Retake")
        fireEvent.press(Retake)
    })
    test("rendering Model",()=>{
        const {getByTestId}=render(<Model {...modelProps}/>)
        const  Remove=getByTestId("remove")
        fireEvent.press(Remove)
    })
    test("rendering Model",()=>{
        const {getByTestId}=render(<Model {...modelProps}/>)
        const  start=getByTestId("start")
        fireEvent.press(start)
        fireEvent.press(start)
    })

})