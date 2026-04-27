  import React, { useEffect, useRef } from "react";
import "./Map.css";
import pinIcon from "../assets/img/pin.png";

export const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) {
      console.error("카카오맵 SDK가 로드되지 않았습니다.");
      return;
    }

    const position = new kakao.maps.LatLng(37.591310, 127.022131);

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);

    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();

    const places = [
      "옹기종기 성신여대",
      "이태리멘션 성신여대",
      "엘리카츠 성신여대",
    ];

    places.forEach((place) => {
      ps.keywordSearch(place, (data, status) => {
        if (status === "OK") {
          const markerPosition = new kakao.maps.LatLng(data[0].y, data[0].x);
          
          new kakao.maps.CustomOverlay({
            map: map,
            position: markerPosition,
            content: `<img src="${pinIcon}" class="map-pin" />`,
            xAnchor: 0.5,
            yAnchor: 1,
          });

          bounds.extend(markerPosition);
          map.setBounds(bounds);
        }
      });
    });
  }, []);

  return (
  <div className="map-page">
    <div className="place-list">
      <h2>My Hot-place Map</h2>
      <h3>Saved Places</h3>

      <div className="place-card">
        <img src={pinIcon} className="card-pin" alt="" />
        <div className="place-text">
          <p className="place-name">언엘리셰프</p>
          <p className="place-address">
            서울 성북구 동소문로24가길 21 1층
          </p>
        </div>
      </div>

      <div className="place-card">
        <img src={pinIcon} className="card-pin" alt="" />
        <div className="place-text">
          <p className="place-name">이태리멘션</p>
          <p className="place-address">
            서울 성북구 동소문로26마길 2-4 1층
            <br />
            이태리멘션
          </p>
        </div>
      </div>

      <div className="place-card">
        <img src={pinIcon} className="card-pin" alt="" />
        <div className="place-text">
          <p className="place-name">엘리카츠</p>
          <p className="place-address">
            서울 성북구 보문로34길 68-6
          </p>
        </div>
      </div>
    </div>

    <div ref={container} className="map"></div>
  </div>
);
};