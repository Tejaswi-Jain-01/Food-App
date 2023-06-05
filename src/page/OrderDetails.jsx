import React from "react";
import { useParams } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { BiRupee } from "react-icons/bi";

function OrderDetails() {
  const { id, title, image } = useParams();

  return (
    <div className="flex flex-col sm:flex-row container  ">
      <div className="sm:w-1/2">
      <Card variant="outlined" sx={{ width: { xs: 300, sm: 320 }, ml: { xs: 0, sm: 8 } }}>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <AspectRatio minHeight="120px" maxHeight="220px" sx={{ my: { xs: 2, sm: 0 } }}>
            <img src={image} loading="lazy" alt="" sx={{ my: { xs: 2, sm: 0 } }} />
          </AspectRatio>
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="body3">Total price:<BiRupee />1000</Typography>
            </div>
          </Box>
        </Card>
      </div>
      <div className="sm:w-1/2 sm:ml-4">
        <div className="container p-4 bg-black bg-opacity-40">
          <h1 className="text-black ml-[40%] text-3xl font-bold mb-4">Details</h1>
          <p className="text-white text-xl">
            Pasta has a neutral taste, but it absorbs the flavors of the sauce
            and seasonings it is paired with. The texture of pasta can vary
            depending on the type of pasta, with some types being softer and
            others being more firm. Fresh pasta tends to have a slightly
            different texture and taste than dried pasta, as it is made with
            eggs which make them richer and more flavorful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
