import React from 'react';
import {Button} from '@material-ui/core'

import './Home.css'

export let Home=function(props){
        let nextPage=()=>{
            props.history.push('/token');
        }    
        return(
            <main className="HomePage">
                <div className="Center">
                <h3 className="Header">
                    GitHub Repo Finder
                    <p>A simple application which helps to perform below actions on GitHub with the help of Access token</p>    
                </h3>

                <div className="HomeList"> 
                <ul>
                    <li>Find a GitHub Public Repo</li>
                    <li>Provides Star and Watch count with more details</li>
                    <li>You can star or watch your favoriate public repo</li>
                    <li>Validate your Access token</li>
                </ul>
                <Button variant="contained" color="primary" onClick={nextPage}>Start Finder</Button>
</div>
</div>
            </main>
        )
}