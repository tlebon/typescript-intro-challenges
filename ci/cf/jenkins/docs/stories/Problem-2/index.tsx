import * as React from 'react';

interface IProps {
  text: 'Click Me' | 'Stop Clicking Me';
  handleChange: (event:React.MouseEvent)=> void;
  }

const Basics = (props:IProps) => {
const {text, handleChange}=props;

    return(<>
       <button onClick={handleChange} >{text}</button> 
    </>)
  };

  export default Basics;