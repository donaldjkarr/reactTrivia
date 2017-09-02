import React from 'react';
    
export class Jumbotron extends React.Component {   
        render()  {  
            return (
        <div id="jumbotron">
  			<h1 id="title">Trivia</h1>
  			<p></p>
  			<button type="button" className="btn btn-danger btn-lg" id="button">Get Started!</button>
		</div>
            )
        }
    }