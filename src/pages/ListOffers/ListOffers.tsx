import Place from '../Place/Place';
import { TypeOffer } from '../../types/offer';
import { useState } from 'react';

type ListOffersProps = {
  offers: TypeOffer[];
};

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  const [activeOffer, setactiveOffer] = useState<TypeOffer | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <Place
            key={offer.id}
            offer={offer}
            onMouseOver={(): void => {
              setactiveOffer(offer);
            }}
            active={activeOffer?.id === offer.id}
          />
        ))
      }
    </div>
  );
}

export default ListOffers;
