import { PlacesList } from 'src/widgest/places-list';
import { Header } from 'src/widgest/header';
import { Locations } from 'src/widgest/locations';
import { PlacesSorting } from 'src/features/plasces-sorting';
import { Map } from 'src/widgest/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { fetchOffersList } from 'src/app/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { OfferType } from 'src/shared/app-types';

const PageMain = () => {

  const dispatch = useAppDispatch();
  const fetchStatus = useAppSelector((state) => state.offersList.status);

  const offersList = useAppSelector((state) => state.offersList.offers);

  const [, setActiveCard] = useState<OfferType | null>();

  useEffect(() => {
    if (fetchStatus === FetchStatus.Idle) {
      dispatch(fetchOffersList());
    }
  }, [dispatch, fetchStatus]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <PlacesSorting />
              {fetchStatus === FetchStatus.Pending && <div>Идет загрузка</div>}
              {fetchStatus === FetchStatus.Fulfilled && <PlacesList offersList ={ offersList} setActiveCard = {setActiveCard} />}
              {fetchStatus === FetchStatus.Rejected && <div>Ошибка</div>}
            </section>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default PageMain;
