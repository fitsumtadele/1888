import { Component } from "react";
import axios from 'axios';

export default class Api extends Component{
    constructor() {
        super();
        this.state = {
            name: "abiy"
        };
    }
    componentDidMount = () => {
        axios.get("/users").then(response =>{
            console.log(response.data.name);
        }
            )

    }
    render () {
        return (
            <div>
                <h1>hello {this.state.name}</h1>
            </div>
        );
    }
}