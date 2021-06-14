import React from 'react'


export const Doititem = ({doit,onDelete}) => {
    return (
        <>
        <div>
            <h4>{doit.title}</h4>
            <p>{doit.desc}</p>
            <button className="btn-sm btn-danger" onClick={()=>{onDelete(doit)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
