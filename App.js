import React from "react";
import Name from "./components/Name";
import Description from "./components/Description";
import Prix from "./components/Prix";
import Url from "./components/Url" ;
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div>
      <Name />
      <Description/>
      <Prix/>
      <Url/>
    
    </div>



  );
}

export default App;



