import { PlacesList } from 'src/widgest/places-list';
import { Header } from 'src/widgest/header';
import { Locations } from 'src/widgest/locations';
import { PlacesSorting } from 'src/features/plasces-sorting';
import { Map } from 'src/widgest/map';

const PageMain = () => (
  <div className ="page page--gray page--main">
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
            <PlacesList />
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default PageMain;
