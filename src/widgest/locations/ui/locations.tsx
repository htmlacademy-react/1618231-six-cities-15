import { AppRoutes } from 'src/shared/constans';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { CITIES } from './cities';
import { MouseEvent } from 'react';

type LocationsProps = {
  activeLocation: string;
  setActiveLocation: (city: string) => void;
}

const Locations = ({ activeLocation, setActiveLocation }: LocationsProps): JSX.Element => {

  const onLocationLinkClick = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {

    const { target } = evt;
    const location = (target as HTMLAnchorElement).textContent;
    if (location) {
      setActiveLocation(location);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <NavLink
                onClick={(evt) => onLocationLinkClick(evt) }
                className={cn('locations__item-link tabs__item', {'tabs__item--active' : city === activeLocation})}
                to={AppRoutes.Main}
              >
                <span>{city}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Locations;
