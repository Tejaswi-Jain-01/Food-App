import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { BiRupee } from "react-icons/bi";
import { NavLink  ,useParams } from 'react-router-dom';

function MyRerender({ props }) {
  
  function orderDetails(){

  }

  return (
    <div className='lg:mt-3 '>
      <Card variant="outlined" sx={{ width: 320 }}>
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          {props.title}
        </Typography>

        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src={props.image}
            loading="lazy"
            alt=""
            />
        </AspectRatio>
        <Box sx={{ display: 'flex' }}>
          <div>
            <Typography level="body3">Total price:<BiRupee/>1000</Typography>
          </div>
          <NavLink to={`/order/${props.id}/${encodeURIComponent(props.image)}/${encodeURIComponent(props.title)}`}>
            <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
            onClick={orderDetails}
            >
            Order Now
          </Button>
            </NavLink>

        </Box>
      </Card>
    </div>
  );
}


export default MyRerender;
