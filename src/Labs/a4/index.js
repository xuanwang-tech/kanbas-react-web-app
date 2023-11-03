import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
 return(
   <>
     <h1>Assignment 4</h1>
     <ReduxExamples/><br/>

     <Add a={1} b={2} />
     <ClickEvent /><br/>
     <PassingDataOnEvent /><br/>
     <PassingFunctions theFunction={sayHello}/><br/>
     <EventObject/><br/>
     <Counter/><br/>
     <BooleanStateVariables/><br/>
     <StringStateVariables/><br/>
     <DateStateVariable/><br/>
     <ObjectStateVariable/><br/>
     <ArrayStateVariable/><br/>
     <ParentStateComponent/><br/>
     <ChildStateComponent/><br/>
     
     
   </>
 );
};
export default Assignment4;
