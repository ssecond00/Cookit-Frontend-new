import React from 'react';

class Template extends React.Component{


    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
      };

    async  componentDidMount() {
    }

    render(){

        return(
            <h1></h1>
        );

    }

}

export default Template;