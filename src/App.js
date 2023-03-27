import React, { Component } /*desestructuro*/ from "react";

import './App.css';
//Components
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


/*Importante, los componentes de tipo clase van a 
1- Necesitar un class
2-Extender de React.component
3-Utilizar el métido render si o si para retornar JSX*/

class App extends Component {
    render() {
        return ( 
          <div className ="App" >
            < NavBar />
            < Header title="Proyecto de Indumentaria Deportiva" />
         < ItemListContainer name= "María" />
       
</div>
           

        );
    }
}
export default App; 