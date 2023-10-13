import React from 'react'

const family = {
    children: [
        {
            name: "Chaos",
            children: [
                {name: "Pontus"},
                {name: "Gaea"},
                {name: "Ouranos", 
                 children: [
                    {name: "10 Titans"},
                    {name: "Titan Kronos", 
                     children: [
                        {name: "Hestia"},
                        {name: "Hera", 
                         children: {name: "Hephaestus"}},
                        {name: "Zeus", 
                         children: [
                            {name: "Ares"},
                            {name: "Hermes"},
                            {name: "Apollo"},
                            {name: "Artemis"},
                            {name: "Dionysus"},
                            {name: "Athena"},
                            {name: "Persephone"},
                         ]},
                        {name: "Hades"},
                        {name: "Demeter"},
                        {name: "Poseidon", 
                         children: {name: "Pegasus"}},
                     ]},
                    {name: "Titan Rhea"}, 
                    {name: "3 Elder Cyclopes"}, 
                    {name: "3 Hundred-Handed Ones"}, 
                    {name: "Aphrodite"},
                    {name: "Furies"},
                ]},
                {name: "Tartarus"}
            ]
        }
    
}
    ]

function Tree() {
  return (
    <div>Tree</div>
  )
}

export default Tree