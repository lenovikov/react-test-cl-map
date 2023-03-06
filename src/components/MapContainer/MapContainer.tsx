// @ts-nocheck
import Map, { Source, Layer } from 'react-map-gl';
import geojsonData from './geojson.json';

const MapContainer = (): JSX.Element => {
  const layerStyle = {
    id: 'point',
    type: 'line',
  };

  return (
    <div>
      <Map
        initialViewState={{
          longitude: 27.63435423374176,
          latitude: 53.91687819154794,
          zoom: 17,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        // eslint-disable-next-line max-len
        mapboxAccessToken="pk.eyJ1IjoiYWxleHRlc3QxMTk5IiwiYSI6ImNsZXVtNGxuMjAybG8zcHF1Z28yZ29ucjMifQ.-4ScBeg1vTdzVnCgvKTEaQ"
      >
        <Source id="my-data" type="geojson" data={geojsonData}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default MapContainer;
