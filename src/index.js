import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './Pages/1_1_HelloWorld';
import './styles.css';

const Index = () => {
  return (
    <div className="bg-isabelline">  
        <div>
            <HelloWorld />
        </div>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));