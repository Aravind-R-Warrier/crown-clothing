import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import SignIn from "./Routes/SignIn/SignIn";

const Shop=()=>{
  return(
    <>
  hi iam shop
    </>
  )
}

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign-in" element={<SignIn/>}/>

      </Route>
     
    </Routes>
   
    </>
  );
}

export default App;
