import React from "react";
import styles from '../../styles/ProductCard.module.css';
import { Product } from "../../interfaces/product.interface";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{
          fontSize: 18
        }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 50)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
