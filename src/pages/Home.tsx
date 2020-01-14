import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  let [showSkip] = React.useState(true);

  const ionSlideChanged = (event: CustomEvent) => {
    const target: any = event.target;
    showSkip = !target.swiper.isEnd;
    console.log('showSkip: ', showSkip);
  }

  const skipButton = () => {
    console.log('Trying to show/hide the skip button');
    if (showSkip) {
      return (<IonButton routerDirection="forward" routerLink="/game" color="light">Skip</IonButton>);
    } else {
      return (<span></span>);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            {skipButton()}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonSlides pager={true} onIonSlideDidChange={ionSlideChanged}>
          <IonSlide>
            01. Mike was here.
    </IonSlide>
          <IonSlide>
            02. Mike was also here.
    </IonSlide>
        </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
