import './page-not-found.css';

const PageNotFound = (): JSX.Element => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className='noplaces'>
              <img src="img/honey-non.jpg" alt="image" width="300" height="215" />
              <h2 className='noplaces__title'>404</h2>
              <p className='noplaces__desk'>page not found</p>
              <a className='noplaces__link' href = "/">
                go to main page
              </a>
            </div>
          </section>
          <div className="cities__right-section" style={{ backgroundImage: 'url(../img/img_404.jpg)' }}></div>
        </div>
      </div>
    </main>
  </div>

);

export default PageNotFound;
