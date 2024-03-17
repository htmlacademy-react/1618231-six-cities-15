import { PlacesList } from 'src/widgest/places-list';
import { Locations } from 'src/widgest/locations';
import { CITIES } from 'src/widgest/locations';
import { PlacesSorting } from 'src/features/plasces-sorting';
import { Map } from 'src/widgest/map';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { fetchOffersList } from 'src/app/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { OfferType } from 'src/shared/app-types';
import { Nullable } from 'vitest';
import 'leaflet/dist/leaflet.css';
import { sortingList } from 'src/features/plasces-sorting';
import { Spinner } from 'src/entities/spinner';

const PageMain = () => {

  const dispatch = useAppDispatch();
  const fetchStatus = useAppSelector((state) => state.offersList.status);

  const offersList = useAppSelector((state) => state.offersList.offers);

  const [activeCard, setActiveCard] = useState<Nullable<OfferType>>(null);
  const [activeLocation, setActiveLocation] = useState(CITIES[0]);
  const [activeSorting, setActiveSorting] = useState(sortingList.Popular);

  const currentOffers = offersList.filter((offer) => offer.city.name.toUpperCase() === activeLocation.toUpperCase());

  const getSortedOffers = useMemo(() => {
    if (activeSorting === sortingList.RatedFirst) {
      return currentOffers.sort((a: OfferType, b: OfferType) => b.rating - a.rating);
    }

    if (activeSorting === sortingList.HighToLow) {
      return currentOffers.sort((a: OfferType, b: OfferType) => b.price - a.price);
    }

    if (activeSorting === sortingList.LowToHigh) {
      return currentOffers.sort((a: OfferType, b: OfferType) => a.price - b.price);
    }

    return currentOffers;

  }, [activeSorting, currentOffers]);

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
          <section className="cities__places places" style={{position: 'relative'}}>
            <h2 className="visually-hidden">Places</h2>
            {fetchStatus === FetchStatus.Fulfilled &&
              < b className="places__found">{currentOffers.length} places to stay in {currentOffers[0].city.name}</b>}
            <PlacesSorting activeSorting={activeSorting} setActiveSorting={setActiveSorting}/>
            {fetchStatus === FetchStatus.Pending && <Spinner />}
            {fetchStatus === FetchStatus.Fulfilled && <PlacesList offersList ={ getSortedOffers} setActiveCard = {setActiveCard} />}
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
