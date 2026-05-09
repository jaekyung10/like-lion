import { useState } from "react";
import { getWifiList  } from "../api/wifiApi";

function WifiPage() {
    const [keyword, setKeyword] = useState("");
    const[wifiList, setWifiList] = useState([]);
    const[loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const getItems = (data) => {
        if (data.response && data.response.body && data.response.body.items) {
            const item = data.response.body.items.item;

            if (Array.isArray(item)) {
                return item;
            }

            if (item) {
                return [item];
            }
        }

        return [];
    };

    const handleSearch = async () => {
        if (keyword.trim() === "") {
            alert("검색어를 입력해주세요.");
            return;
        }

        setLoading(true);
        setSearched(true);

        try {
            const data = await getWifiList();
            const items = getItems(data);

            const result = items.filter((wifi) => {
                const text = JSON.stringify(wifi);
                return text.includes(keyword);
            });

            setWifiList(result);
        } catch (error) {
            console.log(error);
            alert("데이터를 불러오는 중 문제가 발생했습니다.");
        }

        setLoading(false);
        };

        return (
            <div className="page">

                <h1>무료 공공 와이파이 조회 서비스</h1>
                <p>지역명이나 장소명을 입력하면 무료 공공 와이파이 정보 조회 가능</p>

                <div className="search-box">
                    <input type="text" placeholder="예: 서울, 경기" value={keyword}
                    onChange={(e) => setKeyword(e.target.value)} />
                    <button onClick={handleSearch}>검색</button>
                </div>

                {loading && <p>데이터를 불러오는 중...</p>}

                {!loading && searched && (
                    <p>검색 결과: {wifiList.length}개</p>
                )}

                {!loading && searched && wifiList.length === 0 && (
                    <p>검색 결과 없음</p>
                )}

                <div className="card-list">
                    {wifiList.map((wifi, index) => (
                        <div className="wifi-card" key={index}>
                            <h3>{wifi.INSTL_PLC_NM || "설치 장소명 없음"}</h3>

                            <p>지역: {wifi.INSTL_CTPV_NM} {wifi.INSTL_SIGNGU_NM}</p>
                            <p>주소: {wifi.LCTN_ROAD_NM_ADDR || "주소 정보 없음"}</p>
                            <p>상세 위치: {wifi.INSTL_PLC_DTL || "상세 위치 정보 없음"}</p>
                            <p>설치 시설: {wifi.INSTL_FCLT_SE_NM || "시설 정보 없음"}</p>
                            <p>제공사: {wifi.SRVC_PROV_NM || "제공사 정보 없음"}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default WifiPage;