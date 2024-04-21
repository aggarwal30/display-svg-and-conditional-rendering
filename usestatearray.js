import { dataobject } from "./usestate";
import { useState } from "react";

const userstateupdate =()=>{
    const[people, setpeople]= useState(dataobject);

    // filter
    const handleRemoveItem=(id)=>{
        const filteredItems=people.filter((person)=> person.id!==id);
        setpeople(filteredItems);

        }}

    return(
        <>
        <div>
           {people.map((person)=>{
            const {id, username, age}=person;
            return(
                <>
                <div key={id}>
                    <h3>{username}</h3>
                    <h4>{age}</h4>
                    <button onClick={()=>{handleRemoveItem(id)}}>Remove</button>
                    </div>
                    </>
            )
           })} 

        </div>
        <button onClick={()=>{setpeople([])}}>Clear All Data</button>
        </>
    );

export default userstateupdate;