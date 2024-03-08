import { ReviewItem } from 'src/entities/review-item';

const ReviewsList = (): JSX.Element => (
  <ul className="reviews__list">
    <ReviewItem />
  </ul>
);

export default ReviewsList;
