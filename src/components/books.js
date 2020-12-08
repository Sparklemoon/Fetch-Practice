import React, { Component } from 'react'

export default class Books extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/book/get/marshmallow", {
          method: "GET"
          // headers: {},
          // body: {}
        })
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
      }
      //display data with state
    

    render() {
        return (
            <div className=''>
                {this.state.data.map(book => <h1>{book.title}</h1>)}
            </div>
        )};
    }
