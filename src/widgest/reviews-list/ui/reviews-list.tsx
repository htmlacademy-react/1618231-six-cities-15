import { ReviewItem } from 'src/entities/review-item';
import { UserReviewsType } from 'src/shared/app-types';

type ReviewsListProps = {
  reviewsList: UserReviewsType[];
}

const ReviewsList = ({reviewsList } : ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviewsList.map((review) => (
      <ReviewItem key={review.id} review={ review} />
    )) }
  </ul>
);

export default ReviewsList;
