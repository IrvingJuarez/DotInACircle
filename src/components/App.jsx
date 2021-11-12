import React from 'react';

// components
import Header from './Header';
import Plane from './Plane';
import InputField from './InputField';

// styles
import "../styles/globals.scss";

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Header />
    
                <main>
                    <Plane />

                    <InputField />
                </main>
            </React.Fragment>
        )
    }
}

export default App;