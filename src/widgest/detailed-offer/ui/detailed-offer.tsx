import { DetailedOfferType, UserReviewsType } from 'src/shared/app-types';
import { FetchStatus, RATING_STARS } from 'src/shared/constans';
import { ReviewsForm } from 'src/widgest/reviews-form';
import { ReviewsList } from 'src/widgest/reviews-list';
import { useAppSelector } from 'src/shared/hooks';
import { NearbyMap } from 'src/widgest/nearby-map';

type DetailedOfferProps = {
  detailedOffer: DetailedOfferType;
  reviewsList: UserReviewsType[];
  statusReviews: FetchStatus;
}

const DetailedOffer = ({detailedOffer, reviewsList, statusReviews}: DetailedOfferProps): JSX.Element => {
  const { description, images, isPremium, rating, type, bedrooms, maxAdults, price, goods, host } = detailedOffer;
  const starsRating = (rating / RATING_STARS.length * 100).toString();
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers.nearbyOffers);

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((item) => (
            <div className="offer__image-wrapper" key={item}>
              <img className="offer__image" src={item} alt="Photo studio" />
            </div>
          )) }
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium &&
            <div className="offer__mark">
              <span>Premium</span>
            </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              Beautiful &amp; luxurious studio at great location
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${starsRating}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating }</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {`${bedrooms} Bedrooms`}
            </li>
            <li className="offer__feature offer__feature--adults">
              {`Max ${maxAdults} adults`}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price }</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((item) => (
                <li className="offer__inside-item" key={item}>
                  {item }
                </li>
              )) }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={host.avatarUrl } width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {host.name }
              </span>
              {host.isPro &&
                <span className="offer__user-status">
                  Pro
                </span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description }
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            {reviewsList.length > 0 && <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>}
            {statusReviews === FetchStatus.Fulfilled && <ReviewsList reviewsList={reviewsList } />}
            <ReviewsForm />
          </section>
        </div>
      </div>
      {nearbyOffers.length > 0 && <NearbyMap nearbyOffers={nearbyOffers} />}
    </section>
  );
};

export default DetailedOffer;
