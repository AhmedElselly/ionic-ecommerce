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
import { Col, Row } from "react-bootstrap";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error, loaded } = useSelector(
    (state: any) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data...</h1>;
  }

  const displayProducts = () => {
    return (
      loaded &&
      products?.map((product: Product) => {
        return (
          <Col>
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
          </Col>
        );
      })
    );
  };

  return (
    <IonPage>
      <Layout name="Home" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container>
          <Row>{displayProducts()}</Row>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
