import { fireEvent, render } from "@testing-library/react-native";
import Home from "../src/components/Home";

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


 const modelProps={
    remove:jest.fn(),
    addInText:jest.fn()
 }

describe("Home Component",()=>{

    test("rendering",()=>{
      const {getByTestId}=render(<Home/>)
      const renderBtn=getByTestId("openRender")
      fireEvent.press(renderBtn)
      
    })
    test("model remove test",()=>{
      const {getByTestId}=render(<Home/>)
      const renderBtn=getByTestId("openRender")
      fireEvent.press(renderBtn)
      const model=getByTestId("model")
      //   fireEvent.press(model)
    model.props.children.props.remove()
    // console.log(model.props.children.props)
      // model.props.children.props.addInText()
 
    })
    test("model addText test",()=>{
      const {getByTestId}=render(<Home/>)
      const renderBtn=getByTestId("openRender")
      fireEvent.press(renderBtn)
      const model=getByTestId("model")
      model.props.children.props.addInText("fjghfgh")
    })
    test("flatList render test",()=>{
      const {getByTestId}=render(<Home/>)
      const renderBtn=getByTestId("openRender")
      fireEvent.press(renderBtn)
      const model=getByTestId("model")
      model.props.children.props.addInText("fjghfgh")
      model.props.children.props.remove()
      const flatlist=getByTestId("flatlist")
      // console.log(flatlist.props)
      flatlist.props.renderItem(flatlist.props.data[1])
    })
})