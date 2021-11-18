import React, {useState} from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const[people]=useState([
        {
            name:'Asa Akira',
            url:"https://m.media-amazon.com/images/I/51yyBEsTX8L.jpg"
            
        },
        {
            name:'Alura Jenson',
            url:"https://i.redd.it/85uua72bo5941.jpg"
        },
        {
            name:'Lisa Ann',
            url:"https://rokktalk.files.wordpress.com/2013/05/lisa_ann.jpg?w=584"
        },
        {
            name:'Mia Khalifa',
            url:"https://i1.sndcdn.com/artworks-000523367880-vbzffl-t500x500.jpg"
        }
    ]);
const swiped = (direction,nameToDelete)=>{
    console.log("removing: "+nameToDelete);
    //setLastDirection(direction);

};

const outOfFrame = (name)=>{
    console.log(name + " left the screen!")
};




  return (
      <div className="tinderCards">
          <h1>Καλωσήρθες στο Μπουρδέλο</h1>
          <div className="tinderCards__cardContainer">
             {people.map((person)=>(
                <TinderCard
                    className = "swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                ><div 
                    style={{backgroundImage:"url("+person.url+")"}} 
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>    
                </TinderCard>
             ))}

          </div>



      </div>
    )
}

export default TinderCards;
