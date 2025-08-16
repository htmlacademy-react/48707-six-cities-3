import Main from '../../pages/main/main.tsx';

type AppScreenProps = {
  numberOfRentalOffers: number;
};

function App({ numberOfRentalOffers }: AppScreenProps): JSX.Element {
  return <Main numberOfRentalOffers={numberOfRentalOffers} />;
}

export default App;
