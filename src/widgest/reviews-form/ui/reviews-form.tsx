import { ChangeEvent, useState } from 'react';
import { FormRating } from 'src/entities/form-rating';
import { ReviewType } from 'src/shared/app-types';

const ReviewsForm = () => {
  const [review, setReview] = useState<ReviewType>({ rating: 0, comment: '' });

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, comment: evt.target.value});
  };

  const handleRatingChange = (evt : ChangeEvent<HTMLInputElement>) => {
    setReview({...review, rating: parseInt((evt.target.value), 10)});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating changeRating = {handleRatingChange}/>
      <textarea
        value={review.comment}
        onChange={(evt) => handleTextareaChange(evt)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form >
  );
};
export default ReviewsForm;
