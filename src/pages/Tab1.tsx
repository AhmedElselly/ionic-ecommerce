import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getProducts } from "../apis/productsApi";
import ProductCard from "../components/ProductCard";
import { Product } from "../interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { Container } from "@mui/material";

const Tab1: React.FC = () => {
  const dispatch = useDispatch();
  const {products, isLoading, error, loaded} = useSelector((state: any) => state.products);
  useEffect(() => {
      dispatch(fetchProducts());
  }, []);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>Error fetching data...</h1>
  }

  const displayProducts = () => {
    return loaded && products?.map((product: Product) => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          category={product.category}
          price={product.price}
          rating={product.rating}
        />
      );
    });
  };

  return (
    <IonPage>
      <Layout name="Tab 1" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 3
        }}>
        {displayProducts()}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
