import { OfferType } from 'src/shared/app-types';
import { PlaceCard } from 'src/widgest/place-card';

type OffersListProps = {
  offersList: OfferType[];
}

const PlacesList = ({offersList} : OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offersList.map((offer) => (
      <PlaceCard key={offer.id} offer = {offer} />
    ))}
  </div>
)

export default PlacesList;
