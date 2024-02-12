import React from "react";
import styles from '../../styles/ProductCard.module.css';
import { Product } from "../../interfaces/product.interface";

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
    <div className={styles.container}>
      <div className={styles.imageContainer}>
				<img 
					src={image}
					alt={title}
					className={styles.image}
				/>
      </div>
			<div className={styles.body}>
			 	<div className={styles.title}>{title}</div>
			 	<div className={styles.description}>{description.substring(0, 50)}</div>
			</div>
    </div>
  );
};

export default ProductCard;
