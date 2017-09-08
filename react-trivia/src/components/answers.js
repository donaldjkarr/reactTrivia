import React from 'react';
import ajax from '../utils/search';

export class Answers extends React.Component {   

        handleSubmit() {
        console.log(ajax());
    }
        render()  {  
            return (
                <div>
                        <h2 id="answer1" onClick={this.handleSubmit}>...</h2>
                        <h2 id="answer2" onClick={this.handleSubmit}>...</h2>
                        <h2 id="answer3" onClick={this.handleSubmit}>...</h2>
                        <h2 id="answer4" onClick={this.handleSubmit}>...</h2>
                </div>
            )
        }
    }