import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailedOffer, fetchNearbyOffers, fetchReviewsList } from 'src/app/api-actions';
import { OfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import DetailedOffer from 'src/widgest/detailed-offer/ui/detailed-offer';
import { NearbyOffers } from 'src/widgest/nearby-offers';
import { Nullable } from 'vitest';


const Offer = (): JSX.Element => {

  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const detailedOffer = useAppSelector((state) => state.detailedOffer.offer);
  const statusOffer = useAppSelector((state) => state.detailedOffer.status);
  const reviewsList = useAppSelector((state) => state.reviewsList.reviews);
  const statusReviews = useAppSelector((state) => state.reviewsList.status);
  const statusNearby = useAppSelector((state) => state.detailedOffer.status);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers.nearbyOffers);

  const [, setActiveCard] = useState<Nullable<OfferType>>(null);


  useEffect(() => {
    if (offerId) {
      dispatch(fetchDetailedOffer(offerId));
      dispatch(fetchReviewsList(offerId));
      dispatch(fetchNearbyOffers(offerId));
    }

  }, [dispatch, offerId]);

  return (
    <main className="page__main page__main--offer">
      {statusOffer === FetchStatus.Pending && <div>Идет загрузка</div>}
      {statusOffer === FetchStatus.Fulfilled &&
        <DetailedOffer
          detailedOffer={detailedOffer}
          reviewsList={reviewsList}
          statusReviews={statusReviews}
        />}
      <div className="container">
        {statusNearby === FetchStatus.Pending && <div>Идет загрузка</div>}
        {statusNearby === FetchStatus.Fulfilled && <NearbyOffers nearbyOffers={nearbyOffers} setActiveCard={setActiveCard } /> }
      </div>
    </main>
  );
};
export default Offer;
