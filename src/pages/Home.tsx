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
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/react';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  let [showSkip, setSkip] = React.useState(true);

  const ionSlideChanged = (event: CustomEvent) => {
    const target: any = event.target;
    setSkip(!target.swiper.isEnd);
  }


  return (
    <IonPage>
      <IonHeader no-shadow>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            {showSkip && <IonButton
              routerDirection="forward"
              routerLink="/game"
              color="light">Skip </IonButton>}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} onIonSlideDidChange={ionSlideChanged}>
          <IonSlide>
            <IonCard>
              <div className="concert bg"></div>
              <IonCardHeader class="item item-header item-text-wrap">
                <IonCardTitle>Welcome to Bravo!</IonCardTitle>
              </IonCardHeader>
              <IonCardContent class="item item-body">
                <p>This is an 'on-the-go' party game for those long waits in theme park lines or long road trips.</p>
                <p>This is a card game for you and small group of friends. When you start, you will be given a word or a
                  category
                  and one of the following subject areas: Song Lyrics , Song Title , Movie Quote , Movie Title , TV Show Quote
, TV Show Title , or Book Title</p>
                <p>If you play it in public, you may just find people around you offering their own song suggestions.</p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="song bg"></div>
              <IonCardHeader>
                <IonCardTitle>Song Lyrics</IonCardTitle>
              </IonCardHeader>
              <IonCardContent class="item item-body">
                <p>On these cards, it's up to each player to come up with and sing the lyrics from a song, containing the
                  word
                  (or
                  subject) at the top of the card.
  </p>
                <p>
                  You can repeat a song from another card, but everyone working on the same card should use a unique song
                  for
                  this card.
  </p>
                <p>
                  Sing loudly enough to be heard; in fact, the louder the better.
  </p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="song bg"></div>
              <IonCardHeader>
                <IonCardTitle>Song Title</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>On these cards, you don't sing, but simply state the title of a song containing the word (or about the
                  subject)
                  at the top of the card.
  </p>
                <p>
                  You can repeat a song from another card, but everyone working on the same card should use a unique song
                  for
                  this card.
  </p>
                <p>
                  This one should be easier than singing, but maybe not.
  </p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="movie bg"></div>
              <IonCardHeader>
                <IonCardTitle>Movie or TV Quote</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>"Go ahead, make my day." In your best actor's voice, quote a line from a
                  movie or TV show containing the word (or about the subject) at the top of the card.
  </p>
                <p>
                  As with the other cards, don't repeat the same quote on a single card.
  </p>
                <p>
                  This is your chance to ham it up in front of strangers, so don't waste it.
  </p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="movie bg"></div>
              <IonCardHeader>
                <IonCardTitle>Movie or TV Show Title</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Show your Hollywood trivia smarts. Name a movie or TV show title containing
                  the word (or about the subject) at the top of the card.
  </p>
                <p>
                  As with the other cards, don't repeat the same title on a single card.
  </p>
                <p>
                  Keep your wits about you, because this one is harder than it might seem. </p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="book bg"></div>
              <IonCardHeader>
                <IonCardTitle>Book Title</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Perhaps literary novels (or comic books) are your thing. Name a book title
                  containing the word (or about the subject) at the top of the card.
  </p>
                <p>
                  As with the other cards, don't repeat the same book on a single card.
  </p>
                <p>
                  Some estimates put the number of books ever published at almost 135 Million!
    You should have plenty of titles from which to choose.</p>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <div className="concert bg"></div>
              <IonCardHeader>
                <IonCardTitle>Conclusion</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Assign each player (or team) a color. There are six, so you shouldn't run out.
  </p>
                <p>
                  When someone gets an answer right, meaning they've managed to convince the rest of the players, tap that
                  person's color at
                  the bottom of the screen to award them a point.
  </p>
                <p>
                  You get to decide when to draw the next card. There are no hard and fast rules. It's just for fun after all.
                  That's really all
                  there is to it. Go forth and have fun!
  </p>
                <IonToolbar>
                  <IonButtons slot="end">
                    <IonButton routerDirection="root" routerLink="/game">
                      Continue
        <IonIcon name="arrow-forward"></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCardContent>
            </IonCard>
          </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
