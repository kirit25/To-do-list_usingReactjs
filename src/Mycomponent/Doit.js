import React from 'react'
import {Doititem} from "./Doititem";


export const Doit = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className= "container" style={myStyle}>
            <h3 className="my-3">Doit list</h3>
            {props.doit.length===0? "no doit item to display":
            props.doit.map((doit)=>{
                return (
                <Doititem doit={doit} key={doit.sno} onDelete={props.onDelete}/>
                )
            })
            }
           

        </div>
    )
}
