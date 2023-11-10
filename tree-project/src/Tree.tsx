import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";

const family = {
  children: [
    {
      name: "Chaos",
      photo: "https://i.pinimg.com/originals/c8/d4/52/c8d4520c4b8d23defe392a6df9da898a.jpg",
      description: "The Original Titan",
      children: [
        { 
          name: "Pontus", 
          photo: "https://i.pinimg.com/originals/23/1e/1c/231e1c9470dbaa855bc5075df2b4de24.jpg", 
          description: "Alias: The Seas. Not to be confused with Poseidon" 
        },
        { 
          name: "Gaea", 
          photo: "http://images2.wikia.nocookie.net/__cb20100813145016/greeklegends/images/3/3e/Gaia.jpg", 
          description: "Alias: The Earth. Mother of all Trouble" 
        },
        {
          name: "Ouranos",
          photo: "https://i.pinimg.com/originals/5c/0a/d0/5c0ad0d87b448262170a60afbe83c6cc.jpg",
          description: "Alias: The Sky", 
          children: [
            { 
              name: "10 Titans",
              photo: "https://mitologiagrega.net.br/wp-content/uploads/2016/09/mitologia-grega-titanomaquia.jpg",
              description: "Oceanus, Tethys, Crius, Hyperion, Theia, Themis, Coeus, Phoebe, Mnemosyne, and Iapetus" 
            },
            {
              name: "Titan Kronos",
              photo: "https://wikifoundryimages.s3.amazonaws.com/aabqGBscW6qy0exQKeBClQ340808",
              description: "King of the Titans. Killed his dad, married his sister, ate his kids...",
              children: [
                { name: "Hestia",
                photo: "https://i.pinimg.com/originals/2a/62/cc/2a62cce954323aafa221aa0827228275.jpg",
                description: "Goddess of the hearth", },
                { name: "Hera",
                photo: "",
                description: "Queen of the gods; Unhappily married", 
                children: [{ name: "Hephaestus",
                photo: "",
                description: "" }] },
                {
                  name: "Zeus",
                  photo: "",
                  description: "",
                  children: [
                    { name: "Ares",
                    photo: "",
                    description: "" },
                    { name: "Hermes",
                    photo: "",
                    description: "" },
                    { name: "Apollo",
                    photo: "",
                    description: "" },
                    { name: "Artemis",
                    photo: "",
                    description: "" },
                    { name: "Dionysus",
                    photo: "",
                    description: "" },
                    { name: "Athena",
                    photo: "",
                    description: "" },
                    { name: "Persephone",
                    photo: "",
                    description: "" },
                  ],
                },
                { name: "Hades",
                photo: "",
                description: "" },
                { name: "Demeter",
                photo: "",
                description: "" },
                { name: "Poseidon",
                photo: "",
                description: "", 
                children: [{ name: "Pegasus",
                photo: "",
                description: "" }] },
              ],
            },
            { name: "Titan Rhea",
            photo: "",
            description: "" },
            { name: "3 Elder Cyclopes",
            photo: "",
            description: "" },
            { name: "3 Hundred-Handed Ones",
            photo: "",
            description: "" },
            { name: "Aphrodite",
            photo: "",
            description: "" },
            { name: "Furies",
            photo: "",
            description: "" },
          ],
        },
        { name: "Tartarus",
        photo: "",
        description: "" },
      ],
    },
  ],
};

type TEntry = {
  //the purpose of this Typing is to avoid confusion
  name: string;
  photo: string;
  description: string;
  children?: TEntry[];
};

function Entry({ entry, depth, setCurrentEntry }: { entry: TEntry; depth: number; setCurrentEntry: (value: TEntry | null) => void}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  

  const handleMouseEnter= ()=> {
    setShowTooltip(true); 
    setCurrentEntry(entry);
  }

  const handleMouseLeave= ()=> {
    setShowTooltip(false); 
  }

  console.log("isExpanded?", isExpanded)//Looks like it's reloading shortly after clicking? Related to currentEntry
  console.log("toolTip", showTooltip)

  return (
    <div>
      {entry.children ? (
        <div
          className="entry-container"
          onMouseEnter={() => handleMouseEnter()} // Show tooltip on mouse enter
          onMouseLeave={() => handleMouseLeave()} // Hide tooltip on mouse leave
        >
          <button className="entry" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "-" : "+"}
            {entry.name}
          </button>
          {showTooltip && <div className="tooltip">Click Me</div>}
        </div>
      ) : (
        <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((childEntry) => (
            <Entry entry={childEntry} depth={depth + 1} setCurrentEntry={setCurrentEntry}/>
          ))}
        </div>
      )}
    </div>
  );
}

//Notes for tomorrow: currentEntry appears to be breaking the onClick expansion. Appears to be a scoping issue. 
//Previously, Tree and Entry were separate and independent fxns. Could this be related to the error? 

function Tree() {
  const [currentEntry, setCurrentEntry] = useState<TEntry | null>(null);

  //for each level in the family tree, I want to have a photo that is clickable.
  // when the photo is clicked, it should reveal the immediate children (first-level)
  // If there are children, mouseover should say "Click Me!" Else, it should gray out
  // As the family tree expands, spacing should as well
  return (
    <div>
      <div>
      {family.children.map((entry) => (
        <Entry entry={entry} depth={1} setCurrentEntry={setCurrentEntry}/>
      ))}
    </div>
    <Sidebar currentEntry={currentEntry}/>
    </div>
   
  );
}

export default Tree;
