import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList.jsx';
import AddCard from './Components/AddCard';
import { useState } from 'react';
import Filter from "./Components/Filter";
import CardDetails from "./Components/CardDetails"
function App() {
  const data=[{
    id:1,
    title:"batman",
    description:"The Batman, ou Le Batman1 au Québec, est un film américain de super-héros réalisé par Matt Reeves et sorti en 20222.",
    posterURL:"https://cdn.mos.cms.futurecdn.net/5vPndSdDicde7EwTyAtqjk-1200-80.jpg",
    rating:4,
  },{
    id:2,
    title:"Spider-man",
    description:"'Peter Parker' and 'Spidey' redirect here. For other people, see Peter Parker (disambiguation). For the comic book series, see Spidey (comic book). For subsequent versions of the character, see List of incarnations of Spider-Man. For other uses, see Spider-Man (disambiguation).",
    posterURL:"https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart",
    rating:3,
  },{
    id:3,
    title:"GoT",
    description:"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show was shot .",
    posterURL:"https://media.newyorker.com/photos/598872045839136c88e91dfb/master/w_2560%2Cc_limit/Larson-GoT-Season-7-Episode-4-Recap.jpg",
    rating:4.5,
  },
  {
    id:4,
    title:"House of the Dragon",
    description:"The Batman, ou Le Batman1 au Québec, est un film américain de super-héros réalisé par Matt Reeves et sorti en 20222.",
    posterURL:"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/House_of_the_Dragon_logo.jpg/250px-House_of_the_Dragon_logo.jpg",
    rating:3,
  },{
    id:5,
    title:"The Lord of the Rings: The Rings of Power",
    description:"'The Rings of Power' redirects here. For the titular Middle-earth objects, see Rings of Power. For other uses, see Rings of Power (disambiguation).",
    posterURL:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/LOTR_The_Rings_of_Power_logo.jpg/250px-LOTR_The_Rings_of_Power_logo.jpg",
    rating:3,
  },{
    id:6,
    title:"Carnival Row ",
    description:"Carnival Row is an American neo-noir[2] fantasy television series created by René Echevarria and Travis Beacham, based on Beacham's unproduced film spec script, A Killing on Carnival Row.[3] The series stars Orlando Bloom, Cara Delevingne, Simon McBurney, Tamzin Merchant, Davi.",
    posterURL:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Carnival_Row_Title_Card.png/250px-Carnival_Row_Title_Card.png",
    rating:3,
  }]
  const [listFilm,SetlistFilm]=useState(data)
  const [list,setList]=useState(listFilm)
  const Addfilm=(newfilm,close)=>{SetlistFilm(
   [...listFilm,newfilm]
   );setList(
     [ ...list,newfilm]
    
  )
  close();
}
 
   const filter=(name,nst)=>{

     setList(listFilm.filter((e)=>e.title.toUpperCase().includes(name.toUpperCase()) && e.rating >= nst))
  }
 
  return (
    <div className="container" >
      
     <div style={{display:"flex" ,justifyContent:"space-between"}}>
     <Filter filter={filter}/>
     <AddCard Addfilm={Addfilm}/> 
     </div>
   
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <MovieList 
     data={list}
     
      />}/>
      <Route path="/:id" element={<CardDetails data={list}/>}/>

    </Routes>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
