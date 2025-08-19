import Main from '../../pages/HomePage/HomePage.tsx';

type AppScreenProps = {
  numberOfRentalOffers: number;
};

function App({ numberOfRentalOffers }: AppScreenProps): JSX.Element {
  return <Main numberOfRentalOffers={numberOfRentalOffers} />;
}

export default App;
