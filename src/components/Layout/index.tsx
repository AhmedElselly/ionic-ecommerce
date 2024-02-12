import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

interface LayoutProps {
  name: string;
}

const Layout: React.FC<LayoutProps> = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Layout;
