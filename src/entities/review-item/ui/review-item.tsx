import { UserReviewsType } from 'src/shared/app-types';
import { RATING_STARS, months } from 'src/shared/constans';


type ReviewItemProps = {
  review: UserReviewsType;
}

const ReviewItem = ({ review }: ReviewItemProps): JSX.Element => {
  const { user, rating, comment, date } = review;
  const userRating = (rating / RATING_STARS.length) * 100;
  const reviewDate = new Date(date);
  const formatData = `${months[reviewDate.getMonth()]} ${reviewDate.getFullYear()} г`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${userRating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment }
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatData}</time>
      </div>
    </li>

  );
};

export default ReviewItem;
