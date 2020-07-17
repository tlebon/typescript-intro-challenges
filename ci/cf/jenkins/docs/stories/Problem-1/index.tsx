import * as React from 'react';

interface IProps {
  text: string;
  upperCaseIt: (greeting:string)=>string;
  }


const Basics = (props:IProps) => {
const {text, upperCaseIt}=props;

    return(<>
        <h1>{upperCaseIt('hello')}, {text} </h1>



    </>)
  };

  export default Basics;