import React from 'react';
import ajax from '../utils/search';

export class Jumbotron extends React.Component {   
    // constructor(props) {
    //  super(props)
    //  this.ajax = this.ajax.bind(this)
    // }

    handleSubmit() {
        console.log(ajax());
    }
        render() {
            return (
                <div id="jumbotron">
                    <h1 id="title">Trivia</h1>
                    <p></p>
                    <button type="button" className="btn btn-danger btn-lg" id="button" onClick={this.handleSubmit}>Get Started!</button>
                </div>
            )
        }
      }
    