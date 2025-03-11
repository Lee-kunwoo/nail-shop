import React, { useEffect, useState } from 'react';
import '../styles/kkomap.scss';

const ShopLocation = () => {
  const [coords, setCoords] = useState(null);
  const address = "경기 안산시 상록구 용신로 381 신영빌딩";

  useEffect(() => {
    const REST_API_KEY = '6f4093feb4acab4e88c30dc815659689'; // 본인의 REST API 키로 교체
    // 주소를 좌표로 변환하기 위한 REST API 호출
    fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'KakaoAK 6f4093feb4acab4e88c30dc815659689',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.documents && data.documents.length > 0) {
          const first = data.documents[0];
          // 응답에서 x는 경도, y는 위도 (문자열이므로 parseFloat 사용)
          setCoords({ x: parseFloat(first.x), y: parseFloat(first.y) });
        } else {
          console.error('좌표 변환 결과가 없습니다. 주소를 확인해주세요.');
        }
      })
      .catch((error) => {
        console.error('주소 좌표 변환 API 호출 에러:', error);
      });
  }, [address]);

  useEffect(() => {
    if (!coords) return;

    // 카카오 지도 SDK 스크립트 로드 (이미 로드되어 있다면 생략 가능)
    if (!window.kakao) {
      const script = document.createElement('script');
      script.src =
        'https://dapi.kakao.com/v2/maps/sdk.js?appkey=80d68b9c1c97f9edd72ef5e13725bb51&autoload=false'; // YOUR_APP_KEY를 지도 SDK용 앱키로 교체
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        window.kakao.maps.load(() => initializeMap());
      };
    } else {
      window.kakao.maps.load(() => initializeMap());
    }

    function initializeMap() {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(coords.y, coords.x),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      // 해당 좌표에 마커 표시
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(coords.y, coords.x),
      });
    }
  }, [coords]);

  return (

    <div>
      <h2>JUNGWON-NAILART SHOP</h2>            
      <div id='map'>
        <div style={{ width: '700px', height: '600px' }}></div>
      </div>
    </div>
  );
};

export default ShopLocation;