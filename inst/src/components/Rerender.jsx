import React, { useEffect, useState } from "react";
import pasta from "../../src/image/pasta.jpg";
import axios from 'axios';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url:pasta,
    title: 'Order Now',
    width: '100%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const MyRerender=()=>{

const [food,setFood]=useState([]);

useEffect(()=>{
  const apifetchdata=async()=>{
    const options = {
      method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
    params: {q: 'chicken soup'},
    headers: {
      'X-RapidAPI-Key': '8d3e2f65fdmsh023f4e1f786b920p172bb2jsn5c9875a21f1c',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const data=response.data.searches
    setFood(data);
   
  } catch (error) {
    console.error(error);
  }
}

apifetchdata();

},[])

    return(
        <>
        <div className="ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
          width: image.width,
        }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 3,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
              >
                {food[0]?.map((items)=>{
        return  <p className="font-bold text-xl p-auto">{items}</p>
                })}
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
          </div>
        </>
    )
  }
  export default MyRerender