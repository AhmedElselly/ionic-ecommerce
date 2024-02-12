import React from "react";
import styles from "../../styles/ProductCard.module.css";
import { Product } from "../../interfaces/product.interface";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard: React.FC<any> = ({ product, handleOpenCart }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        background: "transparent",
        color: "#fff",
        mb: 2,
      }}
    >
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 12,
          }}
        >
          {title.substring(0, 37)}...
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            fontSize: "12px !important",
          }}
          onClick={() => handleOpenCart(product)}
          color="error"
          variant="outlined"
        >
          <AddShoppingCartIcon />
        </Button>
        <Button
          sx={{
            fontSize: "12px !important",
          }}
          variant="outlined"
        >
          <VisibilityIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
