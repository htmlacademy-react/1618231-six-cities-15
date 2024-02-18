import React, {ChangeEvent} from 'react';
import { RATING_STARS } from 'src/shared/constans';

type FormRatingProps = {
  changeRating: (evt : ChangeEvent<HTMLInputElement>) => void;
}

const FormRating = ({changeRating} : FormRatingProps) => (
  <div className="reviews__rating-form form__rating">
    {RATING_STARS.map((item) => (
      <React.Fragment key={item}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={item}
          id={`${item}-stars`}
          type="radio"
          onChange={(evt) => changeRating(evt)}
        />
        <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>
    ))}

  </div>
);

export default FormRating;
