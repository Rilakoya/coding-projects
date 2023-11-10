import React, {useState} from 'react';

type TEntry = {
    //the purpose of this Typing is to avoid confusion
    name: string;
    photo: string;
    description: string;
  };

interface SidebarProps {
    currentEntry:TEntry | null
}
    


const Sidebar = ({currentEntry}: SidebarProps) => {
    if (!currentEntry) {
        return null; 
      }

    return(
        <>
            <div className = "sidebar">
                <h1>{currentEntry.name}</h1>
                <img src={currentEntry.photo}></img>
                <p>{currentEntry.description}</p>
                
            </div>
        </>
    )
}


export default Sidebar

