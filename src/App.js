import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";

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
      <Route path="auth" element={<Authentication/>}/>

      </Route>
     
    </Routes>
   
    </>
  );
}

export default App;
