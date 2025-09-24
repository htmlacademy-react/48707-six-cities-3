import { TypeOffer } from '../../types/offer';
import Place from '../Place/Place';

type ListOffersProps = {
  offers: TypeOffer[];
  onListItemHover: (offerId: string) => void;
  onListItemLeave: () => void;
};

function ListOffers({ offers, onListItemHover, onListItemLeave }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Place
          key={offer.id}
          offer={offer}
          onMouseOver={() => onListItemHover(offer.id)}
          onMouseLeave={onListItemLeave}
        />
      ))}
    </div>
  );
}

export default ListOffers;
