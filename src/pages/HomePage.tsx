import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
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
import Wrapper from "../components/Wrapper";
import { addToCart } from "../store/cartSlice";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(false);
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

  const handleOpenCart = (item: Product) => {
    dispatch(addToCart(item));
    setOpen(true);
  };

  const displayProducts = () => {
    return (
      loaded &&
      products?.map((product: Product) => {
        return (
          <Col sm={6}>
            <ProductCard
              product={product}
              handleOpenCart={handleOpenCart}
            />
          </Col>
        );
      })
    );
  };

  return (
    <IonPage>
      <Layout name="Home" />
      <Wrapper pageName={"Home"}>
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
        <IonModal isOpen={open}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
      </Wrapper>
    </IonPage>
  );
};

export default HomePage;
