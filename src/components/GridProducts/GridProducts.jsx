import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import itemData from "../../../../data";

function GridProducts() {
  return (
    <div>
      <Typography variant="h5" color="initial" sx={{ margin: "20px" }}>
        Products
      </Typography>

      <Grid container spacing={2}>
        {itemData.map((item) => {
          return (
            <Grid item xs={12} sm={4} md={3} key={item.img}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt={item.title}
                  src=""
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <ShoppingCartIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default GridProducts;
