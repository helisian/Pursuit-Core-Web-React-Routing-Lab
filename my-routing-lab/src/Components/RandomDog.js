import React from 'react';
import axios from 'axios';

class RandomDog extends React.Component {
    state = {
        image: ""
    }
    componentDidMount() {

    }
    getImage = async () => {
        let res = await axios.get("")
    }

    render () {
        return (
            "dog"
        )
    }




}

export default RandomDog; 
