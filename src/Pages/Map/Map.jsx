import React, { useState, useEffect } from 'react';
//import { GoogleMap, LoadScript, Marker, InfoWindow, StandaloneSearchBox } from '@react-google-maps/api';
import dot from './제목_없는_아트워크.png';
import NavBar from "../Nav/Nav.jsx";
import '../../Styles/Map/Map.css'
import { FaPhoneAlt } from "react-icons/fa";
//import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Collapse, List, ListItem } from '@material-ui/core';

const containerStyle = {
  width: '90vw',
  height: '50vh',
  margin: '0'
};

const libraries = ["places"];

const MyComponent = () => {
  const [initialLocation, setInitialLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openHours, setOpenHours] = useState({});

  const toggleOpeningHours = (placeId) => {
    setOpenHours(prevState => ({
      ...prevState,
      [placeId]: !prevState[placeId]
    }));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setInitialLocation({ lat: latitude, lng: longitude });
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }, []);

  const onLoad = ref => setSearchBox(ref);
  const onPlacesChanged = () => {
  const location = searchBox.getPlaces()[0].geometry.location;
  setUserLocation(location.toJSON());

  const service = new window.google.maps.places.PlacesService(map);
  service.textSearch(
    {
      location: location,
      radius: 5000,
      query: searchTerm
    },
    (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const promises = results.map((result, i) => {
          return new Promise((resolve, reject) => {
            const { place_id } = result;
            service.getDetails({ placeId: place_id }, (place, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                results[i] = {
                  ...results[i],
                  phone: place.formatted_phone_number,
                  opening_hours: place.opening_hours ? place.opening_hours.weekday_text : [],
                };
                resolve(results[i]);
              } else {
                reject(status);
              }
            });
          });
        });

        Promise.all(promises)
          .then((places) => {
            setPlaces(places);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  );
}






  return (
    <div className='container_map'>
      <NavBar />
      <div className='txt_map'>
        <div className='txt1'>내 마음을 두드리는 공간</div>
        <div className='txt2'>도움을 청해봐요</div>
        {/* 문구 수정 */}
        <div className='txt3'>#주변 전문의를 찾아봐요</div>
      </div>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
      >
        <div className='gMap'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation ? userLocation : { lat: 37.566535, lng: 126.9779692 }}
          zoom={15}
          onLoad={ref => setMap(ref)}
        >
          {initialLocation && (
            <Marker
              position={initialLocation}
              icon={{ 
                url: dot,
                scaledSize: new window.google.maps.Size(37, 37)
              }}
            />
          )}
          {places.slice(0, 5).map((place, i) => (
            <Marker
              key={i}
              position={place.geometry.location}
              onClick={() => {
                setSelectedPlace(place);
              }}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{ lat: selectedPlace.geometry.location.lat(), lng: selectedPlace.geometry.location.lng() }}
              onCloseClick={() => {
                setSelectedPlace(null);
              }}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.formatted_address}</p>
              </div>
            </InfoWindow>
          )}
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="추천 키워드: 정신, 심리, 상담"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </StandaloneSearchBox>
        </GoogleMap>
        </div>
        <ul className='ul_map'>
          {places.slice(0, 5).map((place, i) => (
            <li key={i} className='li_map'>
              <div className='li_wrap'>
                <div className="place-name">{place.name}</div>
                <div className="place-rating">별점: {place.rating}/5</div>
                <div className="place-address">{place.formatted_address}</div>
                <Button style={{ color: '#ED8C37' }} variant="text" onClick={() => toggleOpeningHours(place.place_id)}>
            영업 시간 {openHours[place.place_id] ? '숨기기' : '보기'}
          </Button>
          <Collapse in={openHours[place.place_id]}>
            <List>
              {place.opening_hours.length > 0 ? place.opening_hours.map((hour, index) => (
                <ListItem key={index}>
                  {hour}
                </ListItem>
              )) : (
                <ListItem>
                  정보 없음
                </ListItem>
              )}
            </List>
          </Collapse>
              </div>
              {place.phone && (
                <button className="place-phone">
                  <a href={`tel:${place.phone}`} className='a_map'>
                  <FaPhoneAlt size={30} color='#ED8C37'/>
                  <br />
                  <br />
                  통화
                  </a>
                </button>
      )}
            </li>
          ))}
        </ul>

      </LoadScript>
    </div>
  );
};

export default React.memo(MyComponent);