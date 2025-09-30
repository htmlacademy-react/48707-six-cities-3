import React from 'react';
import { TypeOffer } from '../../types/offer';
import { Link } from 'react-router-dom';

type PlaceProps = {
  offer: TypeOffer;
  onMouseOver: (id: string) => void;
  onMouseLeave: () => void;
};

export function PlaceComponent({ offer, onMouseOver, onMouseLeave }: PlaceProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseOver={() => onMouseOver(offer.id)} onMouseLeave={onMouseLeave}>
      {
        offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ''
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating * 100 / 5)} %` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

const Place = React.memo(PlaceComponent);
Place.displayName = 'Place';

export default Place;
