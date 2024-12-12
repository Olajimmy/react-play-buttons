import Toolbar from "./components/Toolbar";
import "./styles.css";
import "./App.css";

function App() {
  //the goal is to display interactivity functionality
  function movieAlert() {
    alert("Playing!");
  }
  //
  function fileAlert() {
    alert("uploading..");
  }

  return (
    <>
      <Toolbar onPlayMovie={movieAlert} onUploadImage={fileAlert} />
    </>
  );

  //============================ this is one way using anonymous arrow function
  //it only really works well if you have 2 lines of code
  //after that, you may want to consider using a named function for readability

  // return (
  //   <>
  //     <Toolbar
  //       onPlayMovie={() => alert("Playin!!")}
  //       onUploadImage={() => alert("uploading...")}
  //     />
  //   </>
  // );
}

export default App;
