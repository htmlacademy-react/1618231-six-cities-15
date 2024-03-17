import { useEffect, useRef } from 'react';
import useMap from 'src/shared/use-map';
import { OfferType } from 'src/shared/app-types';
import { Icon, layerGroup, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from 'src/shared/constans';


type MapProps = {
  offers: OfferType[];
  idActiveCard?: string | undefined;
  // center: LocationType;
}

const defaultMarker = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const customMarker = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = (props: MapProps) => {
  const { offers, idActiveCard } = props;
  const center = offers[0] ? offers[0].city.location : { latitude: 0, longitude: 0, zoom: 0 };

  const mapRef = useRef(null);
  const map = useMap(mapRef, center);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(offer.id === idActiveCard ? customMarker : defaultMarker).addTo(markerLayer);
      });
    }
  }, [idActiveCard, map, offers]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
};
export default Map;
