import { MouseEvent, useState } from 'react';
import { sortingList } from './sorting';
import cn from 'classnames';

type PlacesSortingProps = {
  setActiveSorting: (value : string) => void;
  activeSorting: string;
}

const PlacesSorting = ({activeSorting, setActiveSorting}: PlacesSortingProps): JSX.Element => {

  const [isOpened, setIsOpened] = useState(false);
  const onSortingBtnClick = (evt: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    const { target } = evt;
    const bySorting = (target as HTMLElement).textContent;
    if (bySorting) {
      setActiveSorting(bySorting);
    }
  };

  return (
    <form
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSorting }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', { 'places__options--opened': isOpened })} >
        {Object.values(sortingList).map((item) => (
          <li
            onClick={(evt) => onSortingBtnClick(evt)}
            className="places__option places__option--activ"
            tabIndex={0}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default PlacesSorting;
