import { useEffect, useRef } from 'react';
import { OfferType } from 'src/shared/app-types';
import useMap from 'src/shared/use-map';
import { Icon, layerGroup, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT } from 'src/shared/constans';


type NearbyMapTrops = {
  nearbyOffers: OfferType[];
}

const NearbyMap = ({ nearbyOffers }: NearbyMapTrops): JSX.Element => {

  const mapRef = useRef(null);
  const center = nearbyOffers[0].location;
  const map = useMap(mapRef, center);


  useEffect(() => {
    const defaultMarker = new Icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      nearbyOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(defaultMarker).addTo(markerLayer);
      });
    }
  }, [map, nearbyOffers]);

  return (
    <section
      className="offer__map map"
      ref={mapRef}
    >
    </section>
  );
};

export default NearbyMap;
