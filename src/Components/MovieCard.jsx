
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link} from "react-router-dom";
function MovieCard(props) {
 
  return (


  <div className="card" style={{width:"30%" }}>
   <Link to={`/${props.el.id}`}><div className="image">
      <img src={props.el.posterURL} height="300px" alt=''/>
    </div></Link> 
    <div className="card-inner">
      <div className="header">
        <h2>{props.el.title}</h2>
       
      </div>
      <div className="content">
        <p>{props.el.description}</p>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    > <Rating name="read-only" value={props.el.rating} readOnly /> </Box>
      </div>
    </div>
  </div>



  );
}

export default MovieCard;
