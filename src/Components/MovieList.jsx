

import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
      <div style={{display:"flex" ,gap:"5px",flexWrap:"wrap" ,justifyContent:"center"}}>
      {props.data.map((el, i) => (
        
        <MovieCard  
        
          el={el}
          key={i}
         
        />

      ))}
      </div>
  )
  
}

export default MovieList;