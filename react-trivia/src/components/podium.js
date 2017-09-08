import React from 'react';
import {Answers} from './answers';
import {Questions} from './questions';

export class Podium extends React.Component {   
        render()  {  
            return (
                <div id="gamecontent">
                    <Questions/>
                    <Answers/>
                </div>
            )
        }
    }