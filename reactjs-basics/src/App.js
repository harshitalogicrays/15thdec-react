import './App.css';

import { useState } from "react"
import ChildrenPropsDemo from "./components/ChildrenPropsDemo"
import ConditionalRendering from "./components/ConditionalRendering"
import CounterAppinfun from "./components/CounterAppinfun"
import EventdemoinFun from "./components/EventdemoinFun"
import FirstClasscomp from "./components/FirstClasscomp"
import FirstFuncomp from "./components/FirstFuncomp"
import PropsDemoinClass from "./components/PropsDemoinClass"
import PropsDemoinFun from "./components/PropsDemoinFun"
import RegisterForm from "./components/RegisterForm"
import TextBoxdaata from "./components/TextBoxdaata"
import Cssdemo from "./components/Cssdemo"
import cssmodule from './components/RegisterForm.module.css'
import {MyButton} from "./components/MyButton"
import MycustomButtonComp from "./components/MycustomButtonComp"
import { FaTrashAlt } from "react-icons/fa"
import ListRendering from './components/ListRendering';
import Products from './components/Products';
import FormValidationusinghookform from './components/FormValidationusinghookform';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Pagenotfound from './components/Pagenotfound';
import DefaultLayout from './components/DefaultLayout';
import CounterOuter from './components/CounterOuter';
import ClassCompoentDemo from './components/ClassCompoentDemo';
import UncontrolledComponentinClass from './components/UncontrolledComponentinClass';
function App() {
    let [flag,setFlag]=useState(false)
    //   let a=10
  // console.log("app component")
  // console.log(a)
  return (
    <>

      <Routes>
          <Route path='/' element={<DefaultLayout> <RegisterForm/> </DefaultLayout>}>   </Route>
          <Route path='/hookform' element={<DefaultLayout> <FormValidationusinghookform/></DefaultLayout>}></Route>
          <Route path='/products' element={<DefaultLayout> <Products/> </DefaultLayout>}/>
          <Route path='/counter' element={<DefaultLayout> <CounterOuter/> </DefaultLayout>}/>
          <Route path='/ref' element={<DefaultLayout> <UncontrolledComponentinClass/> </DefaultLayout>}/>
          <Route path='/classcomp' element={<DefaultLayout> 
              <ClassCompoentDemo username="Ram"/> </DefaultLayout>}></Route>
          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>

      <div className="container"> 
           {/* <h1 className={cssmodule.module1}>Hello React</h1> */}
           {/* <h2>{a}</h2> */}
           {/* <h2>Welcome to LRA</h2>
           <FirstFuncomp></FirstFuncomp><hr/>
           <FirstClasscomp/> */}

          {/* <PropsDemoinClass username="Ram" address="Pune"/>
          <hr/>
          <PropsDemoinFun username="Ram" address="Pune"/> */}

          {/* <EventdemoinFun/>

          <CounterAppinfun/> */}

          {/* <ChildrenPropsDemo username="Happy">
              <h2>h2 tag</h2>
              <EventdemoinFun/>
              <hr/>
              <CounterAppinfun/>
          </ChildrenPropsDemo> */}

          {/* <TextBoxdaata/> */}
          {/* <RegisterForm/> */}

          {/* <button type="button" className="btn btn-primary" onClick={()=>setFlag(!flag)}>
            {flag ? "Logout" :"Login"}
          </button>
          
          <ConditionalRendering flagprop={flag} name="Ram"/> */}
          {/* <MyButton>Styled components</MyButton>
          <Cssdemo/> */}

          {/* <MycustomButtonComp onClick={()=>alert("hello")} 
          style={{backgroundColor:'lightpink'}}>
            Custom Button Demo
            <FaTrashAlt/>
            </MycustomButtonComp><br/>


            <MycustomButtonComp className='btnborder'>Click Me</MycustomButtonComp> */}

            {/* <ListRendering/> */}

            {/* <Products/> */}

            {/* <FormValidationusinghookform/> */}
      </div>
    </>
  )
}

export default App
