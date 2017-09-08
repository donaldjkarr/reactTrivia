import React from 'react';

export class ScoreCard extends React.Component {   
        render()  {  
            return (
            <div id="right">
                <div id="scorecard">
                    <h2>Score</h2>
                        <div id="scoresheet">
                            <h1 id="counter">...</h1>
                        </div>
                </div>
                <div id="correctcard">
                    <h2>Correct Answer</h2>
                        <div id="correctsheet">
                            <h3 id="showcorrect">...</h3>
                        </div>
		  	    </div>
            </div>
            )
        }
    }