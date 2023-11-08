import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import axios from 'axios';
import GridOnIcon from '@mui/icons-material/GridOn';
import './Card.css'

const Card = () => {
    const [isList,setIsList] = useState(true);
    const  [productData, setProductData] = useState([]);
    useEffect(() => {
      getData();
        
      
    }, [])
    

    const getData = async () =>{
try{

    let Data = await axios.get('https://dummyjson.com/products');
    setProductData(Data.data.products);
}catch(err){
    console.log(err)
}
                                }
    console.log(productData)

  return (
    <div>
       <Box component={'section'} sx={{textAlign:'right'}}>
       <span onClick={()=>setIsList(prev=>!prev)}>
        {
         isList? <GridOnIcon  sx={{fontSize:'60px',}}/>:<MenuIcon sx={{fontSize:'60px',}}/>
        }</span>
      </Box>

      <Grid container justifyContent={'center'}>
            <>
            { productData.map((e,i)=><>
           
           <Grid  item xs={12} sm={isList?12:6} md={isList?12:3} className={isList?'cardInList':'card'}  key={i}>
               <div className='imageDiv'>
                   <img src={e.thumbnail} alt="" />
               </div>
               <div className="cardText">

                   <div>
                       <h1>{e.title}</h1>
                   </div>
                   <hr />
                   <div>
                       <p>{e.description}</p>
                   </div>
                   <div>
                       <p>Rating : {e.rating} / 5 </p>
                   </div>
                <Button variant='contained'>
                    Buy at {e.price}$
                </Button>
                   
               </div>

           </Grid>
          </>
           )}
            </>
      </Grid>
      
    </div>
  )
}

export default Card
