import { PlacesList } from 'src/widgest/places-list';
import { Locations } from 'src/widgest/locations';
import { CITIES } from 'src/widgest/locations';
import { PlacesSorting } from 'src/features/plasces-sorting';
import { Map } from 'src/widgest/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { fetchOffersList } from 'src/app/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { OfferType } from 'src/shared/app-types';
import { Nullable } from 'vitest';
import 'leaflet/dist/leaflet.css';

const PageMain = () => {

  const dispatch = useAppDispatch();
  const fetchStatus = useAppSelector((state) => state.offersList.status);

  const offersList = useAppSelector((state) => state.offersList.offers);

  const [activeCard, setActiveCard] = useState<Nullable<OfferType>>(null);
  const [activeLocation, setActiveLocation] = useState(CITIES[0]);

  const currentOffers = offersList.filter((offer) => offer.city.name.toUpperCase() === activeLocation.toUpperCase());

  useEffect(() => {
    if (fetchStatus === FetchStatus.Idle) {
      dispatch(fetchOffersList());
    }
  }, [dispatch, fetchStatus]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <PlacesSorting />
            {fetchStatus === FetchStatus.Pending && <div>Идет загрузка</div>}
            {fetchStatus === FetchStatus.Fulfilled && <PlacesList offersList ={ currentOffers} setActiveCard = {setActiveCard} />}
            {fetchStatus === FetchStatus.Rejected && <div>Ошибка</div>}
          </section>
          <div className="cities__right-section">
            {fetchStatus === FetchStatus.Fulfilled && <Map offers={currentOffers} idActiveCard={activeCard?.id}/>}
          </div>
        </div>
      </div>
    </main>
  );
};
export default PageMain;
