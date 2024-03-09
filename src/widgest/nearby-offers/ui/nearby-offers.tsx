import { OfferType } from 'src/shared/app-types';
import { PlaceCard } from 'src/widgest/place-card';


type NearbyOffersProps = {
  nearbyOffers: OfferType[];
  setActiveCard: (offer: OfferType | null) => void;
}


const NearbyOffers = ({ nearbyOffers, setActiveCard }: NearbyOffersProps): JSX.Element => (
  <section className="near-places places">
    {nearbyOffers.length > 0 && <h2 className="near-places__title">Other places in the neighbourhood</h2>}
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  </section>
);

export default NearbyOffers;
